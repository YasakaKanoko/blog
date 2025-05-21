# <samp>Vue</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>Vue 提供了一套声明式的、组件化的编程模型</samp>

- <samp>**声明式**：Vue 扩展了一套模板语法，声明式地描述 HTML 与 JavaScript 状态的关系</samp>
- <samp>**响应式**：Vue 会自动跟踪 JavaScript 状态并在发生变化时响应式更新 DOM</samp>

## <samp>开始</samp>

- <samp>使用 `create-vue`</samp>

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

- <samp>使用 `create-vite`</samp>

  ::: code-group

  ```sh[npm]
  npm create vite@latest my-vue-app -- --template vue
  ```

  ```sh[pnpm]
  pnpm create vite my-vue-app --template vue
  ```

  ```sh[yarn]
  yarn create vite my-vue-app --template vue
  ```

  ```sh[bun]
  bun create vite my-vue-app --template vue
  ```

  :::

### <samp>启动</samp>

::: code-group

```sh[npm]
cd my-vue-app
npm install
npm run dev
```

```sh[pnpm]
cd my-vue-app
pnpm install
pnpm dev
```

```sh[yarn]
cd my-vue-app
yarn
yarn dev
```

```sh[bun]
cd my-vue-app
bun install
bun run dev
```

:::

## <samp>相较于 Vue2</samp>

- <samp>Vue3 不存在构造函数 `new Vue()`</samp>

  ::: code-group

  ```js[vue2/src/main.js]
  import Vue from "vue";
  import App from "./App.vue";
  
  new Vue({
    render: (h) => h(App)
  }).$mount('#app')
  ```

  ```js[vue3/src/main.js]
  import { createApp } from 'vue'; // [!code ++]
  import App from './App.vue';
  
  createApp(App).mount('#app')
  ```

  :::

  ::: details <samp>区别</samp>

  - <samp>`new Vue()` 构造函数创建的对象，所有实例共享全局组件/指令等</samp>
  - <samp>`createApp()` 方法应用实例之间具有隔离的环境</samp>

  :::

- <samp>Vue2 的 `this` 指向组件实例；Vue3 的 `this` 指向 `Proxy` 对象</samp>

- <samp>Vue3 有选项式(option)、组合式(composition)两种 API 可选</samp>

  ::: details <samp>composition API</samp>

  - <samp>`setup()` 会在生命周期钩子函数之前调用</samp>

  - <samp>`setup()` 的 `this` 指向 `undefined`</samp>

  - <samp>`setup()` hook 内部的数据、方法直接附着在组件实例上</samp>

  :::

## <samp>文本插值</samp>

