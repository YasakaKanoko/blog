# <samp>Vite</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>Vite 是一款能让你立即启动项目并实时查看修改的构建工具</samp>

<samp>适用场景</samp>

- <samp>使用 React、Vue 和 Svelte 等框架的快速前端开发</samp>
- <samp>需要极简配置就能获得优化生产构建的应用</samp>
- <samp>寻求比 Webpack 等传统打包工具更轻量高效的工具的开发者</samp>

<samp>Vite 需要 Node.js 18 或 20 以上版本支持</samp>

```sh
node --version
```

## <samp>Building React apps with Vite</samp>

::: code-group

```sh[npm]
npm create vite@latest
```

```sh[yarn]
yarn create vite
```

```sh[pnpm]
pnpm create vite
```

```sh[bun]
bun create vite
```

:::

```sh
Need to install the following packages:
create-vite@6.5.0
Ok to proceed? (y)


> npx
> create-vite

│
◇  Project name:
│  .
│
◇  Package name:
│  vite-app
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in E:\study_coding\vue\Vite_app...
│
└  Done. Now run:

  npm install
  npm run dev
```

- <samp>`public`：最终生成的静态资源</samp>
- <samp>`src/assets`：可优化的静态资源</samp>
- <samp>`package.json`：存放相关依赖</samp>
- <samp>`vite.config.json`：配置和插件列表</samp>

<samp>特点</samp>

- <samp>Fast startup time：无论项目规模大小，Vite 都能以极简配置提供闪电般的开发体验，实现效率最大化</samp>

- <samp>Fast DX(Development experience)</samp>

- <samp>Bundling vs HMR over native ES modules</samp>

  - <samp>使用 HMR 代替原生 ES Module，Vite 不会在发生更改时捆绑整个代码，而是仅仅替换已更改的部分代码，开发服务器仍在运行时实现快速更新且不会破坏应用程序的现有状态</samp>

    <samp>例：当浏览器修改了 `App` 组件的 `count` 时，再添加 `Header` 组件，对应的 `count` 的值并未重载</samp>

    ::: code-group

    ```jsx[App.jsx]
    // ...
    import Header from './components/Header'; // [!code ++]
    
    export default function App() {
      const [count, setCount] = useState(0)
    
      return (
        <>
        	{/* [!code ++] */}
          <Header /> 
          <div>
          {/* ... */}
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            {/* ... */}
          </div>
          {/* ... */}
        </>
      )
    }
    ```

    ```jsx[Header.jsx]
    export default function Header(){
      return(
        <header>
          <h1>Hello Vite</h1>
        </header>
      );
    }
    ```

    :::

## <samp>Working with static assets</samp>

<samp>Vite 处理 Static Assets(如：图像、字体、文本、媒体等)</samp>

- <samp>Optimize</samp>

  1. <samp>Hash to cache：向文件名添加哈希进行缓存</samp>
  2. <samp>Inline if size < 4KB：如果文件小于 4 KB 则内联该文件，不会使用第一种方式，而是将文件转换为 base64 并包含在 HTML 中而不是作为单独的文件，这样不会产生额外的 HTTP 请求</samp>
  3. <samp>Optimize with plugins：使用插件优化</samp>

- <samp>Copy As Is</samp>

  ```sh
  Vite_app
  ├─ public
  │  └─ vite.svg
  ├─ src
  │  ├─ assets
  │  │  └─ react.svg
  └─ README.md
  ```

  - <samp>`src/assets`：需要优化的文件(文件名包含哈希值)，引入时使用相对路径</samp>

    ::: code-group

    ```jsx[App.jsx]
    import reactLogo from './assets/react.svg'
    ```

    ```sh
    ls -l dist/assets
    -a----         2025/6/16      0:24           4126 react-CHdo91hT.svg
    ```

    :::

  - <samp>`public`：不需要进行优化的文件(文件名不包含哈希值)，引入时使用绝对路径</samp>

    ::: code-group

    ```jsx[App.jsx]
    import viteLogo from '/vite.svg'
    ```

    ```sh
    ls -l dist
    -a----         2025/6/15     23:38           1497 vite.svg
    ```

    :::

## <samp>Using environment variables</samp>

<samp>`import.meta`：一个特殊对象，描述了当前模块的元信息</samp>

- <samp>`import.meta.env`：访问环境变量</samp>
  - <samp>`.BASE_URL`：项目的基础路径，通常指构建时指定应用的部署路径</samp>
  - <samp>`.MODE`：当前构建的模式；development 开发模式、production 生产模式、staging 自定义模式</samp>
  - <samp>`.DEV`：是否为开发模式</samp>
  - <samp>`.PROD`：是否为生产模式</samp>
  - <samp>`SSR`：是否为服务器渲染模式</samp>

- <samp>`.env`：加载额外的环境变量</samp>

  - <samp>自定义的变量必须以 `VITE_` 开头的大写字母</samp>

    ::: code-group

    ```ini[.env]
    VITE_GREETING=Howdy!
    ```

    ```jsx[App.jsx]
    export default function App() {
      // [!code ++]
      const greeting = import.meta.env.VITE_GREETING
    
      return (
        <>
          <h1>Vite + React</h1>
          {/*[!code ++]*/}
          <h2>{greeting}</h2>
        </>
      )
    }
    ```

    :::

## <samp>TypeScript development</samp>

## <samp>Building for production</samp>

## <samp>Configuring and extending Vite</samp>

## <samp>HMR and What makes Vite fast</samp>

