# <samp>JavaScript</samp>

[[TOC]]

<samp>如果是浏览器环境，提供的额外 API 可以分成三大类</samp>

- <samp>浏览器控制类：操作浏览器</samp>
- <samp>DOM 类：操作网页的各种元素</samp>
- <samp>Web 类：实现互联网的各种功能</samp>

<samp>如果宿主环境是服务器，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API 等等</samp>

## <samp>语法</samp>

## <samp>语句</samp>

<samp>语句(statement)是为了完成某种任务而进行的操作</samp>

- <samp>语句以分号结尾，一个分号就表示一个语句结束</samp>
- <samp>多个语句可以写在一行内</samp>

- <samp>没有任何内容的语句，JavaScript 引擎将其视为空语句</samp>

<samp>表达式(expression)，指一个为了得到返回值的计算式</samp>

- <samp>表达式需要返回值</samp>
- <samp>表达式不需要分号结尾</samp>

### <samp>变量</samp>

<samp>变量，是对值的命名存储</samp>

- <samp>变量名区分大小写</samp>

- <samp>变量的声明和赋值</samp>

  > <samp>如果只声明未赋值，变量的值为 `undefined`</samp>
  >
  > <samp>如果未声明直接使用，会报错 ReferenceError: x is not defined</samp>

- <samp>可以在同一条 `var` 命令中声明多个变量</samp>

#### <samp>变量提升</samp>

<samp>JavaScript 引擎的工作方式：先解析代码，获取所有被声明的变量，再一行一行地运行；所有的变量的声明语句，都会被提升到代码的头部，这被叫做"变量提升(hoisting)"</samp>

```js
console.log(a);
var a = 1;
```

<samp>这样的行为，不会报错，因为变量提升了</samp>

```js
var a;
console.log(a); // undefined
a = 1;
```

### <samp>标识符</samp>

<samp>标识符(identifier)指的是用来识别各种值的合法名称。最常见的标识符就是变量名，函数名</samp>

<samp>命名规则</samp>

- <samp>大小写敏感</samp>

- <samp>首字符非数字；可以是任意 Unicode 字母(英文其他语言字母)、美元 (`$`) 和下划线(`_`)</samp>

- <samp>第二个字符及其之后的字符，任意 Unicode 字母(英文其他语言字母)、美元 (`$`) 和下划线(`_`)</samp>

  - <samp>不能是保留字</samp>

    ::: details <samp>保留字</samp>

    <samp>`arguments`、`break`、`case`、`catch`、`class`、`const`、`continue`、`debugger`、`default`、`delete`、`do`、`else`、`enum`、`eval`、`export`、`extends`、`false`、`finally`、`for`、`function`、`if`、`implements`、`import`、`in`、`instanceof`、`interface`、`let`、`new`、`null`、`package`、`private`、`protected`、`public`、`return`、`static`、`super`、`switch`、`this`、`throw`、`true`、`try`、`typeof`、`var`、`void`、`while`、`with`、`yield`</samp>

    :::

### <samp>注释</samp>

- <samp>`// 单行注释`</samp>
- <samp>`/* 多行注释 */`</samp>

<samp>在历史上，JavaScript 兼容 HTML 注释(`<!-- HTML注释 -->`)</samp>

> [!NOTE]
>
> <samp>只有在行首时，才会被当作单行注释</samp>
>
> ```js
> function countdown(n) {
>   while(n --> 0) console.log(n);
> }
> countdown(3);
> // 2
> // 1
> // 0
> ```
>
> <samp>`n --> 0` 会被当作 `n-- > 0`</samp>

### <samp>区块</samp>

<samp>区块(block)：使用大括号，将多个相关的语句组合在一起</samp>
