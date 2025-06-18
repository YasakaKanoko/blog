# <samp>React</samp>

::: details <samp>目录</samp>

[[toc]]

:::

 <samp>React 是一个构建用户界面的 JavaScript 库</samp>

- <samp>**组件化**：React 将 UI 划分成独立的、可重用的组件。每个组件都有自己的状态和行为，可以组合成复杂的 UI</samp>
- <samp>**声明式**：React 使用声明式编程范式，只需描述 UI ，而不需要关心具体的实现细节</samp>
- <samp>**虚拟 DOM**： React 使用虚拟 DOM 来优化 UI 的更新。当状态改变时，React 会计算出最小化的 DOM 操作，从而提高性能</samp>
- <samp>**跨平台**：React 用于构建 Web 应用，React Native 用于构建移动应用</samp>
- <samp>**高性能**：React 的虚拟 DOM 和优化机制使得应用具有出色的性能</samp>

## <samp>Hello World</samp>

- <samp>`React.createElement(type, props, ...children)`：创建一个 React 元素</samp>
- <samp>`ReactDOM.createRoot(domNode, options?)`：创建一个根节点以渲染 React 组件</samp>

::: code-group

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<div id="app"></div>
<script>
  const hello = React.createElement('div', { id: 'message', className: 'hello' }, 'Hello World!');
  const app = ReactDOM.createRoot(document.getElementById('app'));
  app.render(hello);
</script>
```

```html[组件]
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<div id="app"></div>
<script>
  function Message(props){
    return React.createElement('div', null, props);
  }
  const hello = Message('Hello World!');
  const app = ReactDOM.createRoot(document.getElementById('app'));
  app.render(hello);
</script>
```

:::

## <samp>JSX</samp>

 <samp>JSX，是一个 JavaScript 的语法扩展，在 React 中使用 JSX 来描述 UI，实际上是 `React.createElement` 语法糖</samp>

::: code-group

```jsx
const element = <h1>Hello, World!</h1>;
```

```js[React.createElement]
const element = React.createElement('h1', null, 'Hello, World!');
```

:::

- <samp>**在 JSX 中使用插值**：`{}`</samp>

  > <samp>变量、函数调用、数学计算等</samp>

- <samp>**JSX 属性名**：需要使用 camelCase (驼峰命名法)，如：`className`、`onClick`</samp>

- <samp>**JSX 属性值**：字符串或 `{}` 表达式</samp>

- <samp>JSX 必须有一个根元素</samp>

  > <samp>使用 `<React.Fragment></React.Fragment>` 或  `<></>` ，避免生成额外 DOM 节点</samp>

- <samp>JSX 中的所有**标签必须闭合**</samp>

- <samp>**JSX 注释**：`{/* 注释 */}`</samp>

> [!TIP]
>
> <samp>建议将 JSX 包裹在一个括号中，可以避免遇到自动插入分号陷阱</samp>

## <samp>开始</samp>

<samp>Vite+React</samp>

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

<samp>组件</samp>

::: code-group

```jsx[App.jsx]
export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}
```

```jsx[main.jsx]
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

```html[index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

:::

## <samp>组件</samp>

<samp>组件可以将 UI 分为独立的、可重用的部分，并单独考虑每个部分</samp>

<samp>React 组件可以分为：函数组件、类组件</samp>

- <samp>函数组件最初被称为"无状态组件"，因为它们只是简单的函数，没有自己的状态管理</samp>

- <samp>无状态函数组件只是接受 `props` 并返回 JSX 元素，没有生命周期方法或状态</samp>
- <samp>随着 React 16.8 的引入，函数组件通过 Hooks 获得了状态管理和生命周期方法的能力，成为"有状态组件"</samp>

## <samp>What's New in React 19</samp>

-  <samp>`useTransition()`</samp>
- <samp>New Compiler</samp>
- <samp>Actions</samp>
- <samp>New Hooks</samp>
- <samp>Refs</samp>
- <samp>`use()`</samp>
- <samp>Other miscellaneous improvement to React</samp>





## <samp>响应式</samp>

<samp>`useState` Hook 跟踪字符串、数字、布尔、数组、对象以及组合</samp>

- <samp>`state`：保存渲染的数据</samp>
- <samp>`useState`：State setter 函数，更新变量触发重新渲染</samp>

::: code-group

```jsx[React]
import { useState } from 'react';

