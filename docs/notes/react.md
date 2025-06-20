# <samp>React</samp>

::: details <samp>目录</samp>

[[toc]]

:::

 <samp>React 是由 Facebook 开发的用于构建用户界面的强大的 JavaScript 库，它允许开发者将 UI 分解成更小的可重用的部分(称为"组件")来创建动态的且具有交互式的 Web 程序</samp>

- <samp>JSX 是一种 JavaScript 语法糖，使用 JSX 可以直接将 JavaScript 注入到 UI 中，作为组件的返回语句返回</samp>

- <samp>**组件**(Component)是一个普通的 JavaScript 函数</samp>

  - <samp>返回值不再是字符串、数值或布尔值等，而是返回 JSX UI，如：按钮、表单、页面等</samp>

  - <samp>轻松**重用**和管理代码，易于维护</samp>

    > <samp>`props`：在组件之间传递数据，根据调用时传递参数的不同，从而让 UI 返回不同的结果，props 允许你将数据从父组件传递到子组件</samp>
    >
    > <samp>在 React 中，父子概念非常普遍</samp>

- <samp>**虚拟 DOM**：DOM(文档对象模型)，代表网页的结构。虚拟 DOM 是真实 DOM 轻量级的副本，当应用程序的数据发生变化时，React 会首先更新虚拟 DOM，然后将有效的更改与真实 DOM 同步</samp>

## <samp>开始</samp>

::: code-group

```sh[npm]
npm create vite@latest my-app -- --template react
```

```sh[pnpm]
pnpm create vite my-app --template react
```

```sh[yarn]
yarn create vite my-app --template react
```

```sh[bun]
bun create vite my-app --template react
```

:::

<samp>Project Structure</samp>

```txt
react-app
├─ eslint.config.js	# ESLint 配置文件，用于代码 linting 和格式检查
├─ index.html       # 项目的入口 HTML 文件，React 应用的挂载点 
├─ package.json     # 项目配置文件，定义依赖、脚本和元数据 
├─ pnpm-lock.yaml   # pnpm 的锁文件，记录依赖的确切版本
├─ public           # 静态资源目录，存放无需构建的公共文件
├─ src              # 源代码目录，包含 React 组件、样式和其他资源
│  ├─ App.css       # App 组件的 CSS 样式文件
│  ├─ App.jsx       # 主 React 组件，应用的入口组件
│  ├─ assets        # 静态资源目录（如图片、字体等）
│  ├─ index.css     # 全局 CSS 样式文件
│  └─ main.jsx      # React 应用的入口 JS 文件，负责渲染 App 组件
└─ vite.config.js   # Vite 配置文件，插件、构建、开发服务器配置
```

## <samp>JSX</samp>

 <samp>JSX 是一种 JavaScript 的语法扩展，实际上是 `React.createElement` 语法糖</samp>

::: code-group

```jsx
const element = <h1>Hello, World!</h1>;
```

```js[React.createElement]
const element = React.createElement('h1', null, 'Hello, World!');
```

:::

- <samp>JSX 表达式必须有一个单一的根元素，不能直接返回多个并列元素</samp>
  - <samp>使用一个父元素 (如：`<div>`) 包裹多个元素</samp>
  - <samp>使用 `<React.Fragment></React.Fragment>` 或  `<></>` ，避免生成额外 DOM 节点</samp>
- <samp>标签必须正确闭合</samp>
  - <samp>JSX 基于 XML 语法，要求严格的标签闭合</samp>
- <samp>使用 camelCase (驼峰命名法) 指定属性，如：`class` -> `className`、`for` -> `htmlFor`</samp>
  - <samp>例外：`data-*` 和 `aria-*` 属性保持 HTML 风格</samp>
- <samp>JSX 允许在模板嵌入 JavaScript 表达式，使用花括号 `{}` 包裹</samp>
- <samp>属性值</samp>
  - <samp>静态值直接写在标签中(如：`type="text"`)</samp>
  - <samp>动态值使用 `{}` 包裹(如：`value={inputValue}`)</samp>
  - <samp>布尔值：`disabled={true}`</samp>
- <samp>子节点使用 `{}` 包裹</samp>
  - <samp>`null`、`undefined`、`false` 不会渲染</samp>
- <samp>`style` 属性接受 JavaScript 对象，而不是 CSS 字符串</samp>
- <samp>注释：`{/* 注释 */}`</samp>

