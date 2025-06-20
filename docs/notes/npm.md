# <samp>npm</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>**包管理器**：主要用于管理项目的依赖(如：库、框架或工具)，确保项目能够以一致的方式在不同环境(开发、测试、生产)中运行</samp>

- <samp>**依赖管理**：跟踪依赖的版本，确保兼容性，支持开发依赖(`devDependencies`)和生产依赖(`dependencies`)</samp>
- <samp>**版本控制**：使用锁文件记录依赖的确切版本，确保构建一致性</samp>

- <samp>**脚本执行**：运行 `package.json` 中的脚本，自动化构建、测试、部署等任务</samp>
- <samp>**包发布与共享**：允许开发者将自己的包发布到公共或私有仓库</samp>
- <samp>**环境一致性**：确保不同开发者的环境使用相同的依赖版本</samp>

## <samp>nvm</samp>

<samp>nvm (Node Version Manager) Node 版本管理器</samp>

- <samp>`nvm -v`：查看 `nvm` 版本</samp>

- <samp>`nvm arch`：当前操作系统位数</samp>

- <samp>`nvm install <version> [arch]`：安装指定版本的 Node</samp>

  ```sh
  nvm install latest
  ```

- <samp>`nvm list [available]`：显示可安装的所有版本，`list` 简写 `ls`</samp>

- <samp>`nvm on`：开启 Node 版本管理</samp>

- <samp>`nvm off`：关闭 Node 管理</samp>

- <samp>`nvm alias default vx.y.z`：设置默认版本</samp>

  ```sh
  nvm install 18.10.0
  
  nvm alias default 18.10.0
  
  nvm use default
  ```

- <samp>`nvm use [version] [arch]`：使用指定版本的 Node</samp>

- <samp>`nvm uninstall <version>`：写在指定版本的 Node</samp>

## <samp>corepack</samp>

<samp>`corepack` 是 Node.js v16.9.0 开始内置的一个工具，用于管理包管理器(`npm`、`pnpm`、`yarn`)的版本</samp>

- <samp>`corepack` 会先读取 `package.json` 中的 `"packageManager"` 字段；使用指定版本执行</samp>

  ```sh
  # 启用corepack
  corepack enable
  
  # 检查corepack状态
  corepack --version
  yarn -v
  pnpm -v
  
  # 禁用corepack
  corepack disable
  ```

- <samp>**缓存**</samp>

  - <samp>Linux/MacOS：`~/.cache/node/corepack`</samp>

  - <samp>Windows：`%LocalAppData%\node\corepack`</samp>

- <samp>**禁用自动添加** `"packageManager"`</samp>

  ::: code-group

  ```ini[.npmrc]
  enable-strict-package-manager=false
  ```

  :::

## <samp>开始</samp>

::: code-group

```sh[npm]
npm init -y
```

```sh[pnpm]
pnpm init
```

```sh[yarn]
yarn init -y
```

```sh[bun]
bun init
```

:::

## <samp>package.json</samp>

- <samp>`name`: 项目名称</samp>
  - <samp>符合 `npm` 命名规则(小写、无空格)</samp>

- <samp>`version`: 版本号</samp>
  - <samp>遵循语义化版本规范(SemVer)</samp>

- <samp>`description`: 项目描述</samp>
- <samp>`type`: 模块类型</samp>
- <samp>`main`: 入口文件</samp>
- <samp>`scripts`: 可执行脚本</samp>
- <samp>`keywords`: 搜索关键字</samp>
  - <samp>默认值：空数组 `[]`</samp>

- <samp>`author`: 作者信息</samp>
  - <samp>`name`：姓名</samp>
  - <samp>`email`：电子邮件</samp>
  - <samp>`url`：网站主页</samp>

- <samp>`license`: 许可证</samp>
  - <samp>默认值：`"ISC"`</samp>
- <samp>`dependencies`: 生产环境依赖</samp>
- <samp>`devDependencies`: 开发环境依赖</samp>
- <samp>`peerDependencies`：要求使用该项目的开发者自行安装，需要与指定版本兼容</samp>
- <samp>`packageManager`: 指定包管理器</samp>
- <samp>`repository`：代码仓库信息</samp>
  - <samp>`type`：仓库类型</samp>
  - <samp>`url`：仓库 URL</samp>
  - <samp>`directory`：如果项目是仓库的子目录，指定绝对路径</samp>

