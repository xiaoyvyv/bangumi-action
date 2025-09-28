const http = require('@actions/http-client');
const cheerio = require('cheerio');
const client = new http.HttpClient();
const headers = {"user-agent": 'Github: https://github.com/xiaoyvyv/bangumi-action'};

/**
 * 查询收藏数据
 *
 * @param userId 用户ID
 * @param subjectType 条目类型
 * - 1 为 书籍
 * - 2 为 动画
 * - 3 为 音乐
 * - 4 为 游戏
 * - 6 为 三次元
 * @param type 收藏类型
 * - 1: 想看
 * - 2: 看过
 * - 3: 在看
 * - 4: 搁置
 * - 5: 抛弃
 * @returns {Promise<*[]>}
 */
const loadAllUserCollection = async (userId, subjectType = '', type = '') => {
    const entities = [];
    const pageSize = 100;

    // 加载收藏数据
    const request = async (page) => {
        const offset = (page - 1) * pageSize;
        const url = `https://api.bgm.tv/v0/users/${userId}/collections?type=${type}&subject_type=${subjectType}&limit=${pageSize}&offset=${offset}`;
        return await client
            .get(url, headers)
            .then(res => res.readBody())
            .then((string) => JSON.parse(string));
    }

    let page = 1
    while (true) {
        const data = await request(page);
        const list = data.data || [];
        entities.push(...list);

        // 没有更多了
        if (list.length < pageSize) break
        page++
    }

    return entities;
}

const loadCharacter = async (userId) => {
    const url = `https://bgm.tv/user/${userId}/mono/character`;
    return await client
        .get(url, headers)
        .then(res => res.readBody())
        .then((string) => {
            const $ = cheerio.load(string);
            const items = [];

            $("#columnA ul > li").each((index, item) => {
                // noinspection JSCheckFunctionSignatures
                const img = $(item).find("img");
                const imgUrl = "https:" + $(img).attr("src").replace("pic/crt/g", "pic/crt/m");
                items.push({
                    image: imgUrl
                });
            });
            return items;
        });
};

const downloadImage = async (url) => {
    console.log(`download image: ${url}`);

    return await client.get(url, headers)
        .then(res => res.readBodyBuffer())
        .then(buffer => buffer.toString('base64').trim());
};

module.exports = {
    loadAllUserCollection: loadAllUserCollection,
    downloadImage: downloadImage,
    loadCharacter: loadCharacter,
}
