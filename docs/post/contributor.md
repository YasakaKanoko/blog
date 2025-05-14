# <samp>How to Contribute to Open Source</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>Getting Started</samp>

- <samp>**Fork the Repository**: 在仓库中创建个人 fork</samp>

- <samp>**Clone Your Fork**: 将仓库 clone 至本地计算机</samp>

- <samp>**Create a Branch**: 为贡献创建新分支 (`git checkout -b feature/YourFeatureName`).</samp>

- <samp>**Install Dependencies**: 运行 `npm install` 安装项目依赖</samp>

- <samp>**Commit changes**：提交修改</samp>

  <samp>**Commit Message**：对所作的修改进行简单描述，遵守[Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)</samp>

  <samp>**Extended description**：描述具体修复了哪些问题</samp>

  ```txt
  Commit message:
  	docs: Update 2.installation.md
  Extended description:
  	Fix the content attribute in the tailwind.config.js config file.
  ```

- <samp>**Create Pull Request**：提交 PR</samp>

  <samp>参考项目根目录 CONTRIBUTING 和 Code of Conduct 查看提交的相关信息</samp>

  <samp>简单描述修改的问题，给出相应链接，并在对应图片中指出错误</samp>

  ```md
  Add a title:
  	docs: fix content attribute in tailwind.config.js config file.
  	
  Add a description:
  
  Fix the content attribute in the tailwind.config.js config file.
  
  Problem: The content attribute in the [doc](https://inspira-ui.com/getting-started/installation) is empty, it will cause error during installation
  ![image](https://github.com/user-attachments/assets/60206e0a-585d-49b2-b3a0-9c48aa4f6b31)
  ```

## <samp>Issues</samp>

- <samp>[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)</samp>

- <samp>[如何有效提交 bug](https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)</samp>

## <samp>[Semantic Commit Messages](https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular)</samp>

<samp>最初提出 Commit 约定的项目是 AngularJS，团队建立了详尽的文档说明成员们应该如何进行 Commit</samp>