### <samp>version</samp>

<samp>**语义化版本控制(Semantic Versioning，简称 SemVer)**，格式：`MAJOR.MINOR.PATCH` (主版本号.次版本号.补丁版本号)，每个部分是数字</samp>

- <samp>`MAJOR`：表示破坏性变更(Breaking Changes)</samp>

  - <samp>例：可能更改了 API 接口或删除了功能</samp>

  - <samp>场景：需要开发者调整代码以适应新版本</samp>

- <samp>`MINOR`：向后兼容的功能(新增功能但不破坏现有功能)</samp>
  - <samp>例：添加了新特性但旧代码仍可运行</samp>
  - <samp>场景：通常无需修改代码即可升级</samp>
- <samp>`PATCH`：向后兼容的错误修复(Bug Fixes)</samp>
  - <samp>例：修复了 bug，但功能和接口不变</samp>
  - <samp>场景：安全且直接升级</samp>

<samp>**修饰符**</samp>

- <samp>**预发布版本(Pre-release)**</samp>
  - <samp>在版本号后添加连字符和标识符，如：1.0.0-alpha、1.0.0-beta.1</samp>
  - <samp>表示不稳定的版本，通常用于测试</samp>
  - <samp>示例：1.0.0-alpha 表示 alpha 预发布版，可能有未完成功能</samp>
- <samp>**构建元数据(Build Metadata)**</samp>
  - <samp>在版本号后添加 + 和元数据，如：1.0.0+build.123</samp>
  - <samp>表示附加信息(如构建号)，不影响版本优先级</samp>
  - <samp>示例：1.0.0+20230620 表示特定构建</samp>

<samp>**更新**</samp>

- <samp>`npm version patch`：递增补丁版本(1.2.3 -> 1.2.4)，用于 bug 修复</samp>
- <samp>`npm version minor`：递增次版本(1.2.3 -> 1.3.0)，用于新功能</samp>
- <samp>`npm version major`：递增主版本(1.2.3 -> 2.0.0)，用于破坏性变更</samp>

<samp>**规则**</samp>

- <samp>**精确版本**：表示精确版本，等同于 `=`</samp>
- <samp>**波浪号**(`~`)：允许补丁版本更新</samp>
- <samp>**插入符**(`^`)：允许次版本和补丁版本更新</samp>
- <samp>**星号**(`*`)：允许任意版本更新(不推荐)</samp>
- <samp>**等于**(`=`)：仅允许指定的精确版本</samp>
- <samp>**大于**(`>`)：允许大于指定版本</samp>
- <samp>**大于等于**(`>=`)：允许大于或等于指定版本</samp>
- <samp>**小于**(`<`)：允许小于指定版本</samp>
- <samp>**小于等于**(`<=`)：允许小于或等于指定版本</samp>
- <samp>**版本范围**(`-`)：允许同时满足多个版本范围</samp>

## <samp>命令</samp>

- <samp>`--save`：(默认行为)安装依赖</samp>

  ::: code-group

  ```sh[npm]
  npm install lodash
  ```

  ```sh[pnpm]
  pnpm add lodash
  ```

  ```sh[yarn]
  yarn add lodash
  ```

  ```sh[bun]
  bun add lodash
  ```

  :::

- <samp>`--save-dev`：简写 `-D` ，安装依赖并保存到 `devDependencies`</samp>

  ::: code-group

  ```sh[npm]
  npm install webpack -D
  ```

  ```sh[pnpm]
  pnpm add webpack -D
  ```

  ```sh[yarn]
  yarn add webpack -D
  ```

  ```sh[bun]
  bun add webpack -D
  ```

  :::

- <samp>`--save-exact`, `-E`：精确安装版本，而不是默认版本</samp>

  ```sh
  # --save-dev表示精确匹配3.4.0, 不会匹配小版本3.4.1
  npm i typescript@3.4 --save-dev --save-exact
  ```

