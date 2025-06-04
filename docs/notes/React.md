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

  ::: details <samp>如：`div`；如果不需要多余的 `div`，可以使用 `Fragment` 片段，简写：`<></>`</samp>

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

  ::: details <samp>如：模板字符串、函数返回值、三元运算符</samp>

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

  ::: details <samp>双大括号：`style` 样式需要通过大括号包裹</samp>

  ```jsx
  <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
  </ul>
  ```

  :::

- <samp>JSX 的注释写在花括号中</samp>

- <samp>数组自动展开</samp>

  ::: details <samp>展开数组</samp>

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

  - <samp>姓名: 张三, 年龄: 18</samp>
  - <samp>姓名: 李四, 年龄: 19</samp>
  - <samp>姓名: 王五, 年龄: 20</samp>

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

::: code-group

```jsx[函数组件]
export default function Hello() {
  return (<>
    <h1>Hello World!</h1>
  </>);
}
```

```jsx[类组件]
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

### <samp>事件</samp>

<samp>**事件**：React 允许在 JSX 中添加事件处理函数，通常在**点击**、**悬停**、**聚焦表单输入**等交互时触发</samp>

- <samp>**事件对象**：React 事件处理函数，传入的事件对象 `e` ，是一个合成事件对象</samp>

  ```jsx
  <button onClick={function handleClick(e) {
    console.log(e);
  }}> 按钮</button >
  ```

- <samp>**原生事件对象**：通过 `e.nativeEvent` 访问</samp>

<samp>**点击事件**：通过 `onClick()` 绑定事件</samp>

::: code-group

```jsx[函数组件]
export default function Hello() {
  function handleClick() {
    console.log('按钮被点击了');
  }
  return (<button onClick={handleClick}>按钮</button>);
}
```

```jsx[类组件]
import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    console.log('Hello World!');
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>按钮</button>
    );
  }
}
export default Button;
```

:::

<samp>**事件处理函数传参**</samp>

- <samp>**类组件**：箭头函数和 `bind()` 实现</samp>
- <samp>**函数组件**：箭头函数</samp>

::: code-group

```jsx[函数组件]
export default function Button() {
  function handleClick(str, e) {
    console.log(str);
    e.preventDefault();
  }
  return (<button onClick={(e) => handleClick('Hello', e)}>按钮</button>);
}
```

```jsx[类组件]
import React from 'react';

class Button extends React.Component {
  handleClick = (str, e) => {
    console.log(str);
    e.preventDefault();
  }
  
  render() {
    return (<button onClick={(e) => this.handleClick('按钮被点击了', e)}>按钮</button>);
    // bind()形式
    // return (<button onClick={this.handleClick.bind(this, '按钮被点击了')}>按钮</button>); 
  }
}
export default Button;
```

:::

> <samp>**事件处理函数**通常使用 `handle` 开头，后接事件名称的形式命名</samp>

<samp>**事件默认行为**：在 React 中，不能通过 `return false;` 方式阻止事件的默认行为，必须通过显式地调用 `e.preventDefault`</samp>

::: code-group

```HTML
<a href="https://www.google.com/" onclick="return false;">this is a test</a>
```

```JSX
<a href="https://www.google.com/" onClick={(e) => {
  e.preventDefault();
}}>this is a test</a>;
```

:::

#### <samp>this</samp>

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

### <samp>state</samp>

#### <samp>setState</samp>

<samp>在**类组件**中有两种描述状态的方式</samp>

::: code-group

```jsx[constructor]
import React from 'react';

class Hello extends React.Component {

  constructor() {
    super();
    this.state = {
      num: 1
    };
  }

  render() {
    return (<>{this.state.num}</>);
  }
}

export default Hello;
```

```jsx[ES6]
import React from 'react';

class Button extends React.Component {

  state = {
    num: 1
  };

  render() {
    return (<>{ this.state.num }</>);
  }
}