export default function Model() {
  const [textInput, setTextInput] = useState('');
  return (
    <>
      <input type="text" onChange={(e) => { setTextInput(e.target.value) }} />
      <p>{textInput}</p>
    </>
  )
}
```

```js[vanilla.js]
const pEle = document.querySelector('.p-text');
const inputEle = document.querySelector('.input-text');

inputEle.addEventListener('input', (event) => {
  pEle.textContent = event.target.value;
});
```

:::

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

## <samp>列表渲染</samp>

<samp>通常在组件中使用 `map()` 转换，接收一个数字数组作为参数并输出元素列表</samp>

<samp>`keys`：(简称："键")，与 vue 相同，在运行时需要为列表的每项提供一个 `key`，key 可以帮助 React 识别被修改、添加、删除的元素</samp>

- <samp>定义键的最佳方式：在数组每项中使用一个字符串，将列表项与其他同级列表项区分；通常是使用 `id` 作为键</samp>
- <samp>如果没有 `id`，可以使用列表索引；这种方式只是消除了控制台的警告，实际上没有作用</samp>

::: code-group

```jsx[MyApp.jsx]
import '@/assets/MyApp.css';

export default function MyApp() {
  const cities = [
    {
      name: "New York",
      country: "USA",
      forecast: [
        { date: "2024-04-03", temperature: 15, weather: "Partly cloudy" },
        { date: "2024-04-04", temperature: 17, weather: "Sunny" },
        { date: "2024-04-05", temperature: 18, weather: "Partly cloudy" },
        { date: "2024-04-06", temperature: 20, weather: "Rain" },
        { date: "2024-04-07", temperature: 16, weather: "Thunderstorms" },
        { date: "2024-04-08", temperature: 14, weather: "Cloudy" },
        { date: "2024-04-09", temperature: 13, weather: "Partly cloudy" },
      ],
    },
    {
      name: "London",
      country: "UK",
      forecast: [
        { date: "2024-04-03", temperature: 12, weather: "Cloudy" },
        { date: "2024-04-04", temperature: 14, weather: "Rain" },
        { date: "2024-04-05", temperature: 15, weather: "Partly cloudy" },
        { date: "2024-04-06", temperature: 13, weather: "Sunny" },
        { date: "2024-04-07", temperature: 11, weather: "Cloudy" },
        { date: "2024-04-08", temperature: 10, weather: "Rain" },
        { date: "2024-04-09", temperature: 12, weather: "Partly cloudy" },
      ],
    },
    {
      name: "Tokyo",
      country: "Japan",
      forecast: [
        { date: "2024-04-03", temperature: 20, weather: "Sunny" },
        { date: "2024-04-04", temperature: 21, weather: "Partly cloudy" },
        { date: "2024-04-05", temperature: 22, weather: "Cloudy" },
        { date: "2024-04-06", temperature: 19, weather: "Rain" },
        { date: "2024-04-07", temperature: 18, weather: "Partly cloudy" },
        { date: "2024-04-08", temperature: 17, weather: "Sunny" },
        { date: "2024-04-09", temperature: 20, weather: "Cloudy" },
      ],
    },

    {
      name: "Sydney",
      country: "Australia",
      forecast: [],
    },

    {
      name: "Beijing",
      country: "China",
    },
  ];

  return (<>
    <main>
      {cities.map((city, index) => {
        return (<section key={index} className='city'>
          <h2>{city.country}</h2>
          <h3>{city.name}</h3>
          {city.forecast && city.forecast.length > 0 ? (
            <ul>
              {city.forecast.map((item, index) => {
                return (<li key={index}>
                  {item.date} &nbsp;
                  <span>temperature: {item.temperature}°C {item.weather}</span>
                </li>)
              })}
            </ul>
          ) : (<div>No Data</div>)}
        </section>)
      })}
    </main>
  </>);
}
```

```css[MyApp.css]
.city {
  text-align: center;
  border: 1px solid orangered;
  border-radius: 4px;
  margin: 8px auto;
}

li {
  list-style: none;
}

h2 {
  color: blueviolet;
}

h3 {
  color: brown;
}
```

:::





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
