# <samp>bootstrap-vue</samp>

1. <samp>安装依赖：bootstrap-vue-next</samp>

   ```sh
   pnpm add bootstrap bootstrap-vue-next
   ```

2. <samp>引入 bootstrap</samp>

   ::: code-group

   ```js[main.js]
   import './assets/main.css'
   
   import { createApp } from 'vue'
   import { createBootstrap } from 'bootstrap-vue-next'
   
   // necessary CSS
   import 'bootstrap/dist/css/bootstrap.css'
   import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
   
   import App from './App.vue'
   
   const app = createApp(App)
   // important
   app.use(createBootstrap())
   app.mount('#app')
   ```

   :::

   

3. <samp>使用[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)：自动注册组件和 tree-shaken</samp>

   ```sh
   pnpm add unplugin-vue-components -D
   ```

4. <samp>配置 `vite.config.js` ，将组件添加到 Vite 插件选项中</samp>

   ::: code-group

   ```js[vite.config.js]
   import { fileURLToPath, URL } from 'node:url'
   
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import Components from 'unplugin-vue-components/vite'
   import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
   import vueDevTools from 'vite-plugin-vue-devtools'
   
   // https://vite.dev/config/
   export default defineConfig({
     plugins: [
       vue(),
       vueDevTools(),
       Components({
         resolvers: [BootstrapVueNextResolver()],
       })
     ],
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
       },
     },
   })
   ```

   :::