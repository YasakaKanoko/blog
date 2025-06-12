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

<samp>`setInterval()`：定时器函数；一个实现定时调用的函数</samp>

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

<samp>`setImmediate()`：在下一事件循环(next tick)开始时执行一个函数，类似于 `setTimeout(fn, 0)`</samp>

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

  3. <samp>向上级目录递归查找是否包含 `node_modules`</samp>

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

<samp>`path` 模块提供了处理文件和目录路径的工具</samp>

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

```js[ESM]
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

<samp>**基于 Promise API**</samp>

::: code-group

```js[CJS]
const fs = require('node:fs/promises');
```

```js[ESM]
import * as fs from 'node:fs/promises';
```

:::

<samp>**基于回调和同步 API**</samp>

::: code-group

```js[CJS]
const fs = require('node:fs');
```

```js[ESM]
import * as fs from 'node:fs';
```

:::

- <samp>`readFile(path, [options])`：读取文件内容</samp>

  ::: code-group

  ```js[CJS]
  const { readFile } = require('fs/promises');
  const path = require('path');
  
  const filePath = path.resolve(__dirname, 'data.json');
  
  async function logFile() {
    try {
      const content = await readFile(filePath, { encoding: 'utf8' });
      console.log(content);
    } catch (err) {
      console.log(err.message)
    }
  }
  logFile();
  ```

  ```js[ESM]
  import { readFile } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'data.json');
  
  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    console.log(err.message)
  }
  ```

  ```json[data.json]
  [
    {
      "name": "Laravel",
      "tag": "PHP"
    },
    {
      "name": "Django",
      "tag": "Python"
    },
    {
      "name": "NestJS",
      "tag": "NodeJS"
    }
  ]
  ```

  :::
  
- <samp>`writeFile(path, data, [options]`：写入文件内容</samp>

  ::: code-group

  ```js[CJS]
  const { readFile, writeFile } = require('fs/promises');
  const path = require('path');
  
  const filePath = path.resolve(__dirname, 'data.json');
  
  async function logFile() {
    try {
      await writeFile(filePath, 'Alex', 'utf8');
      const content = await readFile(filePath, { encoding: 'utf8' });
      console.log(content);
    } catch (err) {
      console.log(err.message)
    }
  }
  logFile();
  ```

  ```js[ESM]
  import { readFile, writeFile } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'data.json');
  
  try {
    await writeFile(filePath, 'Alex', 'utf8');
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    console.log(err.message)
  }
  ```

  :::

  > <samp>当 `options` 设置为 `{ flag: "a" }` 时，表示追加文件内容，等价于 `appendFile()`</samp>
  
- <samp>`appendFile(path, data, [options])`：追加文件内容</samp>

  ::: code-group

  ```js[CJS]
  const { readFile, appendFile } = require('fs/promises');
  const path = require('path');
  
  const filePath = path.resolve(__dirname, 'data.json');
  
  async function logFile() {
    try {
      await appendFile(filePath, 'Alex', 'utf8');
      const content = await readFile(filePath, { encoding: 'utf8' });
      console.log(content);
    } catch (err) {
      console.log(err.message)
    }
  }
  logFile();
  ```

  ```js[ESM]
  import { readFile, appendFile } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'data.json');
  
  try {
    await appendFile(filePath, 'Alex');
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    console.log(err.message)
  }
  ```

  :::
  
- <samp>`stat(path)`：获取文件或目录的状态</samp>

  - <samp>`isDirectory()`：是否为目录</samp>
  - <samp>`isFile()`：是否为文件</samp>

  ::: code-group

  ```js[CJS]
  const { stat } = require('fs/promises');
  const path = require('path');
  
  const filePath = path.resolve(__dirname, './myfiles', 'data.json');
  
  async function fileStat() {
    try {
      const states = await stat(filePath);
      console.log(states)
    } catch (e) {
      console.error(e.message);
    }
  }
  
  fileStat();
  ```

  ```js[ESM]
  import { stat } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, './myfiles', 'data.json');
  
  try {
    const states = await stat(filePath);
    console.log(states)
  } catch (e) {
    console.error(e.message)
  }
  ```

  ```sh
  Stats {
    dev: 0,
    mode: 33206,
    nlink: 1,
    uid: 0,
    gid: 0,
    rdev: 0,
    blksize: 4096,
    ino: 30680772461468292,
    size: 8, # 占用字节数
    blocks: 0,
    atimeMs: 1749515530333.382, # 上次访问文件的时间
    mtimeMs: 1749456681797.5737, # 上次修改文件的时间
    ctimeMs: 1749515528688.089, # 上次修改文件状态的时间
    birthtimeMs: 1749453821009.349 # 创建文件的时间
  }
  ```

  :::

- <samp>`readdir(path)`：读取目录的子文件和子目录，返回一个数组</samp>

  ::: code-group

  ```js[CJS]
  const { readdir } = require('fs/promises');
  const { resolve } = require('path');
  
  const filePath = resolve(__dirname, './myfiles');
  
  async function filePaths() {
    try {
      const paths = await readdir(filePath);
      console.log(paths)
    } catch (e) {
      console.error(e.message)
    }
  }
  
  filePaths();
  ```

  ```js[ESM]
  import { readdir } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, './myfiles');
  
  try {
    const paths = await readdir(filePath);
    console.log(paths)
  } catch (e) {
    console.error(e.message)
  }
  ```

  :::

- <samp>`mkdir()`：创建目录</samp>

  ::: code-group

  ```js[CJS]
  const { mkdir } = require('fs/promises');
  const { resolve } = require('path');
  
  const filePath = resolve(__dirname, './myfiles/newdir');
  
  async function createDir() {
    try {
      // recursive: true 表示路径不存在时不报错, 递归创建目录
      await mkdir(filePath, { recursive: true }); // 创建newdir
    } catch (e) {
      console.error(e.message)
    }
  }
  
  createDir();
  ```

  ```js[ESM]
  import { mkdir } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, './myfiles/newdir');
  
  try {
    await mkdir(filePath, { recursive: true });
  } catch (e) {
    console.error(e.message)
  }
  ```

  :::

- <samp>`exists(path)`：~~已废弃~~，需要重写；检查文件或目录是否存在</samp>

  ::: code-group

  ```js[CJS]
  const { stat, mkdir } = require('fs/promises');
  const { resolve } = require('path');
  
  const filePath = resolve(__dirname, './myfiles/newdir');
  
  async function exists(filename) {
    try {
      await stat(filename);
      return true;
    } catch (e) {
      if (e.code === 'ENOENT') {
        // 文件不存在
        return false;
      }
      throw e;
    }
  }
  
  async function checkPath() {
    try {
      const result = await exists(filePath);
      if (result) {
        console.log('目录已存在');
      } else {
        console.log('目录不存在，创建目录中');
        await mkdir(filePath);
        console.log('创建目录成功');
      }
    } catch (e) {
      throw e;
    }
  }
  
  checkPath();
  ```

  ```js[ESM]
  import { stat, mkdir } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, './myfiles/newdir');
  
  async function exists(filename) {
    try {
      await stat(filename);
      return true;
    } catch (e) {
      if (e.code === 'ENOENT') {
        // 文件不存在
        return false;
      }
      throw e;
    }
  }
  try {
    const result = await exists(filePath);
    if (result) {
      console.log('目录已存在');
    } else {
      console.log('目录不存在，创建目录中');
      await mkdir(filePath);
      console.log('创建目录成功');
    }
  } catch (e) {
    throw e;
  }
  ```

  :::
  
- <samp>`unlink()`：删除文件</samp>

  ::: code-group

  ```js[CJS]
  const { unlink } = require('fs/promises');
  
  const { resolve } = require('path');
  const filePath = resolve(__dirname, './myfiles/hello.txt');
  
  async function deleteFile() {
    try {
      await unlink(filePath);
      console.log('文件已删除')
    } catch (e) {
      console.log(e.message);
    }
  }
  
  deleteFile();
  ```

  ```js[ESM]
  import { unlink } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const filePath = resolve(__dirname, './myfiles/hello.txt');
  
  try {
    await unlink(filePath);
    console.log('文件已删除')
  } catch (e) {
    console.log(e.message);
  }
  ```

  :::

- <samp>`rmdir()`：删除目录</samp>

  ::: code-group

  ```js[CJS]
  const { rmdir } = require('fs/promises');
  
  const { resolve } = require('path');
  const filePath = resolve(__dirname, './myfiles/newdir');
  
  async function deleteDir() {
    try {
      await rmdir(filePath);
      console.log('目录已删除')
    } catch (e) {
      console.log(e.message);
    }
  }
  
  deleteDir();
  ```

  ```js[ESM]
  import { rmdir } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, resolve } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const filePath = resolve(__dirname, './myfiles/newdir');
  
  try {
    await rmdir(filePath);
    console.log('目录已删除')
  } catch (e) {
    console.log(e.message);
  }
  ```

  :::

## <samp>stream</samp>

<samp>**流**，是数据的集合，与字符串、数组类似</samp>

<samp>不同之处在于，流不能一次可用，所以它不必适合内存</samp>

<samp>流在处理大量数据和外部数据时非常强大，一次处理一个区块</samp>

<samp>**分类**：可读流、可写流、双工流 </samp>

### <samp>可读流</samp>

<samp>`createReadStream(path, [options])`：创建文件可读流</samp>

- <samp>`start`：起始字节</samp>
- <samp>`end`：结束字节</samp>
- <samp>`encoding`：编码类型</samp>
- <samp>`highWaterMark`：表示流的缓冲区大小(默认为 16KB)</samp>
- <samp>`autoClose`：表示是否自动关闭流</samp>

```js
const { createReadStream } = require('fs');