export default Button;
```

:::

> [!NOTE] <samp>注意</samp>
>
> - <samp>不要直接修改 `state`</samp>
>
>   ::: details <samp>`state` 是存储在一个对象中的，直接修改可能不会触发重新渲染，而是使用 `setState()`</samp>
>
>   ```jsx
>   return (<>
>     {this.state.num}
>   	{/* [!code --] */} 
>     <button onClick={() => { this.state.num++; }}>num++</button >
>   	{/* [!code ++] */} 
>     <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>num++</button >
>   </>);
>   ```
>
>   :::
>
> - <samp>`state` 的更新可能是异步的</samp>
>
>   ::: details <samp>出于性能考虑，React 会将多个 `setState()` 合并成一个调用</samp>
>
>   ```jsx
>   handleClick = () => {
>     this.setState({
>       num: this.state.num + 1 // [!code highlight] 2
>     });
>     this.setState({
>       num: this.state.num + 1 // [!code warning] 每次调用拿到的始终是初值
>     });
>       this.setState({
>       num: this.state.num + 1 // [!code warning] 每次调用拿到的始终是初值
>     });
>   }
>   ```
>
>   :::
>
> - <samp>如果状态改变的代码**在某个事件中**，则是**异步**的，否则是同步的</samp>
>
>   ```jsx
>   handleClick = () => {
>     this.setState({
>       num: this.state.num + 1 // 2
>     });
>     console.log(this.state.num); // 1
>   }
>   ```

::: tip <samp>如何获取 `setState` 执行后的数据</samp>

- <samp>提前使用一个变量存储计算的结果</samp>

  ```jsx
  handleClick = () => {
    let newNum = this.state.num + 1;
    this.setState = ({
      num: newNum
    });
    console.log(newNum);
  }
  ```

- <samp>使用 `setState` 的第二个参数，这个参数是一个回调函数，将在 `setState` 更新后调用</samp>

  ```jsx
  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    }, () => {
      console.log(this.state.num);
    });
  }
  ```

:::

::: tip

- <samp>把所有的 `setState` 当作是异步的；不要相信调用后的状态</samp>

- <samp>如果使用改变后的状态，则使用回调函数</samp>

- <samp>`setState` 的接收不再是对象，而是一个函数，函数的返回值返回一个对象</samp>

  ```jsx
  handleClick = () => {
    this.setState((cur, props) => ({
      num: cur.num + 1  // 2
    }), () => {
      console.log(this.state.num); // [!code warning] 4 React会对异步的setState进行合并, 再触发render 
    })
    this.setState((cur, props) => ({
      num: cur.num + 1  // 3
    }))
    this.setState((cur, props) => ({
      num: cur.num + 1  // 4
    }))
  }
  ```

:::

#### <samp>useState</samp>

<samp>`useState` Hook 跟踪字符串、数字、布尔、数组、对象以及组合</samp>

- <samp>state：保存渲染的数据</samp>
- <samp>State setter 函数：更新变量触发重新渲染</samp>

```jsx
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  return (<>
    {index}
    <button onClick={handleClick}>按钮</button>
  </>)
}
```

### <samp>props</samp>

<samp>React 中的组件存在层级关系</samp>

- <samp>`props`：如果父组件向子组件中传递数据</samp>

  ::: code-group

  ```jsx[App.jsx]
  import Hello from './components/Hello';
  import World from './components/World';
  
  export default function App() {
    const msg = 'data from App Component';
    
    const handleClick = () => {
      console.log('App Button clicked');
    };
  
    return (<>
      <Hello data={msg} onClick={handleClick} />
      <World data={msg} onClick={handleClick} />
    </>)
  }
  ```

  ```jsx[Hello.jsx]
  import { Component } from 'react'
  
  export default class Hello extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <>
          <p>{this.props.data}</p>
          <button onClick={this.props.onClick}>按钮</button>
        </>
      );
    }
  }
  ```

  ```jsx[World.jsx]
  export default function World(props) {
    const { data, onClick } = props;
  
    return (
      <>
        <p>{data}</p>
        <button onClick={onClick}>按钮</button>
      </>
    );
  }
  ```

  :::

- <samp>通过 `props.children` 可以实现类似 vue slot 功能</samp>

  ::: code-group

  ```jsx[App.jsx]
  import Button from './components/Button'
  
  export default function App() {
  
    return (<>
      <Button>添加按钮</Button>
    </>)
  }
  ```

  ```jsx[Button.jsx]
  export default function Button(props) {
    return (
      <button>{props.children}</button>
    )
  }
  ```

  :::

- <samp>其他数据</samp>

  ::: code-group

  ```jsx[App.jsx]
  import Button from './components/Button'
  
  export default function App() {
  
    return (<>
      <Button name="Jolyne" age={18} isNum={true}>添加按钮</Button>
    </>)
  }
  ```

  ```jsx[Button.jsx]
  export default function Button(props) {
    return (
      <>
        <ul>
          <li>{props.name}</li>
          <li>{props.age}</li>
          <li>{props.isNum}</li>   {/* [!code warning] 布尔值不显示 */}
        </ul>
        <button>{props.children}</button>
      </>
    )
  }
  ```

  :::

#### <samp>参数默认值</samp>

<samp>在函数组件中，使用 ES6 的参数解构</samp>

<samp>在类组件中，使用 `defaultProps` 属性</samp>

::: code-group

```jsx[App.jsx]
import Hello from './components/Hello';
import World from './components/World';

export default function App() {

  return (<>
    <Hello />
    <Hello name='Gwen' age={18} />
    <World />
    <World name='Jolyne' age={18} />
  </>)
}
```

```jsx[Hello.jsx]
import { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age } = this.props;
    return (<>
      <div>
        <p>姓名: {name}</p>
        <p>年龄: {age}</p>
      </div>
    </>);
  }
}

Hello.defaultProps = {
  name: 'Hello',
  age: 22
};
```

```jsx[World.jsx]
export default function World({
  name = "World",
  age = 22
}) {

  return (<>
    <div>
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
    </div>
  </>);
}
```

:::

#### <samp>[状态提升](https://zh-hans.react.dev/learn/sharing-state-between-components)</samp>

<samp>通过 `props` 实现类似 vue 的 `$emit` ，多个组件反应相同的状态变化，将多个共享状态提升到最近的父组件</samp>

::: code-group

```jsx[App.jsx]
import Hello from './components/Hello'
import Panel from './components/Panel'

export default function App() {
  function handleClick(str, num) {
    console.log(`来自${str}的数据`, num);
  }
  
  return (<>
    <Hello title="Hello 组件" handleClick={handleClick} />
    <Panel title="Panel 组件" handleClick={handleClick} />
  </>)
}
```

```jsx[Panel.jsx]
export default function Panel({ title, handleClick }) {

  const panelClick = () => {
    handleClick('Panel', 3);
  }
  
  return (<>
    <button onClick={panelClick}>{title}</button>
  </>);
}
```

```jsx[Hello.jsx]
import { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props);
  }
  
  helloClick = () => {
    this.props.handleClick('Hello', 4);
  }

  render() {
    const { title } = this.props;
    
    return (<>
      <button onClick={this.helloClick}>{title}</button>
    </>);
  }
}
```

:::

