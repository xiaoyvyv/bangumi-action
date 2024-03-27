const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const bgm = require('./api/bgm');

try {
    let bgmUserId = core.getInput('bgm-user-id').trim();
    if (bgmUserId.length === 0) {
        bgmUserId = "xiaoyvyv"
    }
    const githubToken = core.getInput("github-token") || "xxx";
    const octokit = github.getOctokit(githubToken);

    console.log(`Generate for ${bgmUserId}!, token: ${githubToken}`);

    generateBgmImage(bgmUserId).then((string) => {
        console.log("生成卡片执行完成");
        uploadImage(octokit, string);
    });
} catch (error) {
    core.setFailed(error.message);
}

function uploadImage(octokit, string) {
    const {owner, repo} = github.context.repo;
    const fileName = core.getInput("bgm-img-path");

    // 上传文件
    octokit.repos.createOrUpdateFileContents({
        owner: owner,
        repo: repo,
        path: fileName,
        message: 'Upload bgm card form GitHub Actions',
        content: Buffer.from(string).toString('base64'),
        committer: {
            name: 'GitHub Actions',
            email: 'actions@github.com',
        },
        author: {
            name: 'GitHub Actions',
            email: 'actions@github.com',
        },
        sha: '', // 强制覆盖已有文件
    }).then(() => {
        console.log(`File "${fileName}" uploaded successfully.`);
        core.setOutput("message", `File "${fileName}" uploaded successfully.`);
    }).catch(error => {
        core.setOutput("message", `Error uploading file "${fileName}":` + error);
        core.setFailed(error.message);
    });
}

async function generateBgmImage(userId) {
    const totalTags = new Set();
    let animeList = [];
    let bookList = [];
    let gameList = [];

    const data = await bgm.loadAllUserCollection(userId);

    const tempHtml = fs.readFileSync("tmpl/tmp.html", 'utf8');
    const animeTempHtml = fs.readFileSync("tmpl/anime.html", 'utf8');
    const gameTempHtml = fs.readFileSync("tmpl/game.html", 'utf8');

    let characters = await bgm.loadCharacter(userId);

    data.forEach(item => {
        const subject = item.subject || {};

        // TAG
        const tags = item.tags || [];
        tags.forEach(tag => totalTags.add(tag));

        if (item.subject_type === 1) {
            bookList.push(item);
        }
        if (item.subject_type === 2) {
            animeList.push(item);
        }
        if (item.subject_type === 4) {
            gameList.push(item);
        }
    });

    // 按评分，收藏时间排序
    animeList.sort((a, b) => b.rate === a.rate ? b.updated_at > a.updated_at : b.rate - a.rate);
    bookList.sort((a, b) => b.rate === a.rate ? b.updated_at > a.updated_at : b.rate - a.rate);

    // 最喜欢的动画
    const topAnime = animeList.length >= 3 ? animeList.slice(0, 3) : animeList;
    let tmpAnime = await generateSubjectItem(topAnime, animeTempHtml, "动画");

    // 最喜欢玩的游戏
    gameList.sort((a, b) => b.rate - a.rate);
    const topGame = gameList.length >= 1 ? gameList.slice(0, 1) : gameList;
    let mostLikeGame = await generateSubjectItem(topGame, animeTempHtml, "游戏");

    // 最近玩的的游戏
    const recently = gameList.filter(item => item.type === 3)
    recently.sort((a, b) => b.updated_at > a.updated_at ? 1 : 0);
    const recentGame = recently.length >= 1 ? recently.slice(0, 1) : recently;
    let recentlyGame = await generateSubjectItem(recentGame, animeTempHtml, "游戏");

    // 常用标签
    let topTags = [...totalTags];
    topTags = topTags.length >= 3 ? topTags.slice(0, 3) : topTags;

    // 最喜欢的人物
    let characterHtml = "";
    characters = characters.length >= 22 ? characters.slice(0, 22) : characters;
    for (const character of characters) {
        const imgUrl = character.image;
        const imgData = await bgm.downloadImage(imgUrl);
        characterHtml = characterHtml + "<img src=\"data:image/png;base64," + imgData + "\" width=\"36\" height=\"54\" alt=\"\"/>"
    }

    // 玩过，在玩，点评的游戏
    let doneGame = 0
    let doingGame = 0
    let starGame = 0;
    gameList.forEach(item => {
        if (item.type === 2) {
            doneGame++;
        }
        if (item.type === 3) {
            doingGame++;
        }
        if (item.rate !== 0) {
            starGame++;
        }
    });

    const output = tempHtml
        .replace("#{TAGS}", topTags.join(', '))
        .replace("#{COUNT_ANIME_DONE}", animeList.length.toString())
        .replace("#{COUNT_BOOK_DONE}", bookList.length.toString())
        .replace("#{INFO_TOP_ANIME}", tmpAnime)
        .replace("#{INFO_TOP_CHARACTER}", characterHtml)
        .replace("#{USER_NAME}", userId)
        .replace("#{COUNT_GAME_DONE}", doneGame.toString())
        .replace("#{COUNT_GAME_STAR}", starGame.toString())
        .replace("#{COUNT_GAME_DOING}", doingGame.toString())
        .replace("#{INFO_TOP_GAME}", mostLikeGame)
        .replace("#{INFO_RECENTLY_GAME}", recentlyGame);

    //  fs.writeFileSync("output.svg", output, 'utf-8');
    return output;
}


async function generateSubjectItem(items, animeTempHtml, typeName) {
    if (items == null) return ""
    let tmp = "";
    for (const item of items) {
        tmp = tmp + animeTempHtml
            .replace("#{ANIME_TYPE}", typeName)
            .replace("#{ANIME_NAME}", getName(item.subject))
            .replace("#{ANIME_DATE}", item.subject['date'])
            .replace("#{ANIME_COLLECTION}", item.subject['collection_total'])
            .replace("#{ANIME_EPS}", item.subject['eps'] + "话")
            .replace("#{ANIME_INFO}", getTags(item))
            .replace("#{ANIME_DESC}", item.subject['short_summary'])
            .replace("#{ANIME_IMAGE}", await bgm.downloadImage(item.subject['images']['small']))
    }
    return tmp;
}

function getName(subject) {
    if (subject == null) return ""
    const cn = subject['name_cn'] || "";
    if (cn.length > 0) return cn;
    return subject['name'] || '';
}

function getTags(item) {
    const tags = item.tags || [];
    if (tags.length !== 0) return tags.join(", ");
    const subject = item.subject || {};
    const t = (subject.tags || []).map(item => item.name).join(", ");
    return t.length === 0 ? '暂无' : t
}