const { resolve } = require('path');
const filePath = resolve(__dirname, './myfiles/data.json');

const rs = createReadStream(filePath);
```

<samp>Events</samp>

- <samp>`open`：文件打开时触发</samp>

  ```js
  rs.on('open', () => {
    console.log('文件打开');
  });
  ```

- <samp>`data`：当流将数据块传递给使用者时触发</samp>

  ```js
  rs.on('data', (chunk) => {
    console.log(`读取数据：${chunk.toString()}`);
  });
  ```

- <samp>`end`：当流中没有更多数据可供使用时触发</samp>

  ```js
  rs.on('end', () => {
    console.log('读取完成')
  });
  ```

- <samp>`error`：表示流发生错误</samp>

  ```js
  rs.on('error', (err) => {
    console.log(`错误：${err.message}`);
  });
  ```

- <samp>`close`：关闭</samp>

  ```js
  rs.on('close', () => {
    console.log('流关闭');
  });
  ```

- <samp>`readable`：当流中有可读数据时触发</samp>

  ```js
  rs.on('readable',()=>{
    console.log('流中有可读的数据')
  });
  ```

<samp>Functions</samp>

- <samp>`pipe()`：将流的输出传递给另一个流或函数</samp>

  ```js
  const { createWriteStream } = require('fs');
  const inPath = resolve(__dirname, './myfiles/hello.txt');
  const ws = createWriteStream(inPath);
  
  rs.pipe(ws);
  ```

- <samp>`unpipe()`：停止将流的输出传递给另一个流或函数</samp>

  ```js
  rs.unpipe(ws);
  ```

- <samp>`read()`：读取指定大小的数据</samp>

  ```js
  rs.read(1024);
  ```

- <samp>`unshift()`：将数据添加到流的开始</samp>

  ```js
  rs.unshift(Buffer.from('追加数据'));
  ```

- <samp>`resume()`：恢复流的读取</samp>

  ```js
  rs.resume();
  ```

- <samp>`pause()`： 暂停流的读取</samp>

  ```js
  rs.pause();
  ```

- <samp>`isPaused()`：检查流是否暂停</samp>

  ```js
  console.log(rs.isPaused());
  ```

- <samp>`setEncoding()`：设置流的编码</samp>

  ```js
  rs.setEncoding('utf8');
  ```

### <samp>可写流</samp>

<samp>`createWriteStream(path, [options])`：创建文件可写流</samp>

- <samp>`start`：起始字节</samp>
- <samp>`encoding`：编码类型</samp>
- <samp>`highWaterMark`：表示流的缓冲区大小（默认为 16KB）</samp>
- <samp>`autoClose`：表示是否自动关闭流</samp>

```js
const inPath = resolve(__dirname, './myfiles/hello.txt');
const ws = createWriteStream(inPath);
```

<samp>Events</samp>

- <samp>`close`：关闭</samp>

  ```js
  ws.on('close', () => {
    console.log('流关闭');
  });
  ```

- <samp>`error`：表示流发生错误</samp>

  ```js
  ws.on('error', (err) => {
    console.log(`写入错误：${err.message}`);
  });
  ```

- <samp>`drain`：当流的缓冲区空闲时触发</samp>

  ```js
  ws.on('drain', () => {
    console.log('流缓冲区空闲');
  });
  ```

- <samp>`finish`：当流的写入完成时触发</samp>

  ```js
  ws.on('finish', () => {
    console.log('写入完成');
  });
  ```

- <samp>`pipe`：当流的输出被连接时触发</samp>

  ```js
  ws.on('pipe', () => {
    console.log('流的输出被连接');
  });
  ```

- <samp>`unpipe`：当流的输出被断开时触发</samp>

  ```js
  ws.on('unpipe', () => {
    console.log('流的输出被断开');
  });
  ```

<samp>Functions</samp>

- <samp>`write()`：写入数据到流</samp>

  ```js
  ws.write('写入数据');
  ```

- <samp>`end()`：结束写入</samp>

  ```js
  ws.end();
  ```

- <samp>`cork()`：开启流的缓冲</samp>

  ```js
  ws.cork();
  ```


- <samp>`uncork()`：取消流的缓冲</samp>

  ```js
  ws.uncork();
  ```

- <samp>`setDefaultEncoding()`：设置流的默认编码</samp>

  ```js
  ws.setDefaultEncoding('utf8');
  ```

### <samp>双工流</samp>

::: code-group

```js[Duplex 模块]
const { Duplex } = require('stream');