<samp>[Mustache 语法](https://cn.vuejs.org/guide/essentials/template-syntax.html)：(双大括号)，在标签中同步更新相应组件实例中的数据</samp>

- <samp>vue 模板可以直接解析组件实例中的属性</samp>
- <samp>vue 模板可以直接调用属性的方法</samp>
- <samp>vue 模板可以直接嵌入 JavaScript 表达式</samp>

::: code-group

```vue[App.vue]
<script setup>
const text = 'Hello World';
</script>

<template>
  <div>
    <p>{{ text }}</p>
  </div>

</template>
```

:::

## <samp>[v-model](https://cn.vuejs.org/api/built-in-directives.html#v-model)</samp>

<samp>`v-model`：双向数据绑定</samp>

- <samp>[`.lazy`](https://cn.vuejs.org/guide/essentials/forms.html#lazy)：输入懒加载</samp>
- <samp>[`.number`](https://cn.vuejs.org/guide/essentials/forms.html#number)：将输入的合法字符串转为数字</samp>
- <samp>[`.trim`](https://cn.vuejs.org/guide/essentials/forms.html#trim)：移除输入内容两端空格</samp>

<samp>原生 JS 实现 `v-model`</samp>

::: code-group

```vue[App.vue]
<script setup>
import { ref } from 'vue';
const text = ref('');
</script>

<template>
  <div>
    <input type="text" v-model="text">
    <p>{{ text }}</p>
  </div>

</template>
```

```js[vanilla.js]
const pEle = document.querySelector('.p-text');
const inputEle = document.querySelector('.input-text');

inputEle.addEventListener('input', (event) => {
  pEle.textContent = event.target.value;
});
```

:::

<samp>原生 JS 实现 `v-model.lazy`</samp>

::: code-group

```vue[App.vue]
<script setup>
import { ref } from 'vue';
const text = ref('');
</script>

<template>
  <div>
  	<!-- [!code ++] -->
    <input type="text" v-model.lazy="text"> 
    <p>{{ text }}</p>
  </div>

</template>
```

```js[vanilla.js]
const pEle = document.querySelector('.p-text');
const inputEle = document.querySelector('.input-text');

let text = ""; // [!code ++]
inputEle.addEventListener('input', (event) => {
  text = event.target.value; // [!code ++]
});
inputEle.addEventListener('blur', () => { // [!code ++]
  pEle.textContent = text; // [!code ++]
}); // [!code ++]
```

:::

## <samp>[v-bind](https://cn.vuejs.org/guide/essentials/class-and-style.html)</samp>

<samp>`v-model` 可以直接绑定 `input`、`select`、`checkbox` 的值，但无法绑定元素的属性</samp>

<samp>`v-bind`：操作元素的 CSS 以及类样式，简写：⌈`:`⌋</samp>

```vue
<script setup>
import { ref } from 'vue'
const textColor = ref('red-text');
</script>

<template>
  <h1 class="red-text" :class="textColor">Demo</h1>
  <select name="" id="" v-model="textColor">
    <option value="red-text">Red</option>
    <option value="blue-text">Blue</option>
  </select>
</template>

<style scoped>
.red-text {
  color: red;
}

.blue-text {
  color: blue;
}
</style>
```

## <samp>v-on</samp>

<samp>`v-on`：为元素绑定事件监听器，简写：⌈`@`⌋</samp>

::: code-group

```vue[template]
<template>
  <form>
    <label for="txt">
      账号: <input 
      type="text" 
      id='txt' 
      placeholder="Enter your username" 
      v-model="username" 
      :class="username_is_error" />
    </label><br />

    <label for="pwd">
      密码: <input 
      type="password" 
      id='pwd' 
      placeholder="Enter your password" 
      v-model="password"
      :class="password_is_error" />
    </label><br />

    <!-- prevent: 阻止默认事件 -->
    <button type="submit" @click.prevent="submit">Login</button>
  </form>
</template>
```

```vue[script]
<script setup>
import { ref } from 'vue'
let username = ref('');
let password = ref('');
let username_is_error = ref('');
let password_is_error = ref('');

const submit = () => {
  username_is_error.value = '';
  password_is_error.value = '';

  if (username.value.length < 3 || password.value.length < 3) {

    if (username.value.length < 3) {
      username_is_error.value = 'input-error';
    }

    if (password.value.length < 3) {
      password_is_error.value = 'input-error';
    }

    console.log('The input length smaller than 3 ');
  }
  
  console.log(`Your username is ${username.value}, Your password is ${password.value}`);
}
</script>
```

```vue[style]
<style scoped>
input {
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.input-error {
  border: solid 1px red;
}

button {
  margin-bottom: 10px;
}
</style>
```

:::

## <samp>watch</samp>

<samp>`watch`：监听一个或多个数据源，当数据变化时调用回调函数</samp>

```js
const countRef = ref(0)
watch(countRef, (newCount, oldCount) => {
})
```

<samp>监听多个数据源时</samp>

```js
watch([fooRef, barRef], ([newFoo, newBar], [oldFoo, oldBar]) => {
})
```

```vue
<script setup>
import { ref, watch } from 'vue'

const usernameRef = ref('');
const passwordRef = ref('');
const titleRef = ref('Title');

watch([usernameRef, passwordRef, titleRef], ([newUsername, newPassword, newTitle], [prevUsername, prevPassword, prevTitle]) => {
  titleRef.value = "Title";
  if (newUsername.length < 3) {
    titleRef.value = 'Error occur';
  }
  if (newPassword.length < 3) {
    titleRef.value = 'Error occur';
  }
  if (newTitle === prevTitle) {
    return;
  }
  if (prevTitle === 'Error occur') {
    console.log('Input valid!');
    return;
  }
  console.log('Input Error!');
})


</script>

<template>
  <h1>{{ titleRef }}</h1>
  <form>
    <label for="txt">
      账号: <input type="text" id='txt' placeholder="Enter your username" v-model="usernameRef" />
    </label><br />

    <label for="pwd">
      密码: <input type="password" id='pwd' placeholder="Enter your password" v-model="passwordRef" />
    </label><br />
  </form>
</template>
```

## <samp>computed</samp>



## <samp>响应式</samp>

<samp>`ref()`：声明响应式的状态</samp>

> - <samp>在 `setup()` 函数中声明时，函数参数实质上是一个带有 `.value` 属性的 `ref` 对象</samp>
> - <samp>**自动解包**：在组件模板中使用时，具有自动解包</samp>

```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let count = ref(0);
    return {
      count,
    }
  }
}
</script>
```

::: details <samp>优化：使用 `ref()` 实现类似 React 的 `useState()`</samp>

```vue
<template>
  <button @click="increase">{{ count }}</button>
</template>

<script>
import { ref } from 'vue'
function useCount() {
  let count = ref(0);
  const increase = () => {
    count.value++;
  }
  return {
    count,
    increase
  }
}
export default {

  setup() {
    return {
      ...useCount()
    }
  }
}
</script>
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
