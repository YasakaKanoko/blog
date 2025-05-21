# <samp>corepack</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>安装</samp>

<samp>`corepack` 是一个内置工具，用于管理 Node.js 中的包管理器 (`yarn` 和 `pnpm`)</samp>

::: code-group

```sh[yarn]
corepack enable yarn
```

```sh[pnpm]
corepack enable pnpm
```

:::

<samp>验证安装</samp>

::: code-group

```sh[yarn]
yarn -v
```

```sh[pnpm]
pnpm -v
```

:::

## <samp>初始化</samp>

::: code-group

```sh[yarn]
# yarn init -y
yarn init -2
```

```sh[pnpm]
pnpm init
```

:::

## <samp>安装依赖</samp>

::: code-group

```sh[yarn]
yarn install
```

```sh[pnpm]
pnpm install
```

:::

## <samp>添加依赖</samp>

::: code-group

```sh[yarn]
yarn add lodash -D
```

```sh[pnpm]
pnpm add lodash -D
```

:::

## <samp>更新依赖</samp>

::: code-group

```sh[yarn]
yarn up lodash
```

```sh[pnpm]
pnpm up
```

:::

## <samp>删除依赖</samp>

::: code-group

```sh[yarn]
yarn remove lodash
```

```sh[pnpm]
pnpm remove lodash
```

:::

## <samp>漏洞审核</samp>

::: code-group

```sh[yarn]
yarn npm audit
```

```sh[pnpm]
pnpm audit
```

:::

## <samp>显示依赖关系</samp>

::: code-group

```sh[yarn]
yarn why
```

```sh[pnpm]
pnpm why
```

:::

## <samp>dlx</samp>

<samp>`dlx`：在临时环境中运行软件包</samp>

> <samp>`pnpx` 是 `pnpm dlx` 的别名</samp>

::: code-group

```sh[yarn]
# react
yarn dlx create-react-app my-app

# vue
yarn dlx create-vue@latest
```

```sh[pnpm]
# react
pnpm dlx create-react-app my-app

# vue
pnpm create vue@latest
```

:::