<samp>[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 是一种规范，简化了 Angular 约定并简单说明了一些基础的 Commit 约定</samp>

- <samp>semantic：提交信息语义化；将 Commit 分类，使其具有意义</samp>

- <samp>conventional：提交信息是约定俗成的，格式是固定的，类型是常用的</samp>

<samp>语义化 Commit， 可以带来更高可读性和更快的速度，更利于编写自动化工具</samp>

### <samp>示例</samp>

- <samp>包含了描述并且脚注中有**破坏性变更**的提交说明</samp>

  ```sh
  feat: allow provided config object to extend other configs
  
  BREAKING CHANGE: `extends` key in config file is now used for extending other config files
  ```

- <samp>包含了 `!` 字符以提醒注意破坏性变更的提交说明</samp>

  ```sh
  feat(api)!: send an email to the customer when a product is shipped
  ```

- <samp>包含了 `!` 和 BREAKING CHANGE 脚注的提交说明</samp>

  ```sh
  chore!: drop support for Node 6
  
  BREAKING CHANGE: use JavaScript features not available in Node 6.
  ```

- <samp>不包含正文的提交说明</samp>

  ```sh
  docs: correct spelling of CHANGELOG
  ```

- <samp>包含范围的提交说明</samp>

  ```sh
  feat(lang): add polish language
  ```

- <samp>包含多行正文和多行脚注的提交说明</samp>

  ```sh
  fix: prevent racing of requests
  
  Introduce a request id and a reference to latest request. Dismiss
  incoming responses other than from latest request.
  
  Remove timeouts which were used to mitigate the racing issue but are
  obsolete now.
  
  Reviewed-by: Z
  Refs: #123
  ```

### <samp>格式</samp>

<samp>Angular 约定要求 Commit 分为 Header、Body、Footer 三部分</samp>

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

<samp>[GitHub 文档格式](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)</samp>

#### <samp>Header</samp>

<samp>Header 是**必填项**，这一行简单描述本次提交的修改，最大 100 字符</samp>

<samp>Header 包含三个部分</samp>

- <samp>Type：短小的前缀，说明更改的类型</samp>

- <samp>Scope：可写，说明更改的上下文</samp>

- <samp>Subject：本次修改的简洁描述</samp>

<samp>Git 中只是 Commit 信息的第一行</samp>

```sh
# 修复了 core 包中的 bug，具体操作是 remove deprecated and defunct wtf* apis
git commit -m "fix(core): remove deprecated and defunct wtf* apis"
```

<samp>`:` 左侧部分称为前缀</samp>

- <samp>`type`：`fix` 操作</samp>
- <samp>`scope`：表示受影响的包是 `core`</samp>

<samp>`:` 右侧部分是 `subject` 表示本次提交的主题</samp>

#### <samp>Body</samp>

<samp>Body 非必填，描述此次修改的原因，或者关于此次修改的细节</samp>

```sh
git commit -m "fix(core): remove deprecated and defunct wtf* apis" -m "These apis have been deprecated in v8, so they should stick around till v10, but since they are defunct we are removing them early so that they don't take up payload size."
```

<samp>`-m` 分段描写，Header 和 Body 之间必须有空行，这种操作自带空行</samp>

> [!NOTE]
>
> <samp>分行操作不只有 `-m` 这一种方式，但是 `-m` 可以适配各种 shell</samp>

#### <samp>Footer</samp>

<samp>Footer 非必填，描述提交的"后续效果"，如：此次修改是 breaking change、关闭 issue、提及贡献者等</samp>

::: code-group

```sh[git]
git commit -m "fix(core): remove deprecated and defunct wtf* apis" -m "These apis have been deprecated in v8, so they should stick around till v10, but since they are defunct we are removing them early so that they don't take up payload size." -m "PR Close #33949"
```

```sh[vim]
fix(core): remove deprecated and defunct wtf* apis (#33949)
These apis have been deprecated in v8, so they should stick around till v10,
but since they are defunct we are removing them early so that they don't take up payload size.

PR Close #33949
```

:::

<samp>此 commit 来自 [Angular](https://github.com/angular/angular/commit/cf420194ed91076afb66d9179245b9dbaabc4fd4)</samp>

### <samp>类型</samp>

<samp>[config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)(基于[Angular 约定](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines))中推荐的 `build:`、`chore:`、 `ci:`、`docs:`、`style:`、`refactor:`、`perf:`、`test:`</samp>

- <samp>`build` ：用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等</samp>

  ```sh
  build: update dependency undici to v7 (#61522)
  build: migrate animations to use rules_js based toolchain (#61479)
  build: replace platform-browser-dynamic with  platform-browser (#61497)
  build: move private testing helpers outside platform-browser/testing (#61472)
  build: use an unstamped version of compiler-cli for running the angular compiler in ng_project (#61479)
  ```

- <samp>`chore`：用于对非业务性代码进行修改，例如修改构建流程或者工具配置等</samp>

  ```sh
  chore(deps): upgrade unimport to v5.0.0
  chore(deps): pin devdependency @codspeed/core to 4.0.1 (main) (#32145)
  chore: upgrade webpack dependencies separately
  chore: remove unneeded JSdoc comments (#32090)
  chore(deps): update all non-major dependencies (main) (#31992)
  ```

- <samp>`ci`：用于修改持续集成流程，例如修改 Travis、Jenkins 等工作流配置</samp>

  ```sh
  ci: change action: review to action: merge in update docs (#61533)
  ci: clean untracked files before running postUpgradeTasks (#61494)
  ci: replace yarn ng-dev misc update-generated-files with separate update commands for specific targets (#61467)
  ci: update step name in workflow (#61393)
  ci: disable updates for @angular/build-tooling (#61294)
  ```

- <samp>`docs`：用于修改文档，例如修改 README 文件、API 文档等</samp>

  ```sh
  docs: add llms.txt (#61285)
  docs: release notes for the v20.0.0-rc.1 release
  docs(docs-infra): preselect search text on re-open (#61129)
  docs: change supported versions when v20 releases (#61238)
  docs: rename @nodoc to @docs-private (#61194)
  ```

- <samp>`feat`：表示在代码库中新增了一个功能 (这和语义化版本中的 [`MINOR`](https://semver.org/lang/zh-CN/#摘要) 相对应)</samp>

  ```sh
  feat(devtools): defer blocks  support (#60629)
  feat(common): Allow passing ScrollOptions to ViewportScroller (#61002)
  feat(core): rename afterRender to afterEveryRender and stabilize (#60999)
  feat(core): introduce TestBed.tick() (#60993)
  feat(compiler-cli): detect missing structural directive imports #59443
  ```

- <samp>`fix`：表示在代码库中修复了一个 bug (这和语义化版本中的 [`PATCH`](https://semver.org/lang/zh-CN/#摘要) 相对应)</samp>

  ```sh
  fix(core): handle different DI token types in Chrome DevTools integration (#61333)
  fix(compiler-cli): avoid ECMAScript private field metadata emit (#61227)
  fix(core): enable stashing only when withEventReplay() is invoked (#61077)
  fix(compiler): incorrectly handling let declarations inside i18n (#60512)
  fix(devtools): fix profiler support with @defer blocks (#61080)
  ```

- <samp>`perf`：用于优化性能，例如提升代码的性能、减少内存占用等</samp>

  ```sh
  perf: refactor Array.includes checks to use Sets (#32133)
  perf(nuxt): use Set for circular dep plugin (#32110)
  perf(nuxt): tree-shake router's handleHotUpdate in production (#31971)
  perf(nuxt): remove unecessary type check for useFetch (#31910)
  perf(nuxt): remove oxc-parser manual wasm fallback logic (#31484)
  ```

- <samp>`refactor`：用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑</samp>

  ```sh
  refactor(core): Disallow autoDetectChanges(false) in zoneless (#61430)
  refactor(migrations): remove unused code (#61260)
  refactor(docs-infra): Clean up embedded editor code (#61242)
  refactor(language-service): initial reference and rename implementation for selectorless (#61240)
  refactor(compiler-cli): produce template symbols for selectorless nodes (#61240)
  ```

- <samp>`style`：用于修改代码的样式，例如调整缩进、空格、空行等</samp>

  ```sh
  style(aio): add space between `.home` and `.hamburger` (#23624)
  style(bazel): fix 2 unformatted .bzl files
  style(core): fix max line length to pass linting (#20441)
  style(nodeTree): fix formatting
  style(compiler): fix lint issues (#23480)
  ```

- <samp>`test`：用于修改测试用例，例如添加、删除、修改代码的测试用例等</samp>

  ```sh
  test(router): Reduce timeout times (#61155)
  test: disable platform-server tests that do not work with zoneless (#61040)
  test: add integration test for platform-server with zoneless (#61040)
  test: add integration test for defer with input on SSR with zones (#61040)
  test(core): type tests for linkedSignal (#60857)
  ```

### <samp>规范</samp>

1. <samp>每个提交都**必须**使用类型字段前缀，如： `feat` 或 `fix` ， 后接**可选的**范围字段，**可选的** `!`，以及**必要的**冒号（英文半角）和空格</samp>

2. <samp>`feat` ：当一个提交为应用或类库实现了新功能时，**必须**使用该类型</samp>

3. <samp>`fix`：当一个提交为应用修复了 bug 时，**必须**使用该类型</samp>

4. <samp>范围字段**可以**跟随在类型字段后面。范围**必须**是一个描述某部分代码的名词，并用圆括号包围，例如： `fix(parser):`</samp>

5. <samp>描述：对代码变更的简短总结；描述字段**必须**直接跟在 `<类型>(范围)` 前缀的冒号和空格之后。 </samp>

   ```sh
   fix: array parsing issue when multiple spaces were contained in string
   ```

6. <samp>在简短描述之后，**可以**编写较长的提交正文，为代码变更提供额外的上下文信息。正文**必须**起始于描述字段结束的一个空行后</samp>

7. <samp>提交的正文内容自由编写，**可以**使用空行分隔不同段落</samp>

8. <samp>正文结束的一个空行之后，**可以**编写一行或多行脚注。每行脚注都**必须**包含一个令牌（token），后面紧跟 `:<space>` 或 `<space>#` 作为分隔符，后面再紧跟令牌的值</samp>

9. <samp>脚注的令牌**必须**使用 `-` 作为连字符，比如：`Acked-by` (这样有助于区分脚注和多行正文)。有一种例外情况就是 `BREAKING CHANGE`，它**可以**被认为是一个令牌</samp>

10. <samp>脚注的值**可以**包含空格和换行，值的解析过程**必须**直到下一个脚注的令牌/分隔符出现为止</samp>

11. <samp>破坏性变更**必须**在提交信息中标记出来，要么在 `<类型>(范围)` 前缀中标记，要么作为脚注的一项</samp>

12. <samp>包含在脚注中时，破坏性变更**必须**包含大写的文本 `BREAKING CHANGE`，后面紧跟着冒号、空格，然后是描述</samp>

    ```sh
     BREAKING CHANGE: environment variables now take precedence over config files
    ```

13. <samp>包含在 `<类型>(范围)` 前缀时，破坏性变更**必须**通过把 `!` 直接放在 `:` 前面标记出来。如果使用了 `!`，那么脚注中**可以**不写 `BREAKING CHANGE:`，同时提交信息的描述中**应该**用来描述破坏性变更</samp>

14. <samp>在提交说明中，**可以**使用 `feat` 和 `fix` 之外的类型</samp>

    ```sh
    docs: updated ref docs
    ```

15. <samp>工具的实现必须**不区分**大小写地解析构成约定式提交的信息单元，只有 `BREAKING CHANGE` **必须**是大写的</samp>

16. <samp>BREAKING-CHANGE 作为脚注的令牌时**必须**是 BREAKING CHANGE 的同义词</samp>

#### <samp> 如果我不小心使用了错误的提交类型，该怎么办呢？</samp>

<samp>例如将 `feat` 写成了 `fix`，在合并或发布这个错误之前，我们建议使用 `git rebase -i` 来编辑提交历史</samp>

### <samp>Emoji</samp>

- <samp>[gitmoji](https://github.com/carloscuesta/gitmoji)</samp>

- <samp>[Commit Message Emoji](https://github.com/dannyfritz/commit-message-emoji)</samp>
