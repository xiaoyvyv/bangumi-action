# Bangumi.tv 收藏卡片 for Github Actions

这个 Actions 脚本可以根据你的 Bangumi.TV 的收藏，自动生成一个精美的卡片，并自动上传到 github 仓库，你可以在任何地方（你的网站、博客首页、Github首页）引用这个收藏卡片的图片链接，并且会根据你配置的 Github Actions 定时自动更新。

### 卡片预览效果
![https://github.com/xiaoyvyv/bangumi-action](https://github.com/xiaoyvyv/bangumi-data/raw/main/bgm/card.svg)

## Inputs

- ### `github-token`
  Action Token 固定值：`${{secrets.GITHUB_TOKEN}}` 

- ### `bgm-user-id`

  Bangumi.TV 的用户 ID，如果你已经设置了用户名，请使用用户名，如 `xiaoyvyv`。

- ### `bgm-img-path`

  生成成功后，上传的当前仓库的路径，如 `bgm/collection.svg` 则会上传到当前仓库 `bgm` 文件夹下，需要以 `.svg` 结尾。

## 注意事项
你需要在配置该 Actions 的仓库设置页面，将 Action 的权限从 `只读` 调整为 `读写`

> 项目页面 -> Settings TAB -> Action -> General -> Workflow permissions -> 勾选 Read and write permissions -> Save

## Github Action 使用示例

你只需要在你要使用该 Action 的仓库中，配置 `bgm-user-id` 和 `bgm-img-path` 即可，其它可以不用动。

```yaml
name: Bgm-Data-Sync
on:
  # 每日零点执行（这个配置最小间隔5分钟）
  schedule: [{ cron: '0 0 * * *' }]
  # 手动触发
  workflow_dispatch:
  # master/main 分支有提交时执行
  push: {branches: ["master", "main"]}

jobs:
  bgm-sync:
    runs-on: ubuntu-latest
    name: 每日同步BGM收藏卡片
    steps:
      - name: Bgm Collection Card
        id: bgm
        uses: xiaoyvyv/bangumi-action@v1.1.15
        with:
          github-token: '${{secrets.GITHUB_TOKEN}}'
          bgm-user-id: 'xiaoyvyv'
          bgm-img-path: 'bgm/card.svg'

      - name: Get the output image url
        run: echo "图片生成的链接地址 ${{ steps.bgm.outputs.message }}"
```
