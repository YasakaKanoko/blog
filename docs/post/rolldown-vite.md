# <samp>Rolldown-Vite</samp>

::: details <samp>目录</samp>

[[toc]]

:::

## <samp>Why Rolldown</samp>

<samp>esbuild 和 rollup 两者在很多功能是重复的</samp>

> - <samp>rollup is a JavaScript module bundler that primarily works with JavaScript and TypeScript</samp>
> - <samp>rolldown：a Rust-based next-generation bundler</samp>

<samp>使用 `rolldown-vite`，只需将 `vite` 依赖修改为 `npm:rolldown-vite@latest`</samp>

::: code-group

```json[Rolldown]
{
  "dependencies": {
    "vite": "npm:rolldown-vite@latest"
  }
}
```

```json[Rollup]
{
  "dependencies": {
    "vite": "^6.3.5"
  }
}
```

:::

::: code-group

```sh[Rolldown]
pnpm run build # 733ms
```

```sh[rollup]
pnpm run build # 1.64s
```

:::

## <samp>Compatibility </samp>

<samp>`rolldown-vite` is still in development, but early adopters, ranging from side projects to large-scale enterprise apps, are already seeing remarkable results</samp>

<samp>To Be Continued...</samp>

## <samp>参考</samp>

- <samp>[Announcing Rolldown-Vite](https://voidzero.dev/posts/announcing-rolldown-vite)</samp>

- <samp>[Rolldown Integration](https://main.vite.dev/guide/rolldown#compatibility)</samp>