class MyDuplex extends Duplex {
  constructor(options) {
    super(options);
  }

  _read(size) {
    // 读取数据
    this.push('读取数据');
  }

  _write(chunk, encoding, callback) {
    // 写入数据
    this.push(chunk.toString());
    callback();
  }
}

const duplex = new MyDuplex();
duplex.on('data', (chunk) => {
  console.log(`读取数据：${chunk}`);
});
duplex.write('写入数据');
```

```js[Transform 流]
const { Transform } = require('stream');

class MyTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    // 转换数据
    this.push(chunk.toString());
    callback();
  }

  _flush(callback) {
    // flush数据
    callback();
  }
}

const transform = new MyTransform();
transform.on('data', (chunk) => {
  console.log(`读取数据：${chunk}`);
});
transform.write('写入数据');
```

```js[自定义]
const { Readable, Writable } = require('stream');

class MyDuplex extends Readable {
  constructor(options) {
    super(options);
  }

  _read(size) {
    // 读取数据
    this.push('读取数据');
  }
}

class MyWritable extends Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    // 写入数据
    this.push(chunk.toString());
    callback();
  }
}

const duplex = new MyDuplex();
const writable = new MyWritable();
duplex.on('data', (chunk) => {
  console.log(`读取数据：${chunk}`);
});
writable.on('finish', () => {
  console.log('写入完成');
});
writable.write('写入数据');
```

:::

## <samp>net</samp>

<samp>`net` 模块，是一个通信模块</samp>

- <samp>IPC：进程间通信</samp>

- <samp>TCP/IP：网络通信</samp>

<samp>`createConnection(port, [host], [connectListener])`：创建一个 TCP 或 UDP 连接，返回值是一个 `socket`，在 Node 中表现为双工流</samp>

```js
const { createConnection } = require('net');
const socket = createConnection(8080, 'localhost', () => {
  console.log('已连接');
});

