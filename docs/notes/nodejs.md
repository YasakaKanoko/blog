# <samp>Node.js</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>global</samp>

<samp>`global` ：全局对象；所有全局变量(包括自身)和函数都是 `global` 对象的属性，与 `window` 相似</samp>

::: code-group

```js[Browser]
window.window === window; // true
```

:::

<samp>[globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)：为所有 JavaScript 环境提供一致的方式访问全局对象</samp>

### <samp>setTimout</samp>

<samp>`setTimeout()`：定时器函数；在浏览器中，返回一个数字；在 Node 中，返回一个对象</samp>

::: code-group

```js[Browser]
const timeId = setTimeout(() => {
  console.log(timeId); // 101
}, 1000);
```

```js[Node]
const timeId = setTimeout(() => {
  console.log(`Hello Node ${process.version}`); // Hello Node v22.16.0
}, 1000);
console.log(timeId); // 返回Timeout对象 
```

:::

<samp>`clearTimeout()`：清除定时器</samp>

```js
clearTimeout(timeId);
```

### <samp>setInterval</samp>

<samp>`setInterval()`：定时器函数；是一个实现定时调用的函数</samp>

::: code-group

```js[Browser]
const timeId = setInterval(() => {
  console.log("Hello"); // 449
}, 1000);
```

```js[Node]
const timeId = setInterval(() => {
  console.log("Hello");
}, 1000);
console.log(timeId); // 返回Timeout对象 
```

:::

<samp>`clearInterval()` 清除定时器</samp>

```js
clearInterval(timeId);
```

### <samp>setImmediate</samp>

<samp>`setImmediate()`：用在下一事件循环(next tick)开始时执行一个函数，类似于 `setTimeout(0)`</samp>

```js
console.log('开始');
setImmediate(() => {
  console.log('setImmediate');
});
setTimeout(() => {
  console.log('setTimeout');
}, 0);
console.log('结束');

// 开始 -> 结束 -> setTimeout -> setImmediate
```

### <samp>console</samp>

<samp>`console` 是一个全局对象，用于标准输出流，如：终端中打印信息</samp>

- <samp>`log()`：输出一般信息</samp>
- <samp>`error()`：输出错误信息</samp>
- <samp>`warn()`：输出警告信息</samp>
- <samp>`clear()`：清除控制台输出</samp>

### <samp>__dirname</samp>

<samp>`__dirname`：当前模块目录的绝对路径；并非全局变量</samp>

```js
const path = require('path');
const dirname = path.resolve(__dirname,'./index.js');
console.log(dirname); // node-app/src/index.js
```

### <samp>__filename</samp>

<samp>`__filename`：当前模块的绝对路径；并非全局变量</samp>

```js
console.log(__filename); // node-app/src/index.js
```

### <samp>Buffer</samp>

