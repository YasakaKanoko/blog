# <samp>Things I am using</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>开发</samp>

- <samp>[GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Git 可视化</samp>

- <samp>[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): 拼写检查</samp>

- <samp>[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): 改进错误、警告和其他语言诊断的突出显示</samp>

- <samp>[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)：代码检查工具</samp>

  ::: details

  ```json
  {
    // Disable the default formatter, use eslint instead
    "prettier.enable": false,
    "editor.formatOnSave": false,
  
    // Auto fix
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },
  
    // Silent the stylistic rules in you IDE, but still auto fix them
    "eslint.rules.customizations": [
      { "rule": "style/*", "severity": "off", "fixable": true },
      { "rule": "format/*", "severity": "off", "fixable": true },
      { "rule": "*-indent", "severity": "off", "fixable": true },
      { "rule": "*-spacing", "severity": "off", "fixable": true },
      { "rule": "*-spaces", "severity": "off", "fixable": true },
      { "rule": "*-order", "severity": "off", "fixable": true },
      { "rule": "*-dangle", "severity": "off", "fixable": true },
      { "rule": "*-newline", "severity": "off", "fixable": true },
      { "rule": "*quotes", "severity": "off", "fixable": true },
      { "rule": "*semi", "severity": "off", "fixable": true }
    ],
  
    // Enable eslint for all supported languages
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "vue",
      "html",
      "markdown",
      "json",
      "jsonc",
      "yaml",
      "toml",
      "xml",
      "gql",
      "graphql",
      "astro",
      "svelte",
      "css",
      "less",
      "scss",
      "pcss",
      "postcss"
    ]
  }
  ```

  :::

- <samp>[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): 指定配置文件 `.prettierrc.js` 在项目中通过配置文件进行格式化</samp>

  ::: details

  ```json
  "prettier.enable": false,
  "prettier.printWidth": 200,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  ```

  :::

- <samp>[i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)：国际化</samp>

- <samp>[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Tailwind CSS 智能提示</samp>

- <samp>[CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)：查找 CSS 模块；仅支持 React</samp>

- <samp>[UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)：创建一些规则后，您可以将它们提取到预设中，并与他人共享</samp>

  ::: details

  ::: code-group

  ```ts[uno.config.ts]
  import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWebFonts,
    presetWind3,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [
      // ...
    ],
    theme: {
      colors: {
        // ...
      }
    },
    presets: [
      presetWind3(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })
  ```

  :::

- <samp>[Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify): 内敛图标预览</samp>

- <samp>[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)：静态和动态页面实时重新加载功能的开发本地服务器</samp>

- <samp>[Browse Lite](https://marketplace.visualstudio.com/items?itemName=antfu.browse-lite)：VSCode 中嵌入简版服务器</samp>

- <samp>[Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite)：VSCode 本地嵌入 Vite 服务器</samp>

- <samp>[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)：Vue 官方提供的格式化、语法检查工具</samp>

- <samp>[ES7 React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets): 代码片段</samp>

- <samp>[Shader languages support for VS Code](https://marketplace.visualstudio.com/items?itemName=slevesque.shader)：Web GL 必备的着色器语言的语法高亮工具</samp>

- <samp>[shadcn Color Preview](https://marketplace.visualstudio.com/items?itemName=dexxiez.shadcn-color-preview): 颜色转换</samp>

- <samp>[Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)：颜色高亮</samp>

- <samp>[Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv): 分隔 CSV、TSV 和 其他分隔符文件</samp>

- <samp>[change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case): 命名转换</samp>

- <samp>[Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor): 方便编辑提交信息</samp>

- <samp>[px to rem & rpx & vw (cssrem)](https://github.com/cipchk/vscode-cssrem/blob/HEAD/README.zh-CN.md): px、rem 相互转换</samp>

- <samp>[Template String Converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter): 输入 `${` 自动转为模板字符串</samp>

- <samp>[TabOut](https://marketplace.visualstudio.com/items?itemName=albert.TabOut): 按 `Tab` 跳出括号</samp>

- <samp>[Tab Cycle](https://marketplace.visualstudio.com/items?itemName=mpontus.tab-cycle)：确保最近选项卡始终保持在最前</samp>

  > <samp>`Alt` + `<number>` 选项卡将顺序切换；`Ctrl` + `<PageUp>` / `<PageDown>` 选项卡将循环切换</samp>

- <samp>[vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components): 组件样式语法高亮</samp>

- <samp>[Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag): 标签高亮</samp>

- <samp>[Parameter Hints](https://marketplace.visualstudio.com/items?itemName=DominicVonk.parameter-hints): 函数参数智能提示</samp>

## <samp>辅助</samp>

- <samp>[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)</samp>
- <samp>[SVG Gallery](https://marketplace.visualstudio.com/items?itemName=developer2006.svg-gallery)</samp>
- <samp>[Image Gallery](https://marketplace.visualstudio.com/items?itemName=GeriYoco.vscode-image-gallery)</samp>
- <samp>[Figma for VS Code](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension)</samp>
- <samp>[Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)</samp>
- <samp>[Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)</samp>
- <samp>[Comment Translate](https://marketplace.visualstudio.com/items?itemName=intellsmi.comment-translate)</samp>
- <samp>[Slidev](https://marketplace.visualstudio.com/items?itemName=antfu.slidev)</samp>
- <samp>[Where Am I?](https://marketplace.visualstudio.com/items?itemName=antfu.where-am-i)</samp>
- <samp>[TSConfig Helper](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-tsconfig-helper)</samp>

## <samp>工具</samp>

- <samp>[project-tree](https://marketplace.visualstudio.com/items?itemName=zhucy.project-tree)</samp>
- <samp>[Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)</samp>
- <samp>[:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense)</samp>
- <samp>[CodeTour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour)</samp>
- <samp>[vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)</samp>
- <samp>[Office Viewer](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office)</samp>
- <samp>[CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)</samp>
- <samp>[Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)</samp>
- <samp>[Dev Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)</samp>
- <samp>[Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)</samp>
- <samp>[SQLite3 Editor](https://marketplace.visualstudio.com/items?itemName=yy0931.vscode-sqlite3-editor)</samp>
- <samp>[Open in GitHub Button](https://marketplace.visualstudio.com/items?itemName=antfu.open-in-github-button)</samp>
- <samp>[GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)</samp>
- <samp>[GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)</samp>
- <samp>[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)</samp>
- <samp>[WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)</samp>

## <samp>外观</samp>

- <samp>[Power Mode](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-power-mode)</samp>
- <samp>[1984](https://marketplace.visualstudio.com/items?itemName=juanmnl.vscode-theme-1984)</samp>
- <samp>[Carbon Product Icons](https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon)</samp>
- <samp>[Catppuccin for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)</samp>
- <samp>[Catppuccin Icons for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons)</samp>
- <samp>[vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)</samp>
- <samp>[One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)</samp>
- <samp>[Vitesse Theme](https://marketplace.visualstudio.com/items?itemName=antfu.theme-vitesse)</samp>
- <samp>[file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons)</samp>
- <samp>[Gruvbox Material](https://marketplace.visualstudio.com/items?itemName=sainnhe.gruvbox-material)</samp>
- <samp>[Vira Theme](https://marketplace.visualstudio.com/items?itemName=vira.vsc-vira-theme)</samp>

## <samp>自动补全</samp>

- <samp>[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)</samp>
- <samp>[Tabnine: AI Chat & Autocomplete for JavaScript, Python, TypeScript, Java, PHP, Go, and more](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)</samp>
- <samp>[Fitten Code: Faster and Better AI Assistant](https://marketplace.visualstudio.com/items?itemName=FittenTech.Fitten-Code)</samp>
- <samp>[Mintlify Doc Writer for Python, JavaScript, TypeScript, C++, PHP, Java, C#, Ruby & more](https://marketplace.visualstudio.com/items?itemName=mintlify.document)</samp>

## <samp>刷题</samp>

- <samp>[Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)</samp>
- <samp>[algorithm](https://marketplace.visualstudio.com/items?itemName=supperchong.algorithm)</samp>

## <samp>軟體</samp>

- <samp>[AltSnap](https://www.majorgeeks.com/files/details/altsnap.html)</samp>
- <samp>[Snipaste](https://www.snipaste.com/)</samp>
- <samp>[ScreenToGif](https://www.screentogif.com/)</samp>
- <samp>[Everything](https://www.voidtools.com/zh-cn/downloads/)</samp>

## <samp>浏览器插件</samp>

- <samp>[File Icons for GitHub and GitLab](https://chromewebstore.google.com/detail/file-icons-for-github-and/ficfmibkjjnpogdcfhfokmihanoldbfe)</samp>
- <samp>[Language Reactor](https://chromewebstore.google.com/detail/language-reactor/hoombieeljmmljlkjmnheibnpciblicm?hl=zh-CN&utm_source=ext_sidebar)</samp>
- <samp>[Refined GitHub](https://chromewebstore.google.com/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf?hl=zh-CN&utm_source=ext_sidebar)</samp>
- <samp>[沉浸式翻译 - 网页翻译插件 | PDF翻译 | 免费](https://chromewebstore.google.com/detail/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91-%E7%BD%91%E9%A1%B5%E7%BF%BB%E8%AF%91%E6%8F%92%E4%BB%B6-pdf%E7%BF%BB%E8%AF%91-%E5%85%8D%E8%B4%B9/bpoadfkcbjbfhfodiogcnhhhpibjhbnh?hl=zh-CN&utm_source=ext_sidebar)</samp>
