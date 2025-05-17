# <samp>How to Use</samp>

<samp><b>my personal website</b></samp>

1. <samp>前置准备：[Node.js](https://nodejs.org/) 18 及以上版本</samp>

2. <samp>安装依赖</samp>

   ```sh
   pnpm install
   ```

   <samp>脚本</samp>

   ```js
   "scripts": {
     "docs:dev": "vitepress dev docs",
     "docs:build": "vitepress build docs",
     "docs:preview": "vitepress preview docs"
   },
   ```

3. <samp>启动本地开发服务器</samp>

   ```sh
   pnpm run docs:dev
   ```

   <samp>服务将运行在 http://localhost:5173/ 上</samp>

## <samp>本地构建测试</samp>

1. <samp>构建文档</samp>

   ```sh
   pnpm run docs:build
   ```

2. <samp>本地预览</samp>

   ```sh
   pnpm run docs:preview
   ```

3. <samp>`--port`：配置服务器端口</samp>

   ```sh
   "scripts": {
     "docs:preview": "vitepress preview docs --port 8080"
   }
   ```

## <samp>文件结构</samp>

````
blog
├─ .vitepress
├─ CC BY-NC-SA 4.0
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  ├─ about.md
│  ├─ blog
│  │  ├─ index.md
│  │  └─ plugin.md
│  ├─ index.md
│  └─ notes
│     ├─ browser
│     │  └─ index.md
│     ├─ css
│     │  ├─ index.md
│     │  ├─ Less.md
│     │  └─ Sass.md
│     ├─ html
│     │  └─ index.md
│     ├─ index.md
│     ├─ js
│     │  └─ index.md
│     ├─ node
│     │  └─ index.md
│     ├─ react
│     │  └─ index.md
│     └─ vue
│        └─ index.md
├─ LICENSE
├─ package.json
├─ pnpm-lock.yaml
└─ README.md

````



## <samp>设定 public 根目录</samp>

默认部署在域名根路径上 ( `/` )，如果希望在子路径中提供服务，如： `http://localhost:8080/blog/`，在 VitePress 配置中将 `base` 设为 `'/blog/'`

```ts
export default defineConfig({
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  lang: 'en-US',
  base: '/blog/',
})
```

## <samp>GitHub Pages</samp>

1. <samp>在 `.github/workflows` 目录中创建一个 `deploy.yml` </samp>

   ```yaml
   # 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
   name: Deploy VitePress site to Pages
   
   on:
     # 在针对 `main` 分支的推送上运行。如果你
     # 使用 `master` 分支作为默认分支，请将其更改为 `master`
     push:
       branches: [main]
   
     # 允许你从 Actions 选项卡手动运行此工作流程
     workflow_dispatch:
   
   # 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
   permissions:
     contents: read
     pages: write
     id-token: write
   
   # 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
   # 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
   concurrency:
     group: pages
     cancel-in-progress: false
   
   jobs:
     # 构建工作
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
           with:
             fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
         # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释
         #   with:
         #     version: 9
         # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 22
             cache: npm # 或 pnpm / yarn
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Install dependencies
           run: npm ci # 或 pnpm install / yarn install / bun install
         - name: Build with VitePress
           run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: docs/.vitepress/dist
   
     # 部署工作
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       needs: build
       runs-on: ubuntu-latest
       name: Deploy
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. <samp>在存储库设置中的 " Pages " 菜单项下，选择 " Build and deployment > Source > GitHub Actions "</samp>
3. <samp>更新文件，推送 `main` 分支</samp>

----

<samp>Code is licensed under <a href='./LICENSE'>MIT LICENSE</a>, <br>words and images are licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a></samp>.