socket.write("Hello World!");
socket.on('close', () => {
  console.log('连接已关闭');
});
```

<samp>`createServer([options], [connectionListener])`：创建服务器</samp>

- <samp>`listen()`：监听端口号</samp>
- <samp>`listening`：服务器开始监听时触发</samp>
- <samp>`connection`：当新客户端连接至服务器时触发</samp>

```js
const { createServer } = require('net');

const server = createServer((socket) => {
  console.log('连接已建立');

  // 发送HTTP响应头
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-Type: text/html\r\n');
  socket.write('Connection: close\r\n');
  socket.write('\r\n'); // 空行表示HTTP头结束
  socket.write('<h1>Hello World!</h1>');

  // 关闭连接
  socket.end();
  socket.end();
});

server.listen(3000, () => {
  console.log('正在监听3000端口')
});

server.on('listening', () => {
  console.log('服务器已启动')
});

server.on('connection', (socket) => {
  console.log('有新连接')
});
```

## <samp>http</samp>

<samp>`http` 模块是基于 `net` 模块的用于创建客户端和服务器的核心模块，支持创建 HTTP 服务和发送 HTTP 请求</samp>

<samp>`request({options}, callback)`：发送 HTTP 请求，返回一个 `clientRequest` 对象</samp>

::: code-group

```js[GET]
import { request } from "http";

const options = {
  hostname: 'localhost',
  port: 3000,
  method: 'GET',
};