<samp>Buffer 对象继承至 [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 子类，表示定长的字节序列，输出为十六进制</samp>

> <samp>虽然 Buffer 类在全局范围内可用，但仍然建议使用前通过 `import` 或 `require` 引用</samp>

```js
const { Buffer } = require('node:buffer');

const buffer = Buffer.from("Hello world", "utf-8");
console.log(buffer); // Buffer(11) [72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, buffer: ArrayBuffer(8192), byteLength: 11, byteOffset: 256, length: 11, Symbol(Symbol.toStringTag): 'Uint8Array']
```

### <samp>process</samp>

<samp>`process` 对象提供有关当前 Node.js 进程的信息并进行控制</samp>

- <samp>`cwd()`：返回 Node.js 进程的当前工作目录绝对路径</samp>
- <samp>`exit([code])`：强制退出状态终止进程，默认为 `0`</samp>
- <samp>`argv`：返回一个数组，包含启动 Node.js 进程时传递的命令行参数</samp>

- <samp>`platform`：返回 API 最低支持当前操作系统平台</samp>
- <samp>`kill(pid)`：结束进程</samp>
- <samp>`env`：返回一个包含用户环境的对象</samp>

## <samp>模块化</samp>

<samp>CommonJS 最终都会将模块的路径转换为绝对路径</samp>

- <samp>如果路径是以 `./` 或 `../` 开头的相对路径，查找时会从当前模块所在目录开始，如果成功则转换为对应绝对路径</samp>

- <samp>如果路径是不以 `./` 或 `../` 开头的相对路径</samp>

  1. <samp>检查是否为内置模块，如：`fs`、`path`</samp>

  2. <samp>检查当前目录是否包含 `node_modules`</samp>

  3. <samp>向上级目录递归查找是否包含 node_modules</samp>

  4. <samp>成功找到目标模块返回该模块的绝对路径，否则报错</samp>

- <samp>如果省略了扩展名，会依次尝试 `.js`、`.json`、`.node`、`.cjs` 扩展名的文件</samp>
- <samp>如果存在 `package.json` 文件，则以 `package.json` 的 `main` 字段作为模块的入口文件</samp>

### <samp>ESM</samp>

<samp>在 node 中使用 ESM 两种方式</samp>

- <samp>在 `package.json` 中添加 `"type": "module",` 字段</samp>
- <samp>文件的后缀为 `.mjs`</samp>

<samp>Node.js v22 新特性：[Loading ECMAScript modules using `require()`](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require)</samp>

- <samp>模块是同步的(即不包含顶级的 `await`)</samp>
- <samp>模块是 ESM</samp>

::: code-group

```js[point.mjs]
export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
} 

```

```js[index.js]
const point = require('./point.mjs');
console.log(point); // Module {__esModule: <accessor>, default: <accessor>, Symbol(Symbol.toStringTag): 'Module'}
```

:::

## <samp>os</samp>

::: code-group

```js[CJS]
const os = require('node:os');
```

```js[ESM]
import os from 'node:os';
```

:::

<samp>`node:os`  模块提供与操作系统相关的实用方法和属性</samp>

- <samp>`EOL`：操作系统特定的行尾序列标记</samp>
  - <samp>UNIX：`\n`</samp>
  - <samp>Windows：`\r\n`</samp>
- <samp>`arch()`：返回操作系统 CPU 架构</samp>

- <samp>`cpus()`：返回包含每个 CPU 核心信息的对象数组</samp>
  - <samp>`os.cpus().length`：返回总核心数</samp>

- <samp>`freemem()`：以整数形式返回可用系统内存量(以字节为单位)</samp>
  - <samp>KB：`os.freemem() / 1024`</samp>
  - <samp>MB：`os.freemem() / 1024 ** 2`</samp>
  - <samp>GB：`os.freemem() / 2 ** 30`</samp>

- <samp>`homedir()`：返回当前用户主目录的字符串路径</samp>
- <samp>`hostname()`：以字符串形式返回操作系统的主机名</samp>
- <samp>`tmpdir()`：以字符串形式返回操作系统的临时文件默认目录</samp>

## <samp>path</samp>

::: code-group

```js[CJS]
const path = require('node:path');
```

```js[ESM]
import path from 'node:path';
```

:::

<samp>`node:path` 模块提供了处理文件和目录路径的工具</samp>

- <samp>`basename(path, [suffix])`：返回 `path` 的最后一部分</samp>

- <samp>`delimiter`：返回特定平台的路径分隔符</samp>
  - <samp>UNIX：`:`</samp>
  - <samp>Windows：`;`</samp>

- <samp>`sep`：返回特定平台的路径段分隔符</samp>
  - <samp>UNIX：`/`</samp>
  - <samp>Windows：`\`</samp>

- <samp>`dirname(path)`：返回 `path` 目录</samp>

- <samp>`extname(path)`：返回 `path` 的扩展名</samp>

- <samp>`join(...paths)`：使用特定平台分隔符将给定 `path` 段连接在一起</samp>

- <samp>`normalize(path)`：将绝对路径、相对路径规范化处理成一个符合对应操作系统风格的路径</samp>
- <samp>`relative(from, to)`：返回从 `from` 到 `to` 的相对路径</samp>

- <samp>`resolve(...path)`：将路径或多个路径作为参数，返回一个绝对路径</samp>

## <samp>URL</samp>

::: code-group

```js[CJS]
const url = require('node:url');
```

```js[ESM]
import url from 'node:url';
```

:::

::: code-group

```js[URL]
const url = require('node:url');
const input = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

// new URL(path): url 构造函数, 返回一个对象
const myURL = new URL(input);
console.log(myURL);

// parse(): 将一个 URL 字符串作为参数，返回一个包含 URL 各个部分的对象, 类似构造函数
console.log(url.parse(input));

// searchParams.has(name): 参数是否包含对应键值对
console.log(myURL.searchParams.has("query")); // true

// searchParams.get(name): 返回第一个匹配的键值
console.log(myURL.searchParams.get("query")); // string

// format(): 将一个对象作为参数，返回一个 URL 字符串
const obj = {
  href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash', // 完整地址
  origin: 'https://sub.example.com:8080',
  protocol: 'https:',
  username: 'user',
  password: 'pass',
  host: 'sub.example.com:8080',
  hostname: 'sub.example.com',
  port: '8080',
  pathname: '/p/a/t/h',
  search: '?query=string',
  hash: '#hash'
};
const myurl = url.format(obj);
console.log(myurl); // https://sub.example.com:8080/p/a/t/h?query=string#hash
```

```shell
URL {
  href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
  origin: 'https://sub.example.com:8080',
  protocol: 'https:',
  username: 'user',
  password: 'pass',
  host: 'sub.example.com:8080',
  hostname: 'sub.example.com',
  port: '8080',
  pathname: '/p/a/t/h',
  search: '?query=string',
  searchParams: URLSearchParams { 'query' => 'string' },
  hash: '#hash'
}
Url {
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.example.com:8080',
  port: '8080',
  hostname: 'sub.example.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
}
true
string
https://sub.example.com:8080/p/a/t/h?query=string#hash
```

:::

## <samp>util</samp>

::: code-group

```js[CJS]
const util = require('node:util');
```

```js[MJS]
import util from 'node:util';
```

:::

- <samp>`util.callbackify(original)`：接收一个 `async` 函数(或返回 Promise 的函数)，并返回该函数的回调形式</samp>
- <samp>`util.promisify(original)`：接收一个回调风格的异步函数，并返回该函数的 Promise 形式</samp>

- <samp>`util.isDeepStrictEqual(val1, val2)`：比较 `val1` 与 `val2` 是否存在深度严格相等</samp>

  ::: details <samp>`isDeepStrictEqual(val1, val2)` 与 `===` 的**区别**</samp>

  ```js
  const util = require('util');
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  
  console.log(obj1 === obj2); // false
  console.log(util.isDeepStrictEqual(obj1, obj2)); // true
  ```

  :::

## <samp>fs</samp>

- <samp>基于 Promise API</samp>

  ::: code-group

  ```js[CJS]
  const fs = require('node:fs/promises');
  ```

  ```js[ESM]
  import * as fs from 'node:fs/promises';
  ```

  :::

- <samp>基于回调和同步 API</samp>

  ::: code-group

  ```js[CJS]
  const fs = require('node:fs');
  ```

  ```js[ESM]
  import * as fs from 'node:fs';
  ```

  :::