- <samp>`@`：安装指定版本</samp>

  ```sh
  npm i typescript@3.4
  ```

- <samp>`npm root [-g] <包名>`：查看包路径</samp>

  ```sh
  npm root corepack -g
  ```

- <samp>`npm view <包名>`：查看包信息</samp>

  ```sh
  npm view corepack
  ```

- <samp>`npm list [-g]`：查看安装包</samp>

  ```sh
  npm list -g
  ```

- <samp>`npm outdated`：检测依赖中是否有新版本可用</samp>

  ```sh
  # 检测新版本
  npm outdated
  
  # 更新依赖
  npm update
  ```

  ```json
  {
    "dependencies": {
      "express": "^4.17.0",
      "lodash": "^4.17.21"
    },
    "devDependencies": {
      "jest": "^26.6.0"
    }
  }
  ```

- <samp>`npm update [-g] [<包名>]`：更新包</samp>

- <samp>`npm uninstall [-g] [<包名>]`：卸载包</samp>

- <samp>`npm config ls [-l] [--json]`：显示已生效配置</samp>

- <samp>`npm config get 配置项`：获取某个配置</samp>

  ```sh
  npm config get registry
  ```

- <samp>`npm config set 配置项 值`：设置某个配置</samp>

  ```sh
  npm config set registry https://registry.npmmirror.com
  ```

- <samp>`npm config delete 配置项`：删除某个配置</samp>

  ```sh
  npm config delete registry
  ```

- <samp>`npm login`：登录</samp>

- <samp>`npm whoami`：查看当前登录的账号</samp>

- <samp>`npm logout`：注销</samp>

- <samp>`npm publish`：发布</samp>

## <samp>scripts</samp>

<samp>不需要使用 `run` 的脚本</samp>

- <samp>`start`</samp>
- <samp>`stop`</samp>
- <samp>`test`</samp>

> <samp>脚本可以省略 `npx`</samp>
>
> <samp>`start` 具有默认值：`node server.js`</samp>

您好！您提到的这些是前端包管理工具中常用的命令和选项，它们主要用于管理项目依赖。我将为您逐一解释它们的作用，并给出 `npm`、`Yarn`、`pnpm` 和 `Bun` 的对应示例。

---

### **命令与选项解释**

* **`--save`**:
    这个选项用于将安装的包添加到项目的 **`dependencies`**（生产依赖）中。这些是项目在运行时需要的依赖。在 `npm` 5.0.0 版本之后，`--save` 成为默认行为，所以通常可以省略。

* **`--save-dev`**:
    这个选项用于将安装的包添加到项目的 **`devDependencies`**（开发依赖）中。这些是项目在开发、测试或构建过程中需要的依赖，但在生产环境中不需要。例如，像构建工具（Webpack）、测试框架（Jest）等都属于开发依赖。

* **`--save-exact`**:
    这个选项用于在 `package.json` 文件中保存依赖时，精确地锁定包的版本号，而不是使用默认的波浪号 `~` 或插入符 `^`。这意味着它会记录确切的版本号（例如 `1.2.3`），而不是允许小版本或补丁版本的更新（例如 `~1.2.3` 允许 `1.2.x`，`^1.2.3` 允许 `1.x.x`）。这有助于确保团队成员之间以及部署环境中的依赖版本一致性。

* **`@root`**:
    这通常不是一个独立的命令或选项，而是**指定包作用域**的一种方式。在许多包管理工具中，`@scope/package-name` 是一种命名约定，用于组织相关联的包。`@root` 在这里可能指的是安装到项目根目录，或者在 monorepo 结构中指代根项目，但它本身不是一个可执行命令。如果您想表达的是在项目根目录执行操作，那只是命令执行的**上下文**。

* **`list`**:
    此命令用于列出当前项目中已安装的包及其依赖树。它可以帮助您查看项目的依赖结构和版本信息。

* **`outdated`**:
    此命令用于检查项目中已安装的包是否有新的可用版本。它会显示当前安装的版本、最新可用版本以及您的 `package.json` 文件中指定的版本范围。这对于识别需要更新的依赖非常有用。

