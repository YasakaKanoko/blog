# <samp>bun</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>**特点**</samp>

1. <samp>Node 需要使用 `nvm` 进行版本控制，而 `bun` 可以直接升级自身</samp>

   ::: code-group

   ```sh[bun]
   bun upgrade
   ```

   ```sh[Node]
   nvm install lts
   
   nvm use lts
   ```

   :::



2. <samp>`bun` 可以直接运行 TS 代码，在 Node 中，需要通过 `nodemon` 实现热更新</samp>

   ::: code-group

   ```sh[bun]
   bun --hot index.ts
   ```

   ```sh[Node]
   # "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts"
   npm run dev
   ```

   :::

   > [!TIP]
   >
   > <samp>`--hot` 与 `--watch` 区别</samp>
   >
   > <samp>参考：[Watch mode](https://bun.sh/docs/runtime/hot)</samp>
   >
   > - <samp>`bun --watch` 会在检测导入文件变化时重启整个进程，即硬重启。会保留初始运行时的参数和环境变量，发生崩溃时尝试自动重启进程；适用于需要完全重启的场景</samp>
   > - <samp>`bun --hot` 不会重启进程，即软重载。在检测到代码发生变化后，更新内部模块缓存并重新加载代码，同时保留所有全局状态，像 HTTP 服务器等状态不会丢失，刷新速度快，适用于需要高效开发，保持进程状态的场景</samp>

## <samp>全局变量</samp>

::: code-group

```ts[bun]
console.log(Bun.version);
```

```ts[Node]
console.log(process.version);
```

:::

## <samp>配置</samp>

<samp><b>建议的编译选项</b>：支持顶级 `await`、JSX 和 ts 导入</samp>

::: code-group

```json[tsconfig.json]
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false,
  },
}
```

:::

## <samp>配置读取</samp>

- <samp>Node 项目需要读取配置文件 `.env` 时，需要引入 `dotenv`</samp>

  ```sh
  # .env
  SERVER_PORT=3000
  ```

  <samp>引入 `dotenv` 模块</samp>

  ```js
  import dotenv from 'dotenv';
  
  dotenv.config({ path: './.env' });
  ```

  <samp>完整代码</samp>

  ```js
  import express from 'express';
  import dotenv from 'dotenv';
  
  dotenv.config({ path: './.env' });
  
  const { SERVER_PORT: port } = process.env;
  
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.get('/', (_req, res) => {
    res.send('Hello From Express!');
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });
  
  ```

  <samp>如果未引入 `dotenv` 模块，想要实现监听的效果，需要 Node 版本在 v20.6 以上，使用以下命令行参数</samp>

  ```sh
  node --env-file=./.env server.js
  ```

- <samp>bun 中读取配置：可以使用 bun 的全局变量 `Bun` 进行读取</samp>

  <samp>注意：使用 `Bun` 前需要先引入 `@types/bun`</samp>

  ```sh
  bun add -d @types/bun
  ```

  依赖

  ```js
  "devDependencies": {
    "@types/bun": "^1.2.10",
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.1"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0"
  }
  ```

  <samp>完整代码</samp>

  ```ts
  import type { Express, Request, Response } from 'express';
  import express from 'express';
  const cors = require('cors');
  
  const { SERVER_PORT: port } = Bun.env;
  
  const app: Express = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  
  app.get('/', (_req: Request, res: Response) => {
    res.send('Hello From Express!');
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });
  ```

  > <samp>值得注意的是：bun 中可以同时使用 ES 模块和 commonjs 模块标准</samp>

## <samp>bun test</samp>

- <samp>当运行 `bun test` 时，将自动递归查找文件目录中的 `*.test.{js|jsx|ts|tsx}`、`*._test.{js|jsx|ts|tsx}`、`*.spec.{js|jsx|ts|tsx}`、`*._spec.{js|jsx|ts|tsx}` 测试文件</samp>

  ::: code-group

  ```ts[main.test.ts]
  import { expect, test } from "bun:test";
  
  beforeEach(() => {
    console.log('Before Each')
  });
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });
  
  test('PI Test', () => {
    expect(Math.PI.toString()).toContain('3.14');
  });
  ```

  ```sh
  bun test
  
  main.test.ts:
  Before Each
  ✓ 2 + 2
  Before Each
  ✓ PI Test
  
   2 pass
   0 fail
   2 expect() calls
  Ran 2 tests across 1 files. [90.00ms]
  ```

  :::

- <samp>在 Node 中的测试文件需以 `*.test.js` 和 `*.spec.js` 的后缀形式命名</samp>

  ::: code-group

  ```js[main.test.js]
  import { test, beforeEach } from 'node:test';
  import assert from 'node:assert';
  
  beforeEach(() => {
    console.log("beforeEach");
  });
  
  test("demo", () => {
    assert.equal(2 + 2, 4)
  });
  
  test("demo1", () => {
    assert.equal(2 + 3, 5)
  });
  ```

  ```sh
  node --test
  
  beforeEach
  beforeEach
  ✔ demo (2.804ms)
  ✔ demo1 (0.5863ms)
  ℹ tests 2
  ℹ suites 0
  ℹ pass 2
  ℹ fail 0
  ℹ cancelled 0
  ℹ skipped 0
  ℹ todo 0
  ℹ duration_ms 138.5318
  ```

  :::

  > <samp>Node 中的 `beforeEach` 会在所有用例执行前执行完毕，而 bun 的 `beforeEach` 会在用例之间穿插执行 </samp>


## <samp>SQLite</samp>

<samp>Bun 原生实现了 SQLite3 驱动程序，使用需要从内置 `bun:sqlite` 模块导入</samp>

```ts
import { Database, Statement } from "bun:sqlite";

const db: Database = new Database("school.sqlite");

db.exec(
  "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT,age INTEGER)"
);
db.exec("INSERT INTO students (name, age) VALUES ('Alex', 23)");
const query: Statement<any, any> = db.query(
  "SELECT COUNT(*) AS count, name FROM students GROUP BY name"
);

query.all().forEach((student) => {
  console.log(student.name, student.count); // Alex 4
});
```