const req = request(options, (res) => {
  console.log(`服务器状态码: ${res.statusCode}`);
  console.log(`服务器响应头: ${JSON.stringify(res.headers)}`);
  res.on('data', chunk => {
    console.log(chunk.toString('utf-8'));
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
```

```js[POST]
import { request } from "http";

const options = {
  hostname: 'localhost',
  port: 3000,
  method: 'POST', // [!code ++]
  headers: { // [!code ++]
    'Content-Type': 'application/json', // [!code ++]
    'Content-Length': Buffer.byteLength(JSON.stringify({ key: 'value' })) // [!code ++]
  } // [!code ++]
};

const data = JSON.stringify({ // [!code ++]
  key: 'value' // [!code ++] 
}); // [!code ++]

const req = request(options, (res) => {
  console.log(`服务器状态码: ${res.statusCode}`);
  console.log(`服务器响应头: ${JSON.stringify(res.headers)}`);
  res.on('data', chunk => {
    console.log(chunk.toString('utf-8'));
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(JSON.stringify(data)); // [!code ++]
req.end();
```

:::

## <samp>https</samp>

<samp>HTTPS 是 HTTP 的安全版本，用于客户端和服务器发送数据的主要协议，经过加密以提高数据传输的安全性</samp>

- <samp>网上购买证书</samp>
- <samp>本地生成证书</samp>

<samp>HTTPS 使用加密协议对通信进行加密，该协议称为传输层安全性(TLS)，以前称为安全套接字层(SSL)，该协议通过所谓的非对称公钥基础架构保护通信</samp>

- <samp>私钥：该密钥由网站所有者控制，是私有的位于 Web 服务器，用于解密来自公钥加密的信息</samp>
- <samp>公钥：以安全的方式与服务器交互，使用公钥加密的信息只能使用对应的私钥进行解密</samp>

<samp>**如何在本地生成证书**</samp>

- <samp>**配置环境变量**</samp>

  | `Path` | `D:\openssl\bin` |
  | ------ | ---------------- |

- <samp>安装 OpenSSL</samp>

  ```sh
  openssl --version
  ```

- <samp>生成 CA 私钥</samp>

  ```sh
  openssl genrsa -des3 -out ca-pri-key.pem 1024
  ```

- <samp>生成 CA 公钥</samp>

  ```sh
  openssl req -new -key ca-pri-key.pem -out ca-pub-key.pem
  ```

- <samp>生成 CA 证书</samp>

  ```sh
  openssl x509 -req -in ca-pub-key.pem -signkey ca-pri-key.pem -out ca-cert.crt
  ```

- <samp>生成服务器私钥</samp>

  ```sh
  openssl genrsa -out server-key.pem 1024
  ```

- <samp>生成服务器公钥</samp>

  ```sh
  openssl req -new -key server-key.pem -out server-scr.pem
  ```

- <samp>生成服务器证书</samp>

  ```sh
  openssl x509 -req -CA ca-cert.crt -CAkey ca-pri-key.pem -CAcreateserial -in server-scr.pem -out server-cert.crt
  ```

- <samp>`https` 模块：创建 HTTPS 服务器</samp>

  ```js
  const { createServer } = require('https');
  const { readFileSync } = require('fs');
  const { resolve } = require('path');
  
  
  const options = {
    // 私钥
    key: readFileSync(resolve(__dirname, './server-key.pem')),
    // 证书
    cert: readFileSync(resolve(__dirname, './server-cert.crt'))
  };
  createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  }).listen(443);
  console.log('Server running at https://localhost:443/');
  ```


## <samp>生命周期</samp>

<samp>Node 的事件循环由 6 个阶段组成</samp>

1. <samp>Timers</samp>
   - <samp>这个阶段会执行 `setTimeout()` 和 `setInterval()` 的回调</samp>
   - <samp>如果有多个定时器回调，则会按照预定预定的时间顺序执行</samp>
2. <samp>Pending Callbacks</samp>
   - <samp>这个阶段会执行一些系统操作回调，如：TCP 错误事件</samp>
   - <samp>这些回调由操作系统安排，而不是通过 JavaScript 直接安排</samp>
3. <samp>Idle、Prepare</samp>
   - <samp>这两个阶段用于 Node.js 内部工作，开发者无需关心</samp>
4. <samp>Poll</samp>
   - <samp>除了 Timers、Check，绝大部分的回调都会存放在该队列，如：I/O 事件</samp>
   - <samp>如果 Poll 中有回调，依次执行回调，直到清空队列</samp>
   - <samp>如果事件循环进入 Poll，但却没有任何事件可以处理，等待直到新事件到来</samp>
5. <samp>Check</samp>
   - <samp>这个阶段执行 `setImmediate()` 回调函数</samp>
   - <samp>需要注意的是：`setImmediate()` 与 `setTimeout(fn, 0)` 的区别在于，`setImmediate()` 的回调会被安排在 Check 阶段执行</samp>
6. <samp>Close Callbacks</samp>
   - <samp>这个阶段执行 `close` 事件的回调函数，当一个 `socket` 或其他资源关闭时，`close` 事件的回调函数触发</samp>
