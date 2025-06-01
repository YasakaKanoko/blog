# <samp>Rolldown-Vite</samp>

::: details <samp>目录</samp>

[[toc]]

:::

## <samp>Why Rolldown</samp>

<samp>esbuild 和 rollup 两者在很多功能是重复的</samp>

> - <samp>rollup is a JavaScript module bundler that primarily works with JavaScript and TypeScript</samp>
> - <samp>rolldown：a Rust-based next-generation bundler</samp>

::: code-group

```json[package.json]
{
  "dependencies": {
    "vite": "npm:rolldown-vite@latest"
  }
}
```

```json[package.json]
{
  "dependencies": {
    "vite": "^6.3.5"
  }
}
```

:::

::: code-group

```sh
pnpm run build # 1.64s
```

```sh
pnpm run build # 733ms
```

:::

## <samp>Compatibility </samp>

<samp>`rolldown-vite` is still in development, but early adopters, ranging from side projects to large-scale enterprise apps, are already seeing remarkable results</samp>

<samp>To Be Continued...</samp>

## <samp>参考</samp>

- <samp>[Announcing Rolldown-Vite](https://voidzero.dev/posts/announcing-rolldown-vite)</samp>

- <samp>[Rolldown Integration](https://main.vite.dev/guide/rolldown#compatibility)</samp>
