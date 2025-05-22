# <samp>Vue</samp>

<samp>Vue 提供了一套声明式的、组件化的编程模型</samp>

- <samp>声明式渲染：Vue 扩展了一套模板语法，可以声明式地描述输出 HTML 与 JavaScript 状态之家的关系</samp>
- <samp>响应式：Vue 会自动跟踪 JavaScript 状态并在发生变化时响应式更新 DOM</samp>

<samp>**单文件组件(Single-File Components，SFC)**：将组件逻辑(JavaScript)、模板(HTML)和样式(CSS)封装在一个文件中</samp>

<samp>**API 风格**</samp>

- <samp>**选项式 API(Options API)**：选项式 API 用包含多个选项的对象来描述组件的逻辑，如：`data`、`methods`、`mounted`；选项所定义的属性最终会暴露在函数内部的 `this` 上，指向当前的组件实例</samp>
- <samp>**组合式(Composition API)**：通过导入 API 函数来描述组件的逻辑，在单文件组件中，通常搭配 `<script setup>` 使用，`<script setup>` 导入和顶层的变量/函数可以在模板中直接使用</samp>

## <samp>开始</samp>

<samp>在命令行创建项目目录</samp>

::: code-group

```sh[npm]
npm create vue@latest
```

```sh[pnpm]
pnpm create vue@latest
```

```sh[yarn]
yarn dlx create-vue@latest
```

```sh[bun]
bun create vue@latest
```

:::

<samp>这将执行 `create-vue` 脚手架工具，空格键开启功能，回车键创建项目</samp>

```sh
✔ Project name: .
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

<samp>安装依赖并启动开发服务器</samp>

::: code-group

```sh[npm]
npm install
npm run dev
```

```sh[pnpm]
pnpm install
pnpm run dev
```

```sh[yarn]
yarn
yarn dev
```

```sh[bun]
bun install
bun run dev
```

:::

## <samp>渲染机制</samp>

<samp>**虚拟 DOM(Virtual DOM，VDOM)**：虚拟 DOM 是一种编程概念，由 React 率先提出，通过 `vnode` 描述渲染的 UI 的数据结构，保存在内存中，使之与真实 DOM 保持同步</samp>

```js
const vnode = {
  type: 'div',
  props: [
    id: 'Hello'
  ],
  children: [
    // 更多 vnode
  ]
};
```

> <samp>`vnode` 是一个纯 JavaScript 对象，代表一个 `div` 元素，包含实际元素所需的所有信息，还包含更多节点，这使它称为虚拟 DOM 的根节点</samp>

<samp>**挂载(mount)**：一个运行时渲染器会遍历整个虚拟 DOM 树，并由此构建真实 DOM 树，这个过程称作**挂载**</samp>

<samp>**更新(patch)**：渲染器会遍历比较新旧两份虚拟 DOM 树，找出之间的区别，并将其中的变化应用到真实 DOM 中，这个过程称为更新(patch)，又称比对(diffing)或协调(reconciliation)</samp>

<samp>**流程**</samp>

1. <samp>**编译**：将 Vue 模板编译为渲染函数，即返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以使用运行时编译器即时完成</samp>
2. <samp>**挂载**：运行时渲染器调用渲染函数，遍历并返回虚拟 DOM 树，创建实际 DOM 节点</samp>
3. <samp>**更新**：当依赖发生变化后，组件重新渲染，这时会创建一个更新后的虚拟 DOM 树，运行时渲染器遍历新树，与旧树进行比较，然后将必要的更新应用到真实 DOM 中</samp>

<img src="https://cn.vuejs.org/assets/render-pipeline.CwxnH_lZ.png" alt="vue how to construct a real DOM tree"/>

::: code-group

```js[render]
render(h) {
  return h('div', [
    h('h1', `${this.msg}`),
    h('p', `${this.info}`)
  ]);
}
```

```html[template]
<div>
  <h1>Hello Vue!</h1>
  <p>zhizi</p>
</div>
```

:::

<samp>Vue 模板会被预编译成 DOM 渲染函数</samp>

<samp>为什么 Vue 默认推荐使用模板?</samp>

- <samp>模板更贴近实际 HTML，这样更方便重用已有的 HTML 代码片段，能够带来更好的可访问性体验、更方便地使用 CSS 样式，并且更易理解和修改</samp>
- <samp>由于确定的语法，更容易对模板进行静态分析，使得 Vue 模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能</samp>
