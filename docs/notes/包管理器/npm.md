# <samp>npm</samp>

<samp>包管理器</samp>

- <samp><b>模块 (module)</b>：模块是以单个文件形式存在的功能片段，入口文件称为入口模块或主模块</samp>
- <samp><b>库 (lib)</b>：库是以一个或多个模块组成的完整功能块</samp>
- <samp><b>包 (package)</b>：包含元数据的库，通常包括：名称、描述、git、许可证、作者、依赖等</samp>

## <samp>配置</samp>

<samp>`npm init -y` 自动生成配置文件(`package.json`)并自动填充默认配置</samp>

- <samp>`name`：包名</samp>

- <samp>`version`：版本</samp>

  <samp>规范：x.y.z</samp>

  - <samp>`x`：主版本号：当程序发生了重大变化时，如：新增重要功能、新增大量的API、技术架构发生了重大变化</samp>
  - <samp>`y`：次版本号，当程序发生了一些小变化时，如：新增了小功能、新增了一些辅助型的API</samp>
  - <samp>`z`：补丁版本号，当解决了一些 bug 或 进行了一些局部优化时更新，如：修复了某个函数的 bug、提升了某个函数的运行效率</samp>

- <samp>`description`：描述</samp>
- <samp>`keywords`：搜索关键字；可以通过该数组的关键字搜索到包的内容</samp>

- <samp>`author`：作者，格式 `zhangsan <zhangsan@example.com>`</samp>

- <samp>`repository`：包的地址</samp>
  - <samp>`type`：仓库类型；git 或 svn</samp>
  - <samp>`url`：地址</samp>

- <samp>`main`：入口文件，默认从该文件导入包的内容</samp>

## <samp>依赖</samp>

<samp>`dependencies`：生产环境依赖</samp>

<samp>`devDependencies`：开发环境依赖</samp>

<samp>安装依赖</samp>

```sh
# 安装所有依赖
npm i 

# 仅安装生产依赖
npm i --production
```

<samp>添加依赖</samp>

```sh
# 添加到生产环境
npm i lodash
npm i --save lodash
npm i -S lodash

# 添加到开发依赖
npm i --save-dev lodash
npm i -D lodash
```

<samp>语义版本</samp>

> <samp>`>`：大于某个版本</samp>
>
> <samp>`>=`：大于等于某个版本</samp>
>
> <samp>`<`：小于某个版本</samp>
>
> <samp>`<=`：小于某个版本</samp>
>
> <samp>`-`：介于两个版本之间</samp>
>
> <samp>`x`：不固定版本号</samp>
>
> <samp>`~`：补丁版本号可增加</samp>
>
> <samp>`^`：次版本和补丁版本可增加</samp>
>
> <samp>`*`：最新版本</samp>

## <samp>命令</samp>

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