## <samp>条件渲染</samp>

- <samp>数组作为子节点时，自动展开渲染</samp>

  ```jsx
  export default function App() {
    const items = ['a', 'b', 'c', 'd'];
    const result = items.map(item => {
      return (<li>{item}</li>);
    });
    return (<ul>{result}</ul>);
  }
  ```
- <samp>条件渲染使用 JavaScript 逻辑(如：三元运算符、`&&`)</samp>
- <samp>列表渲染时，每个子元素需要绑定一个唯一的 `key` 属性</samp>

  - <samp>`key` 通常是数据的唯一标识(如：`id`)</samp>
  - <samp>不要使用数组索引作为 `key`，除非数据稳定且无序</samp>

## <samp>响应式</samp>

<samp>`useState` 是 React 16.8 引入的一个 Hook，用于在函数组件添加和管理状态(state)，允许组件拥有动态数据，并在数据变化时触发重新渲染</samp>

> <samp>提供一种简单的声明状态变量及其更新函数，替代类组件中的 `this.state` 和 `this.setState`</samp>

- <samp>初始化状态值：`useState(initialState)`</samp>
- <samp>更新状态：`setState(newValue)` 或 `setState(prev => newValue)`</samp>





## <samp>表单</samp>

- <samp>使用 `useState` 声明响应式变量</samp>
- <samp>如何实现重置(类似 vue 中的 `v-model`)</samp>
- <samp>`e.preventDefault()`：阻止原生表单的默认行为</samp>

::: code-group

```jsx[App.jsx]
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    // 阻止事件默认行为
    e.preventDefault();

    if (username === '' || password === '') {
      alert("'username' and 'password' must be required");
      return;
    }

    console.log('username: ' + username, '\npassword: ' + password);
    // 表单提交后, 将文本框内容清空
    setUsername('');
    setPassword('');
  }
  // JSX syntax
  return (<main>
    <h2>Login Form</h2>

    <form onSubmit={handleSubmit}>
      <label htmlFor="txt">
        账号: <input type="text"
          id='txt'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username} />
      </label><br />

      <label htmlFor="pwd">
        密码: <input type="password"
          id='pwd'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password} />
      </label><br />

      <button type="submit">Login</button>
    </form>

  </main>)
}
```

:::

## <samp>Derived State</samp>

<samp>React [derived state](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html) 类似于 vue 中的 `computed`，但不需要像 vue 那样显式地去调用一个函数 </samp>

::: code-group

```jsx[App.jsx]
import { useState } from 'react';
import './style.css'

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const usernameClass = username.length <= 5 ? 'input-error' : 'input'; // [!code ++]
  const passwordClass = password.length <= 5 ? 'input-error' : 'input'; // [!code ++]
  
  function handleSubmit(e) {
    // 阻止事件默认行为
    e.preventDefault();

    if (usernameClass === 'input-error' || passwordClass === 'input-error') { // [!code ++]
      return; // [!code ++]
    } // [!code ++]
    
    console.log('username: ' + username, '\npassword: ' + password);
    
    // 表单提交后, 将文本框内容清空
    setUsername('');
    setPassword('');
  }
  // JSX syntax
  return (<main>
    <h2>Login Form</h2>

    <form onSubmit={handleSubmit}>
      <label htmlFor="txt">
        账号: <input type="text" className={usernameClass} // [!code ++]
          id='txt'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username} />
      </label><br />

      <label htmlFor="pwd">
        密码: <input type="password" className={passwordClass} // [!code ++]
          id='pwd'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password} />
      </label><br />

      <button type="submit">Login</button>
    </form>

  </main>)
}
```

```css[style.css]
.input-error{
  border:1px solid red;
}
```

:::

<samp>[dynamic-circle-demo](https://github.com/YasakaKanoko/dynamic-circle-demo) 练习：</samp>

- <samp>`useState()` 用法</samp>
- <samp>Derived State 用法</samp>
- <samp>`style` 样式绑定</samp>
- <samp>事件处理</samp>



## <samp>Vite+React-ts</samp>

::: code-group

```sh[npm]
npm create vite@latest my-app -- --template react-ts
```

```sh[pnpm]
pnpm create vite my-app --template react-ts
```

```sh[yarn]
yarn create vite my-app --template react-ts
```

```sh[bun]
bun create vite my-app --template react-ts
```

:::
