# <samp>whats-new-in-nodejs-22</samp>

::: details <samp>目录</samp>

[[toc]]

:::

## <samp>Loading ECMAScript modules using `require()`</samp>

<samp>`require()` 仅支持加载满足条件的 ESM</samp>

- <samp>模块是完全同步的，即顶层不具有异步逻辑(`await` 等)</samp>

- <samp>满足以下条件之一</samp>

  - <samp>文件是 `.mjs`</samp>
  - <samp>文件是 `.js` ，但 `package.json` 包含 `"type": "module"`</samp>

  ::: code-group

  ```js[index.cjs]
  const required = require('./point.mjs');
  console.log(required);
  
  (async () => {
    const imported = await import('./point.mjs');
    console.log(imported === required); // true
  })();
  
  console.log(required.PORT); // 9000
  ```

  ```js[point.mjs]
  export const PORT = 9000;
  ```

  ```sh
  node --experimental-require-module index.cjs
  ```

  :::

## <samp>Using `import` and `require()` with native ESM packages</samp>

<samp>[open](https://www.npmjs.com/package/open)：This package is native ESM and no longer provides a CommonJS export.</samp>

- <samp>安装</samp>

  ```sh
  npm i open
  ```

- <samp>使用 `open`</samp>

  ::: code-group

  ```js[index.cjs]
  const { default: open } = require('open');
  open('https://www.google.com/');
  ```

  ```sh
  node index.cjs
  ```

  :::

