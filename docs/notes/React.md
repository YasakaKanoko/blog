# <samp>React</samp>

::: details <samp>目录</samp>

[[toc]]

:::

<samp>React 是一个用于构建**交互式用户界面的** JavaScript **库**</samp>

- <samp>React 16：Fiber 架构</samp>
  - <samp>**优先级机制**：引入了任务的优先级调度机制，通过为不同类型的任务分配优先级，React 可以更高效地管理渲染流程</samp>
  - <samp>**时间切片**：将长任务分割成多个小任务，分段执行，充分利用浏览器的空闲时间</samp>
  - <samp>**双缓冲机制**：使用双缓冲机制来协调渲染任务，确保任务的无缝切换</samp>
  - <samp>**中断与恢复能力**：利用浏览器事件循环和 `requestIdleCallback` 等 API，在渲染任务中间插入检查点，允许任务中断并在空闲时恢复</samp>
- <samp>React 16.8：Hooks，标志着从类组件正式转为函数组件</samp>
- <samp>React 17：过渡版本</samp>
- <samp>React 18</samp>
  - `transition`
  - `Suspense`
  - `Hooks`
  - `Offscreen`

<samp>**特点**</samp>

- <samp>**声明式**：UI=f(state)</samp>

- <samp>**组件化**</samp>
- <samp>**单向数据流**</samp>
- <samp>**虚拟 DOM**</samp>
- <samp>**Diff 算法**</samp>

## <samp>开始</samp>

- <samp>Vite+React</samp>

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

- <samp>Vite+React-ts</samp>

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

## <samp>JSX</samp>

- <samp>根元素只能有一个</samp>

  <samp>如：`div`；如果不需要多余的 `div`，可以使用 `Fragment` 片段，简写：`<></>`</samp>

  ::: details <samp>details</samp>

  ```jsx
  import React from 'react';
  
  function App() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
      </React.Fragment>
    )
  }
  
  export default App;
  ```

  :::

- <samp>在 `{}` 使用变量、表达式</samp>

  > <samp>模板字符串、函数返回值、三元运算符</samp>

  ::: details <samp>details</samp>

  ```jsx
  return (<>
      <ul>
        {/* 读取变量 */}
        <li id={test}>1</li>
        {/* 函数返回值 */}
        <li>{Math.abs(-10)}</li>
        {/* 三元表达式 */}
        <li>{name === "Jolyne" ? "徐伦" : null}</li>
      </ul>
    </>);
  ```

  :::

- <samp>`style` 属性需要使用驼峰命名法</samp>

  - <samp>`font-size` 写作 `fontSize`</samp>

  - <samp>`class` 写作 `className`</samp>

- <samp>JSX 的注释写在花括号中</samp>

- <samp>数组自动展开</samp>

  ::: details <samp>details</samp>

  ```jsx
  function App() {
    const stuInfo = [
      { name: '张三', age: 18, id: 1 },
      { name: "李四", age: 19, id: 2 },
      { name: "王五", age: 20, id: 3 }
    ];
    
    let stuRes = stuInfo.map(item => {
      return (<li key={item.id}>姓名: {item.name}, 年龄: {item.age}</li>);
    });
    
    const ele = (<>
      <ul>
        {stuRes}
      </ul>
    </>);
    return ele;
  }
  
  export default App;
  ```

  :::

### <samp>~~createElement~~</samp>

<samp>`createElement(type, props, [...children])`：创建元素</samp>

```jsx
const element1 = <h1 className="greeting">Hello World!</h1>;
const element2 = React.createElement('h1', {
  className: 'greeting'
}, 'Hello World!');
```

> <samp>JSX 实际上就是 `createElement()` 语法糖</samp>

## <samp>组件</samp>

<samp>**早期**的函数组件被称作**无状态组件**，仅做纯 UI 展示</samp>

<samp>在 React 16.8 推出 hooks 后，开始使用函数组件，标志 React 编程思想的转变</samp>

::: details <samp>类组件</samp>

```jsx
import React from 'react';

class Hello extends React.Component {
  render() {
    return (<>
      <h1>Hello World!</h1>
    </>);
  }
}
export default Hello;
```

:::

::: details <samp>函数组件</samp>

```jsx
export default function Hello() {
  return (<>
    <h1>Hello World!</h1>
  </>);
}
```

:::

## <samp>事件</samp>

<samp>**事件**：React 允许在 JSX 中添加事件处理函数，通常在**点击**、**悬停**、**聚焦表单输入**等交互时触发</samp>

- <samp>**事件对象**：React 事件处理函数，传入的事件对象 `e` ，是一个合成事件对象</samp>

  ```jsx
  <button onClick={function handleClick(e) {
    console.log(e);
  }}> 按钮</button >
  ```

- <samp>**原生事件对象**：通过 `e.nativeEvent` 访问</samp>

<samp>**点击事件**：通过 `onClick()` 绑定事件</samp>

```jsx
export default function Hello() {
  function handleClick() {
    console.log('按钮被点击了');
  }
  return (<button onClick={handleClick}>按钮</button>);
}
```

> <samp>**事件处理函数**通常使用 `handle` 开头，后接事件名称的形式命名</samp>

<samp>**事件默认行为**：在 React 中，不能通过 `return false;` 方式阻止事件的默认行为，必须通过显式地调用 `e.preventDefault`</samp>

::: code-group

```html
<a href="https://www.google.com/" onclick="return false;">this is a test</a>
```

```jsx
<a href="https://www.google.com/" onClick={(e) => {
  e.preventDefault();
}}>this is a test</a>;
```

:::

<samp>**事件处理函数传参**：箭头函数和 `bind()` 实现</samp>

::: code-group

```jsx[箭头函数]
<button onClick={(e) => {})}>Test</button>
```

```jsx[bind]

```

:::

### <samp>this</samp>

<samp>`this` 的修正，**只针对类组件**</samp>

<samp>当函数被调用时，`this` 的值 `undefined`</samp>

```jsx
import React from 'react';

class Hello extends React.Component {

  handleClick() {
    console.log(this); // [!code warning] undefined
  }

  render() {
    return (<button onClick={this.handleClick}>Test</button>);
  }
}
export default Hello;
```

- <samp>改为箭头函数</samp>

  ::: code-group

  ```jsx[方式1]
  handleClick() { // [!code --]
  handleClick = () => { // [!code ++]
    console.log(this);
  }
  ```

  ```jsx[方式2]
  return (<button onClick={this.handleClick}>Test</button>); // [!code --]
  return (<button onClick={() => { console.log(this); }}>Test</button>); // [!code ++]
  ```

  :::

- <samp>使用 `bind()` 绑定</samp>

  ```jsx
  import React from 'react';
  
  class Hello extends React.Component {
    constructor(props) { // [!code ++]
      super(props); // [!code ++]
      this.handleClick = this.handleClick.bind(this); // [!code ++]
    } // [!code ++]
  
    handleClick() {
      console.log(this);
    }
  
    render() {
      return (<button onClick={this.handleClick}>Test</button>);
    }
  }
  export default Hello;
  ```