* **`update`**:
    此命令用于将项目中已安装的包更新到其 `package.json` 文件中指定范围内的最新版本。它会尊重您在 `package.json` 中定义的版本约束（例如 `^` 或 `~`）。

* **`uninstall`**:
    此命令用于从项目中卸载（移除）指定的包，并同时从 `package.json` 文件中移除其记录。

* **`audit`**:
    此命令用于扫描项目的依赖，以查找已知的安全漏洞。如果发现漏洞，它会提供详细信息和建议的修复措施。

* **`why` (或类似 `find`、`why-package`):**
    这个命令（或类似的命令）用于解释为什么某个包被安装到项目中。它会显示该包是如何成为依赖树的一部分的，例如，是直接依赖还是某个其他依赖的子依赖。这对于调试依赖冲突或理解依赖关系非常有用。

* **`dlx` (或 `npx`、`pnpx`、`bunx`):**
    `dlx` (在 `pnpm` 中)，`npx` (在 `npm` 中)，`bunx` (在 `Bun` 中) 都是用于**执行一次性命令**的工具。它们允许您运行一个包中包含的可执行文件，而无需全局安装该包。当您需要运行一个命令行工具，但又不想将其永久添加到项目依赖或全局安装时，这非常方便。它会在执行后自动清理，不会污染您的环境。

---

### **各包管理工具示例**

以下是这些命令和选项在 `npm`、`Yarn`、`pnpm` 和 `Bun` 中的对应示例：

#### **1. `npm` (Node Package Manager)**

`npm` 是 Node.js 默认的包管理器。

* **安装依赖并保存到 `dependencies` (默认行为):**
    ```bash
    npm install <package-name>
    # 例如:
    npm install lodash
    ```

* **安装依赖并保存到 `devDependencies`:**
    ```bash
    npm install <package-name> --save-dev
    # 简写:
    npm install <package-name> -D
    # 例如:
    npm install jest -D
    ```

* **精确保存版本:**
    ```bash
    npm install <package-name> --save-exact
    # 简写:
    npm install <package-name> -E
    # 例如:
    npm install react -E
    ```

* **列出已安装的包:**
    ```bash
    npm list
    # 只列出顶层依赖:
    npm list --depth=0
    ```

* **检查过时的包:**
    ```bash
    npm outdated
    ```

* **更新包:**
    ```bash
    npm update
    # 更新特定包:
    npm update <package-name>
    ```

* **卸载包:**
    ```bash
    npm uninstall <package-name>
    # 简写:
    npm uni <package-name>
    # 例如:
    npm uninstall lodash
    ```

* **审计安全漏洞:**
    ```bash
    npm audit
    ```

* **解释包的来源 (使用 `npm ls` 结合):**
    `npm` 没有直接的 `why` 命令。通常通过 `npm ls <package-name>` 来查看某个包在依赖树中的位置。
    ```bash
    npm ls webpack
    ```

* **执行一次性命令:**
    ```bash
    npx <command> [args...]
    # 例如，运行 Create React App 的脚手架:
    npx create-react-app my-app
    ```

---

#### **2. `Yarn`**

`Yarn` 是 Facebook、Google、Exponent 和 Tilde 联合开发的一款新的 JavaScript 包管理器。

* **安装依赖并保存到 `dependencies` (默认行为):**
    ```bash
    yarn add <package-name>
    # 例如:
    yarn add axios
    ```

* **安装依赖并保存到 `devDependencies`:**
    ```bash
    yarn add <package-name> --dev
    # 简写:
    yarn add <package-name> -D
    # 例如:
    yarn add cypress -D
    ```

* **精确保存版本:**
    ```bash
    yarn add <package-name> --exact
    # 简写:
    yarn add <package-name> -E
    # 例如:
    yarn add vue -E
    ```

* **列出已安装的包:**
    ```bash
    yarn list
    # 只列出顶层依赖:
    yarn list --depth=0
    ```

* **检查过时的包:**
    ```bash
    yarn outdated
    ```

* **更新包:**
    ```bash
    yarn upgrade
    # 更新特定包:
    yarn upgrade <package-name>
    ```

