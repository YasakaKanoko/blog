# <samp>ElementPlus</samp>

::: details <samp> 目录 </samp>

[[TOC]]

:::

<samp>BEM(Block element modifier，块、元素和修饰符缩写)：前端开发的流行 CSS 方法论。其主要目标是帮助组织、维护和扩展大型项目中的 CSS 代码</samp>

> <samp>**参考**：[Introduction to BEM — block element modifier: A beginner’s guide](https://medium.com/design-bootcamp/introduction-to-bem-block-element-modifier-a-beginners-guide-35e267b6c39e)</samp>

- <samp>**块**：代表一个独立的实体，其中包含所有相关的 HTML 和 CSS，一个块可以是简单的，也可以是复合的</samp>
  - <samp>如：标题、导航菜单或相关内容</samp>
  - <samp>命名规范：根据用途，建议使用连字符，如：`header-container` 或 `nav-menu`</samp>
- <samp>**元素**：块的子元素，元素也有各自的类名</samp>
  - <samp>`__`：双下划线分隔块与元素，如：`navigation__link`</samp>
- <samp>**修饰符**：创建块和元素的变体，无需创建新的类名</samp>
  - <samp>如：状态、主题或大小</samp>
  - <samp>`--` 双短划线表示；修饰符可以应用于块或元素，也可以与其他修饰符组合以创建更复杂的效果</samp>

::: details <samp>BEM 适用于 Sass/Less</samp>

```scss
.block {
  &__element {
    
  }
  &--modifier {
    
  }
}
```

:::

## <samp>开始</samp>

- <samp>**全局引入**</samp>

  - <samp>安装 Element Plus</samp>

    ::: code-group

    ```sh[npm]
    npm install element-plus
    ```

    ```sh[yarn]
    yarn add element-plus
    ```

    :::

  - <samp>在 `main.js` 或 `main.ts` 中注册 Element Plus</samp>

    ::: code-group

    ```js[main.js]
    import './assets/main.css';
    import { createApp } from 'vue';
    import ElementPlus from 'element-plus'; // [!code ++] 引入 Element Plus
    import 'element-plus/dist/index.css'; // [!code ++] 引入 Element Plus 样式
    import App from './App.vue';
    
    const app = createApp(App);
    app.use(ElementPlus); // [!code ++] 注册 Element Plus
    app.mount('#app');
    ```

    :::

- <samp>**按需引入**</samp>

  - <samp>安装按需引入插件</samp>

    ::: code-group

    ```sh[npm]
    npm install element-plus --save
    npm install -D unplugin-vue-components unplugin-auto-import
    ```
  
    ```sh[yarn]
    yarn add element-plus
    yarn add -D unplugin-vue-components unplugin-auto-import
    ```

    :::

  - <samp>配置 Vite：在 `vite.config.js` 或 `vite.config.ts` 中添加插件</samp>

    ::: code-group
  
    ```js[vite.config.js]
    import { fileURLToPath, URL } from 'node:url'
    
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import vueDevTools from 'vite-plugin-vue-devtools'
    import AutoImport from 'unplugin-auto-import/vite' // [!code ++]
    import Components from 'unplugin-vue-components/vite' // [!code ++]
    
    // https://vite.dev/config/
    export default defineConfig({
      plugins: [
        vue(),
        vueDevTools(),
        AutoImport({ // [!code ++]
          resolvers: [ElementPlusResolver()], // [!code ++]
        }), // [!code ++]
        Components({ // [!code ++]
          resolvers: [ElementPlusResolver()], // [!code ++]
        }), // [!code ++]
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    })
    ```
  
    :::
  

