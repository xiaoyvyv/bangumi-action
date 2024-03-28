module.exports = {
    temp: "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"480\" height=\"950\" class=\"\">\n" +
        "    <defs>\n" +
        "        <style/>\n" +
        "    </defs>\n" +
        "    <style>\n" +
        "        @keyframes animation-gauge {\n" +
        "            0% {\n" +
        "                stroke-dasharray: 0 329\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "        @keyframes animation-rainbow {\n" +
        "            0%, to {\n" +
        "                color: #7f00ff;\n" +
        "                fill: #7f00ff\n" +
        "            }\n" +
        "            14% {\n" +
        "                color: #a933ff;\n" +
        "                fill: #a933ff\n" +
        "            }\n" +
        "            29% {\n" +
        "                color: #007fff;\n" +
        "                fill: #007fff\n" +
        "            }\n" +
        "            43% {\n" +
        "                color: #00ff7f;\n" +
        "                fill: #00ff7f\n" +
        "            }\n" +
        "            57% {\n" +
        "                color: #ff0;\n" +
        "                fill: #ff0\n" +
        "            }\n" +
        "            71% {\n" +
        "                color: #ff7f00;\n" +
        "                fill: #ff7f00\n" +
        "            }\n" +
        "            86% {\n" +
        "                color: red;\n" +
        "                fill: red\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "        code, svg {\n" +
        "            color: #777\n" +
        "        }\n" +
        "\n" +
        "        svg {\n" +
        "            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n" +
        "            font-size: 14px\n" +
        "        }\n" +
        "\n" +
        "        h2 {\n" +
        "            margin: 8px 0 2px;\n" +
        "            padding: 0;\n" +
        "            color: #0366d6;\n" +
        "            font-weight: 400;\n" +
        "            font-size: 16px\n" +
        "        }\n" +
        "\n" +
        "        h2 svg {\n" +
        "            fill: currentColor\n" +
        "        }\n" +
        "\n" +
        "        section > .field {\n" +
        "            margin-left: 5px;\n" +
        "            margin-right: 5px\n" +
        "        }\n" +
        "\n" +
        "        .field {\n" +
        "            display: flex;\n" +
        "            align-items: center;\n" +
        "            margin-bottom: 2px;\n" +
        "            white-space: nowrap\n" +
        "        }\n" +
        "\n" +
        "        .field svg {\n" +
        "            margin: 0 8px;\n" +
        "            fill: #959da5;\n" +
        "            flex-shrink: 0\n" +
        "        }\n" +
        "\n" +
        "        .row {\n" +
        "            display: flex;\n" +
        "            flex-wrap: wrap\n" +
        "        }\n" +
        "\n" +
        "        .row section {\n" +
        "            flex: 1 1 0\n" +
        "        }\n" +
        "\n" +
        "        #metrics-end, .fill-width {\n" +
        "            width: 100%\n" +
        "        }\n" +
        "\n" +
        "        .people {\n" +
        "            padding: 0 10px\n" +
        "        }\n" +
        "\n" +
        "        .anilist {\n" +
        "            display: flex;\n" +
        "            flex-direction: column;\n" +
        "            align-items: flex-start;\n" +
        "            margin-left: 28px;\n" +
        "            margin-top: 4px\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media {\n" +
        "            display: flex;\n" +
        "            margin-bottom: 4px;\n" +
        "            width: 450px\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media img {\n" +
        "            margin: 0 10px;\n" +
        "            border-radius: 7px\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media .about {\n" +
        "            flex-grow: 1\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media .name {\n" +
        "            display: flex;\n" +
        "            align-items: center;\n" +
        "            justify-content: space-between;\n" +
        "            font-size: 14px;\n" +
        "            line-height: 14px;\n" +
        "            color: #58a6ff\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media .infos {\n" +
        "            font-size: 12px;\n" +
        "            color: #666\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media .infos > div, .steam .media .infos > div {\n" +
        "            display: inline-flex;\n" +
        "            align-items: center;\n" +
        "            margin-right: 16px\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media .infos svg, .steam .media .infos svg {\n" +
        "            fill: currentColor;\n" +
        "            height: 12px;\n" +
        "            width: 12px;\n" +
        "            margin: 0 4px 0 0\n" +
        "        }\n" +
        "\n" +
        "        .anilist .media .description, .steam .media .description {\n" +
        "            overflow: hidden;\n" +
        "            text-overflow: ellipsis;\n" +
        "            display: block;\n" +
        "            width: 380px;\n" +
        "            max-height: 38px;\n" +
        "            font-size: 12px;\n" +
        "            white-space: normal;\n" +
        "            display: -webkit-box;\n" +
        "            -webkit-line-clamp: 2;\n" +
        "            -webkit-box-orient: vertical\n" +
        "        }\n" +
        "\n" +
        "        .anilist .characters {\n" +
        "            display: flex;\n" +
        "            flex-wrap: wrap\n" +
        "        }\n" +
        "\n" +
        "        .anilist .characters img {\n" +
        "            margin: 2px;\n" +
        "            border-radius: 7px\n" +
        "        }\n" +
        "\n" +
        "        .steam .games {\n" +
        "            margin-left: 28px\n" +
        "        }\n" +
        "\n" +
        "        .steam .media {\n" +
        "            display: flex;\n" +
        "            margin-bottom: 4px;\n" +
        "            width: 450px\n" +
        "        }\n" +
        "\n" +
        "        .steam .media img {\n" +
        "            margin: 0 10px;\n" +
        "            border-radius: 7px\n" +
        "        }\n" +
        "\n" +
        "        .steam .media > img {\n" +
        "            height: 32px;\n" +
        "            width: 32px\n" +
        "        }\n" +
        "\n" +
        "        .steam .media .about {\n" +
        "            flex-grow: 1\n" +
        "        }\n" +
        "\n" +
        "        .steam .media .infos, .steam .media .name {\n" +
        "            display: flex;\n" +
        "            align-items: center;\n" +
        "            justify-content: space-between\n" +
        "        }\n" +
        "\n" +
        "        .steam .media .name {\n" +
        "            font-size: 14px;\n" +
        "            line-height: 14px;\n" +
        "            color: #58a6ff\n" +
        "        }\n" +
        "\n" +
        "        .steam .media .infos {\n" +
        "            font-size: 12px;\n" +
        "            color: #666\n" +
        "        }\n" +
        "\n" +
        "        code {\n" +
        "            background-color: #7777771f;\n" +
        "            display: inline-block;\n" +
        "            border-radius: 6px;\n" +
        "            padding: 1px 5px;\n" +
        "            font-size: 80%;\n" +
        "            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace\n" +
        "        }\n" +
        "\n" +
        "        :root {\n" +
        "            --color-calendar-graph-day-bg: #ebedf0;\n" +
        "            --color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);\n" +
        "            --color-calendar-graph-day-L1-bg: #9be9a8;\n" +
        "            --color-calendar-graph-day-L2-bg: #40c463;\n" +
        "            --color-calendar-graph-day-L3-bg: #30a14e;\n" +
        "            --color-calendar-graph-day-L4-bg: #216e39;\n" +
        "            --color-calendar-halloween-graph-day-L1-bg: #ffee4a;\n" +
        "            --color-calendar-halloween-graph-day-L2-bg: #ffc501;\n" +
        "            --color-calendar-halloween-graph-day-L3-bg: #fe9600;\n" +
        "            --color-calendar-halloween-graph-day-L4-bg: #03001c;\n" +
        "            --color-calendar-winter-graph-day-L1-bg: #0a3069;\n" +
        "            --color-calendar-winter-graph-day-L2-bg: #0969da;\n" +
        "            --color-calendar-winter-graph-day-L3-bg: #54aeff;\n" +
        "            --color-calendar-winter-graph-day-L4-bg: #b6e3ff;\n" +
        "            --color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);\n" +
        "            --color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);\n" +
        "            --color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);\n" +
        "            --color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06)\n" +
        "        }</style>\n" +
        "    <style/>\n" +
        "    <foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n" +
        "        <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"items-wrapper\">\n" +
        "            <section>\n" +
        "                <h2 class=\"field\">\n" +
        "                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                        <path fill-rule=\"evenodd\"\n" +
        "                              d=\"M4.75 2.5a.25.25 0 00-.25.25v9.91l3.023-2.489a.75.75 0 01.954 0l3.023 2.49V2.75a.25.25 0 00-.25-.25h-6.5zM3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z\"/>\n" +
        "                    </svg>\n" +
        "                    Bangumi.TV\n" +
        "                </h2>\n" +
        "                <div class=\"row fill-width\">\n" +
        "                    <section>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path fill-rule=\"evenodd\"\n" +
        "                                      d=\"M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z\"/>\n" +
        "                            </svg>\n" +
        "                            热门标签：#{TAGS}\n" +
        "                        </div>\n" +
        "                    </section>\n" +
        "                </div>\n" +
        "                <div class=\"row\">\n" +
        "                    <section>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path fill-rule=\"evenodd\"\n" +
        "                                      d=\"M16 3.75a.75.75 0 00-1.136-.643L11 5.425V4.75A1.75 1.75 0 009.25 3h-7.5A1.75 1.75 0 000 4.75v6.5C0 12.216.784 13 1.75 13h7.5A1.75 1.75 0 0011 11.25v-.675l3.864 2.318A.75.75 0 0016 12.25v-8.5zm-5 5.075l3.5 2.1v-5.85l-3.5 2.1v1.65zM9.5 6.75v-2a.25.25 0 00-.25-.25h-7.5a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-4.5z\"/>\n" +
        "                            </svg>\n" +
        "                            收藏 #{COUNT_ANIME_DONE} 部动画\n" +
        "                        </div>\n" +
        "                    </section>\n" +
        "                    <section>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path fill-rule=\"evenodd\"\n" +
        "                                      d=\"M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z\"/>\n" +
        "                            </svg>\n" +
        "                            收藏 #{COUNT_BOOK_DONE} 本书\n" +
        "                        </div>\n" +
        "                    </section>\n" +
        "                </div>\n" +
        "                <div class=\"row fill-width\">\n" +
        "                    <section>\n" +
        "                        <div class=\"anilist\">\n" +
        "                            <h2 class=\"field\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                    <path fill-rule=\"evenodd\"\n" +
        "                                          d=\"M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z\"/>\n" +
        "                                </svg>\n" +
        "                                喜欢的动画\n" +
        "                            </h2>\n" +
        "                            <div class=\"medias largeable-flex-wrap\">\n" +
        "                                #{INFO_TOP_ANIME}\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"anilist\">\n" +
        "                            <h2 class=\"field\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                    <path fill-rule=\"evenodd\"\n" +
        "                                          d=\"M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z\"/>\n" +
        "                                </svg>\n" +
        "                                喜欢的人物\n" +
        "                            </h2>\n" +
        "                            <div class=\"characters\">\n" +
        "                                #{INFO_TOP_CHARACTER}\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </section>\n" +
        "                </div>\n" +
        "            </section>\n" +
        "            <section class=\"steam\">\n" +
        "                <h2 class=\"field\">\n" +
        "                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                        <path fill-rule=\"evenodd\"\n" +
        "                              d=\"M3.267 1.457c.3.286.312.76.026 1.06A6.475 6.475 0 001.5 7a6.472 6.472 0 001.793 4.483.75.75 0 01-1.086 1.034 8.89 8.89 0 01-.276-.304l.569-.49-.569.49A7.971 7.971 0 010 7c0-2.139.84-4.083 2.207-5.517a.75.75 0 011.06-.026zm9.466 0a.75.75 0 011.06.026A7.975 7.975 0 0116 7c0 2.139-.84 4.083-2.207 5.517a.75.75 0 11-1.086-1.034A6.475 6.475 0 0014.5 7a6.475 6.475 0 00-1.793-4.483.75.75 0 01.026-1.06zM8.75 8.582a1.75 1.75 0 10-1.5 0v5.668a.75.75 0 001.5 0V8.582zM5.331 4.736a.75.75 0 10-1.143-.972A4.983 4.983 0 003 7c0 1.227.443 2.352 1.177 3.222a.75.75 0 001.146-.967A3.483 3.483 0 014.5 7c0-.864.312-1.654.831-2.264zm6.492-.958a.75.75 0 00-1.146.967c.514.61.823 1.395.823 2.255 0 .86-.31 1.646-.823 2.255a.75.75 0 101.146.967A4.983 4.983 0 0013 7a4.983 4.983 0 00-1.177-3.222z\"/>\n" +
        "                    </svg>\n" +
        "                    游戏\n" +
        "                </h2>\n" +
        "                <div class=\"row\">\n" +
        "                    <section>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path d=\"M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z\"/>\n" +
        "                            </svg>\n" +
        "                            #{USER_NAME}\n" +
        "                        </div>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path d=\"m10.41.24 4.711 2.774c.544.316.878.897.879 1.526v5.01a1.77 1.77 0 0 1-.88 1.53l-7.753 4.521-.002.001a1.769 1.769 0 0 1-1.774 0H5.59L.873 12.85A1.761 1.761 0 0 1 0 11.327V6.292c0-.304.078-.598.22-.855l.004-.005.01-.019c.15-.262.369-.486.64-.643L8.641.239a1.752 1.752 0 0 1 1.765 0l.002.001ZM9.397 1.534l-7.17 4.182 4.116 2.388a.27.27 0 0 0 .269 0l7.152-4.148-4.115-2.422a.252.252 0 0 0-.252 0Zm-7.768 10.02 4.1 2.393V9.474a1.807 1.807 0 0 1-.138-.072L1.5 7.029v4.298c0 .095.05.181.129.227Zm8.6.642 1.521-.887v-4.45l-1.521.882ZM7.365 9.402h.001c-.044.026-.09.049-.136.071v4.472l1.5-.875V8.61Zm5.885 1.032 1.115-.65h.002a.267.267 0 0 0 .133-.232V5.264l-1.25.725Z\"/>\n" +
        "                            </svg>\n" +
        "                            玩过 #{COUNT_GAME_DONE} 部游戏\n" +
        "                        </div>\n" +
        "                    </section>\n" +
        "                    <section>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path d=\"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z\"/>\n" +
        "                            </svg>\n" +
        "                            点评 #{COUNT_GAME_STAR} 部游戏\n" +
        "                        </div>\n" +
        "                        <div class=\"field\">\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                                <path d=\"m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z\"/>\n" +
        "                            </svg>\n" +
        "                            在玩 #{COUNT_GAME_DOING} 部游戏\n" +
        "                        </div>\n" +
        "                    </section>\n" +
        "                </div>\n" +
        "                <div class=\"games\">\n" +
        "                    <h2 class=\"field\">\n" +
        "                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                            <path fill-rule=\"evenodd\"\n" +
        "                                  d=\"M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z\"/>\n" +
        "                        </svg>\n" +
        "                        最喜欢玩\n" +
        "                    </h2>\n" +
        "                    <div class=\"medias largeable-flex-wrap\">\n" +
        "                        #{INFO_TOP_GAME}\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"games\">\n" +
        "                    <h2 class=\"field\">\n" +
        "                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n" +
        "                            <path fill-rule=\"evenodd\"\n" +
        "                                  d=\"M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z\"/>\n" +
        "                        </svg>\n" +
        "                        最近在玩\n" +
        "                    </h2>\n" +
        "                    <div class=\"medias largeable-flex-wrap\">\n" +
        "                        #{INFO_RECENTLY_GAME}\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </section>\n" +
        "        </div>\n" +
        "    </foreignObject>\n" +
        "</svg>",
    anime: "<div class=\"media largeable-width-half\">\n" +
        "    <img src=\"data:image/jpg;base64,#{ANIME_IMAGE}\" width=\"48\" height=\"72\" alt=\"\"/>\n" +
        "    <div class=\"about\">\n" +
        "        <div class=\"name\">#{ANIME_NAME}</div>\n" +
        "        <div class=\"infos\">\n" +
        "            <div>\n" +
        "                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\"\n" +
        "                     height=\"16\">\n" +
        "                    <path fill-rule=\"evenodd\"\n" +
        "                          d=\"M16 3.75a.75.75 0 00-1.136-.643L11 5.425V4.75A1.75 1.75 0 009.25 3h-7.5A1.75 1.75 0 000 4.75v6.5C0 12.216.784 13 1.75 13h7.5A1.75 1.75 0 0011 11.25v-.675l3.864 2.318A.75.75 0 0016 12.25v-8.5zm-5 5.075l3.5 2.1v-5.85l-3.5 2.1v1.65zM9.5 6.75v-2a.25.25 0 00-.25-.25h-7.5a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-4.5z\"/>\n" +
        "                </svg>\n" +
        "                #{ANIME_TYPE}\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\"\n" +
        "                     height=\"16\">\n" +
        "                    <path fill-rule=\"evenodd\"\n" +
        "                          d=\"M4.75 0a.75.75 0 01.75.75V2h5V.75a.75.75 0 011.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 014.75 0zm0 3.5h8.5a.25.25 0 01.25.25V6h-11V3.75a.25.25 0 01.25-.25h2zm-2.25 4v6.75c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V7.5h-11z\"/>\n" +
        "                </svg>\n" +
        "                #{ANIME_DATE}\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\"\n" +
        "                     height=\"16\">\n" +
        "                    <path fill-rule=\"evenodd\"\n" +
        "                          d=\"M8.834.066C7.494-.087 6.5 1.048 6.5 2.25v.5c0 1.329-.647 2.124-1.318 2.614-.328.24-.66.403-.918.508A1.75 1.75 0 002.75 5h-1A1.75 1.75 0 000 6.75v7.5C0 15.216.784 16 1.75 16h1a1.75 1.75 0 001.662-1.201c.525.075 1.067.229 1.725.415.152.043.31.088.475.133 1.154.32 2.54.653 4.388.653 1.706 0 2.97-.153 3.722-1.14.353-.463.537-1.042.668-1.672.118-.56.208-1.243.313-2.033l.04-.306c.25-1.869.265-3.318-.188-4.316a2.418 2.418 0 00-1.137-1.2C13.924 5.085 13.353 5 12.75 5h-1.422l.015-.113c.07-.518.157-1.17.157-1.637 0-.922-.151-1.719-.656-2.3-.51-.589-1.247-.797-2.01-.884zM4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598 1.794 0 2.28-.223 2.528-.549.147-.193.276-.505.394-1.07.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.922.922 0 00-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336.023-.192.05-.39.076-.586.065-.488.13-.97.13-1.328 0-.809-.144-1.15-.288-1.316-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.861 5.861 0 01-1.567.81V13.3zM2.75 6.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1z\"/>\n" +
        "                </svg>\n" +
        "                #{ANIME_COLLECTION} 收藏\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\"\n" +
        "                     height=\"16\">\n" +
        "                    <path fill-rule=\"evenodd\"\n" +
        "                          d=\"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z\"/>\n" +
        "                </svg>\n" +
        "                #{ANIME_EPS}\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"infos\">\n" +
        "            <div>\n" +
        "                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\"\n" +
        "                     height=\"16\">\n" +
        "                    <path fill-rule=\"evenodd\"\n" +
        "                          d=\"M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z\"/>\n" +
        "                </svg>\n" +
        "                #{ANIME_INFO}\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"description\">\n" +
        "            #{ANIME_DESC}\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>"
};