* **卸载包:**
    ```bash
    yarn remove <package-name>
    # 例如:
    yarn remove axios
    ```

* **审计安全漏洞:**
    ```bash
    yarn audit
    ```

* **解释包的来源:**
    `Yarn` 有一个 `why` 命令。
    ```bash
    yarn why <package-name>
    # 例如:
    yarn why react-dom
    ```

* **执行一次性命令:**
    ```bash
    yarn dlx <command> [args...]
    # Yarn Classic:
    yarn run <command> (如果命令在 package.json 的 scripts 中定义)
    # 或者直接执行依赖中的可执行文件:
    yarn <command>
    # 例如 (使用 yarn berry 的 dlx):
    yarn dlx eslint --init
    ```

---

#### **3. `pnpm` (Performant Node.js Package Manager)**

`pnpm` 是一款快速、磁盘空间高效的包管理器，它通过符号链接来避免重复安装依赖。

* **安装依赖并保存到 `dependencies` (默认行为):**
    ```bash
    pnpm add <package-name>
    # 例如:
    pnpm add express
    ```

* **安装依赖并保存到 `devDependencies`:**
    ```bash
    pnpm add <package-name> --save-dev
    # 简写:
    pnpm add <package-name> -D
    # 例如:
    pnpm add webpack -D
    ```

* **精确保存版本:**
    ```bash
    pnpm add <package-name> --save-exact
    # 简写:
    pnpm add <package-name> -E
    # 例如:
    pnpm add svelte -E
    ```

* **列出已安装的包:**
    ```bash
    pnpm list
    # 只列出顶层依赖:
    pnpm list --depth=0
    ```

* **检查过时的包:**
    ```bash
    pnpm outdated
    ```

* **更新包:**
    ```bash
    pnpm update
    # 更新特定包:
    pnpm update <package-name>
    ```

* **卸载包:**
    ```bash
    pnpm remove <package-name>
    # 简写:
    pnpm rm <package-name>
    # 例如:
    pnpm remove express
    ```

* **审计安全漏洞:**
    ```bash
    pnpm audit
    ```

* **解释包的来源:**
    `pnpm` 有一个 `why` 命令。
    ```bash
    pnpm why <package-name>
    # 例如:
    pnpm why typescript
    ```

* **执行一次性命令:**
    ```bash
    pnpm dlx <command> [args...]
    # 或者:
    pnpx <command> [args...]
    # 例如:
    pnpm dlx vite create my-vue-app
    ```

---

#### **4. `Bun`**

`Bun` 是一款新兴的一体化 JavaScript 运行时和工具包，目标是提供极致的性能。它内置了包管理器。

* **安装依赖并保存到 `dependencies` (默认行为):**
    ```bash
    bun add <package-name>
    # 例如:
    bun add zod
    ```

* **安装依赖并保存到 `devDependencies`:**
    ```bash
    bun add <package-name> --development
    # 简写:
    bun add <package-name> -d
    # 例如:
    bun add prettier -d
    ```

* **精确保存版本:**
    ```bash
    bun add <package-name> --exact
    # 简写:
    bun add <package-name> -E
    # 例如:
    bun add next -E
    ```

* **列出已安装的包:**
    ```bash
    bun ls
    # 只列出顶层依赖:
    bun ls --depth 0
    ```

* **检查过时的包:**
    ```bash
    bun outdated
    ```

* **更新包:**
    ```bash
    bun update
    # 更新特定包:
    bun update <package-name>
    ```

* **卸载包:**
    ```bash
    bun remove <package-name>
    # 简写:
    bun rm <package-name>
    # 例如:
    bun remove zod
    ```

* **审计安全漏洞:**
    ```bash
    bun audit
    ```

* **解释包的来源:**
    `Bun` 暂时没有直接的 `why` 命令。可以通过 `bun ls` 结合搜索来查找。

* **执行一次性命令:**
    ```bash
    bunx <command> [args...]
    # 例如:
    bunx shadcn-ui add button
    ```

---

希望这些解释和示例能帮助您更好地理解和使用这些前端包管理工具的命令和选项！如果您有其他问题，请随时提出。
