# <samp>React</samp>

::: details <samp>目录</samp>

[[toc]]

:::

<samp>React 是一个用于构建**交互式用户界面的** JavaScript **库**</samp>

<samp>**特点**</samp>

- <samp>**声明式**：UI=f(state)</samp>

- <samp>**组件化**</samp>
- <samp>**单向数据流**</samp>
- <samp>**虚拟 DOM**</samp>
- <samp>**Diff 算法**</samp>

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

## <samp>JSX</samp>

 <samp>JSX，是一个 JavaScript 的语法扩展，实际上是 `React.createElement` 语法糖</samp>

::: code-group

```jsx
const element = <h1>Hello, World!</h1>;
```

```js[React.createElement]
const element = React.createElement('h1', null, 'Hello, World!');
```

:::

- <samp>**插值**：`{}` 在 JSX 中可以嵌入 JS 表达式</samp>

  > <samp>`{}` 内部可以使用变量、函数调用、数学计算等，但不能写语句</samp>

- <samp>JSX 属性名：需要使用 camelCase (驼峰命名法)，如：`className`、`onClick`</samp>

- <samp>JSX 属性值：可以是字符串或 `{}` 表达式</samp>

- <samp>JSX 必须有一个根元素</samp>

  > <samp>使用 `<React.Fragment></React.Fragment>` 或  `<></>` ，避免生成额外 DOM 节点</samp>

- <samp>所有标签必须闭合</samp>

- <samp>注释：`{/* 注释 */}`</samp>

> [!TIP]
>
> <samp>建议将 JSX 包裹在一个括号中，可以避免遇到自动插入分号陷阱</samp>

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
