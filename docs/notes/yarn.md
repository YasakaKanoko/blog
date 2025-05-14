# <samp>yarn</samp>

<samp>`corepack` 是一个内置工具，用于管理 Node.js 中的包管理器 ( `yarn` 和 `pnpm` )</samp>

<samp>`corepack prepare yarn@<version> --activate`：安装指定版本的 `yarn`</samp>

```sh
# 启用corepack
corepack enable

# 启用yarn
corepack prepare yarn@stable --activate

# 验证安装
yarn -v
```

<samp>**初始化**</samp>

```sh
# yarn init -y
yarn init -2
```

<samp>**安装依赖**</samp>

```sh
yarn install
```

<samp>**添加依赖**</samp>

```sh
yarn add lodash -D
```

<samp><b>更新依赖</b></samp>

```sh
yarn up lodash
```

<samp><b>删除依赖</b></samp>

```sh
yarn remove lodash
```

<samp>**脚本**</samp>

```sh
yarn build
```

<samp><b>漏洞审核</b>：输出已知问题列表</samp>

```sh
yarn npm audit
```

<samp>`yarn why`：显示需要包的原因</samp>

```sh
yarn why lodash
```

<samp>`yarn dlx`：在临时环境中运行命令</samp>

```sh
# react
yarn dlx create-react-app my-app

# vue
yarn dlx create-vue@latest
```