# <samp>pnpm</samp>

<samp>`corepack prepare pnpm@<version> --activate`：安装指定版本的 `pnpm`</samp>

```sh
# 启用pnpm
corepack prepare pnpm@latest --activate

# 验证安装
pnpm -v
```

<samp>**初始化**</samp>

```sh
pnpm init
```

<samp>**安装依赖**</samp>

```sh
pnpm install
```

<samp>**添加依赖**</samp>

```sh
pnpm add lodash -D
```

<samp><b>更新依赖</b></samp>

```sh
pnpm up
```

<samp><b>删除依赖</b></samp>

```sh
pnpm remove lodash
```

<samp>**脚本**</samp>

```sh
pnpm run build
```

<samp>`pnpm dlx`：在临时环境中运行命令</samp>

```sh
# react
pnpm dlx create-react-app my-app
# vue
pnpm create vue@latest
```
