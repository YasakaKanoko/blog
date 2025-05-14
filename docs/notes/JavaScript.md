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

<samp>对于 `var` 而言，JavaScript 区块不构成单独作用域</samp>

<samp>**区块往往用来构成其他更复杂的语法结构**：`for`、`if`、`while`、`function`</samp>

### <samp>条件语句</samp>

<samp>条件语句：只有满足预设条件，才会执行相应语句；JavaScript 提供 `if`、`switch` 结构</samp>

#### <samp>if</samp>

<samp>`if` 语句接受一个表达式，并将其进行隐式类型转换，得到一个布尔值，根据布尔值的真假决定是否执行后面的代码块</samp>

<samp>可以使用 `if-else`、`if-else-if` 构成分支语句</samp>

#### <samp>switch</samp>

<samp>JavaScript 的 `switch` 语句可以使用任何类型的变量作判断，同时 `case` 的值也可以使用任意的变量和表达式，而不需要一定是常量。</samp>

<samp>当多个 `if-else` 连用时，可以转为 `switch` 结构</samp>

```js
switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
    // ...
}
```

> [!NOTE]
>
> - <samp>`case` 如果没有 `break` 语句，会导致跳不出 `break` 结构，一直执行下去</samp>
> - <samp>与 `case` 比较运行结果时，采用的是严格相等运算符 (`===`)，这意味着比较时不会发生类型转换</samp>

#### <samp>三元运算符 ?:</samp>

<samp>`?:`：可用于逻辑判断</samp>

```pseudocode
(条件) ? 表达式1 : 表达式2
```

<samp>三元运算符被视作 `if-else` 的简写形式</samp>

```js
var even = (n % 2 === 0) ? true : false;

// 等同于
var even;
if (n % 2 === 0) {
  even = true;
} else {
  even = false;
}
```

### <samp>循环</samp>

#### <samp>while</samp>

<samp>`while` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块</samp>

<samp>`while` 语句的循环条件是一个表达式，必须放在圆括号中</samp>

```js
var i = 0;

while (i < 100) {
  console.log('i 当前为：' + i);
  i = i + 1;
}
```

#### <samp>for</samp>

<samp>`for` 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件</samp>

- <samp>初始化表达式(initialize)：确定循环变量的初始值，只在循环开始时执行一次</samp>
- <samp>条件表达式(test)：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环</samp>
- <samp>递增表达式(increment)：每轮循环的最后一个操作，通常用来递增循环变量</samp>

<samp>`for` 循环可以转换为 `while` 循环</samp>

```js
var x = 3;
for (var i = 0; i < x; i++) {
  console.log(i);
}

// 转换后
var x = 3;
var i = 0;

while (i < x) {
  console.log(i);
  i++;
}
```

<samp>for 循环的三个部分都可以省略，如果三个都省略就成了无限循环</samp>

```js
for ( ; ; ){
  console.log('Hello World');
}
```

#### <samp>do-while</samp>

<samp>`do-while` 和 `while` 区别在于：先运行一次循环体，再判断循环条件</samp>

<samp>**不管条件是否为真，循环至少执行一次**</samp>

```js
var x = 3;
var i = 0;

do {
  console.log(i);
  i++;
} while(i < x);
```

#### <samp>break 和 continue</samp>

<samp>`break` 语句和 `continue` 语句都具有跳转作用</samp>

- <samp>`break` 语句跳出循环</samp>

- <samp>`continue` 语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环</samp>

  ```js
  var i = 0;
  
  while (i < 100){
    i++;
    if (i % 2 === 0) continue;
    console.log('i 当前为：' + i);
  }
  ```

  

> <samp>如果存在多重循环，不带参数的 `break` 语句和 `continue` 语句都只针对最内层循环</samp>

#### <samp>label</samp>

<samp>JavaScript 允许语句前有 label，可用于跳转程序的任意位置</samp>

<samp>label 可以是任意标识符，但不能是保留字</samp>

<samp>标签通常配合 `break` 和 `continue` 一起使用，跳出特定循环</samp>

```js
top:
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break top;
    console.log('i=' + i + 'j=' + j);
  }
}
```

## <samp>数据类型</samp>

<samp>JavaScript 数据类型共有 8 种</samp>

- <samp>数值(number)：整数和浮点数</samp>
- <samp>字符串(string)：文本</samp>
- <samp>布尔值(boolean)：`true` 和 `false`</samp>
- <samp>Symbol：符号</samp>
- <samp>BigInt</samp>
- <samp>`undefined`：未定义</samp>
- <samp>`null`：空值，此处值为空</samp>
- <samp>`Object`：各种值组成的集合</samp>

<samp>分类：原始类型(primitive type)和合成类型(complex type)；其中，对象是合成类型，其他都是原始类型</samp>

<samp>对象可以分为三种类型</samp>

- <samp>狭义上的对象(object)</samp>
- <samp>数组(array)</samp>
- <samp>函数(function)</samp>

### <samp>typeof</samp>

<samp>JavaScript 判断值的类型有三种方式</samp>

- `typeof`
- `instanceof`
- `Object.prototype.toString`

<samp>关于 `typeof` 返回值</samp>

- <samp>数值：`"number"`</samp>
- <samp>字符串：`"string"`</samp>
- <samp>布尔值：`"boolean"`</samp>
- <samp>函数：`"function"`</samp>
- <samp>`undefined`：`"undefined"`</samp>
- <samp>对象：`"object"`</samp>
- <samp>数组：`"object"`</samp>
- <samp>`null`：`"object"`</samp>

### <samp>null 与 undefined</samp>

<samp>`null` 与 `undefined` 含义相似</samp>

- <samp>在 `if` 判断中，都为 `false`</samp>
- <samp>在相等运算符(`==`)中，两者相等</samp>
- <samp>`null` 转数值为 0，`undefined` 转数值为 `NaN`</samp>

<samp>返回 `null`</samp>

<samp>调用时，参数未设置任何值，可以传入 `null`，表示该参数为空</samp>

> <samp>某个函数接收引擎抛出的错误作为参数，如果运行中未出错，就传入 null，表示未发生错误</samp>

<samp>返回 `undefined`</samp>

- <samp>声明变量未赋值</samp>
- <samp>函数调用时，未提供参数</samp>
- <samp>未赋值的对象属性</samp>
- <samp>函数没有设置返回值，默认返回 `undefined`</samp>

### <samp>布尔值</samp>

<samp>返回布尔值的运算符</samp>

- <samp>前置逻辑运算符：`!`</samp>
- <samp>相等运算符：`===`、`!==`、`==`、`!=`</samp>
- <samp>比较运算符：`>`、`>=`、`<`、`<=`</samp>

<samp>转换规则</samp>

- <samp>`undefined`、`null`、`false`、`0`、`NaN`、`""` 和 `''` 为 `false`</samp> 

- <samp>其余为 `true`</samp>

  > <samp>空数组和空对象都为 `true`</samp>







## <samp>严格模式</samp>

<samp>使用严格模式，需要使用严格模式编译指示 ( pragma )，即一个不赋值给任何变量的字符串</samp>

```js
"use strict";
```

<samp>可以兼容不支持严格模式的 JavaScript ，支持严格模式的引擎会启用严格模式，不支持的引擎会将这个编译指示当成一个未赋值的字符串字面量</samp>

<samp>这个编译指示应用到全局作用域，函数外部，整个脚本会按照严格模式解析</samp>

```js
function doSomething() {
  "use strict";
}
```

### <samp>变量</samp>

- <samp>不允许意外创建全局变量</samp>

  ```js
  message = "Hello world!"; // [!code error] 抛出 ReferenceError 
  ```

- <samp>无法在变量上调用 `delete`</samp>

  ```js
  let color = 'red';
  delete color; // [!code error] 抛出 ReferenceError 
  ```

- <samp>增加了变量名的限制：不允许变量名为 `implements`、`interface`、`let`、`package`、`private`、`protected`、`public`、`static`、`yield` 保留字</samp>

### <samp>对象</samp>

- <samp>给只读属性赋值会抛出 `TypeError`</samp>

- <samp>在不可配置属性上使用 `delete` 会抛出 `TypeError`</samp>

- <samp>给不存在的对象添加属性会抛出 `TypeError`</samp>

- <samp>在使用对象字面量时，属性名必须唯一</samp>

  ```js
  let person = {
    name: "Nicholas",
    name: "Greg" // [!code error] SyntaxError
  };
  ```

  > [!NOTE]
  >
  > <samp>ECMAScript 6 删除了对重名属性的这个限制，即在严格模式下重复的对象字面量，属性键不会抛出错误</samp>

  

### <samp>函数</samp>

- <samp>函数参数必须唯一</samp>

  ```js
  function sum (num, num) { // [!code error] SyntaxError
  } // [!code error]
  ```

- <samp>`arguments` 和参数是独立的</samp>

  ```js{4-6}
  function showValue(value) {
    value = "Foo";
    console.log(value);
    console.log(arguments[0]);
    // 非严格模式: Foo
    // 严格模式: Hi
  }
  
  showValue("Hi");
  ```

- <samp>去除了 `arguments.callee` 和 `arguments.caller`</samp>

  ```js
  function factorial (num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * arguments.callee(num - 1);
    }
  }
  let result = factorial(5); // [!code error] TypeError
  ```

  

- <samp>限制函数命名：`implements`、`interface`、`let`、`package`、`private`、`protected`、`public`、`static`、`yield`</samp>

- <samp>不允许在 `if` 或 `catch` 进行函数声明，除非位于脚本或函数的顶级</samp>

  ```js
  if (true) {
    function doSomething() { // [!code error] Syntax Error
    }
  }
  ```

- <samp>ES6 增加了剩余参数、解构和默认参数，在 ES7 中要求使用这些参数，函数内部不能使用严格模式；全局严格模式依然可用</samp>

  ```js
  function foo(a, b, ...c) { // [!code error]
    "use strict";
  }
  ```

### <samp>eval()</samp>

<samp>`eval()` 不会在上下文中创建变量或函数</samp>

```js
function doSomething() {
  eval("let x = 10");
  console.log(x); // [!code error] ReferenceError
}
```

<samp>变量和函数在 eval() 中声明，位于代码执行期间的一个特殊作用域，执行完毕后销毁</samp>

```js
"use strict";
let result = eval("let x = 10, y = 11; x + y");
console.log(result); // [!code highlight] 21
```

### <samp>eval 和 arguments</samp>

<samp>严格模式不允许使用 `eval` 和 `arguments` 作为标识符和操作它们的值</samp>

- <samp>使用 `let` 声明</samp>

  ```js
  let eval = 10; // [!code error] SyntaxError
  let arguments = "Hello world!"; // [!code error] SyntaxError
  ```

- <samp>赋予其他值</samp>

- <samp>修改其包含的值，如：使用自增 ( `++` )</samp>

- <samp>用作函数名</samp>

- <samp>用作函数参数名</samp>

- <samp>在 `try/catch` 语句中作为异常名称</samp>

### <samp>this</samp>

<samp>在非严格模式下，`null` 或 `undefined` 会被强制转型为全局对象</samp>

<samp>在严格模式下，则使用以指定值作为 `this` 的值</samp>

```js
let color = "red";
function displayColor() {
  console.log(this.color);
}
// 非严格模式: 访问全局属性
// 严格模式: 抛出错误
displayColor.call(null);
```

<samp>函数将其 `this` 的值转型为一种对象类型的行为称为"装箱 ( boxing )"</samp>

::: code-group

```js
function foo() {
  console.log(this);
}
foo.call(); // Window {}
foo.call(2); // Number {2}
```

```js[严格模式]
function foo() {
  console.log(this);
}
foo.call(); // undefined
foo.call(2); // 2
```

:::

### <samp>类与模块</samp>

<samp>类和模块采用 ES6 新增代码容器特性，ES6 类和模块中定义的所有代码默认处于严格模式</samp>

<samp>类：类声明、类表达式、构造函数、实例方法、静态方法、获取方法、设置方法</samp>

<samp>模块：所有在模块内部定义的代码都处于严格模式</samp>

### <samp>其他</samp>

- <samp>消除 `with` 语句</samp>

  ```js
  with(location) { // [!code error] SyntaxError
    console.log(href);
  }
  ```

- <samp>去除了八进制字面量，前导 0 表示字面量无效</samp>

  ```js
  // 非严格模式: 8
  // 严格模式: SyntaxError
  let value = 010; // [!code error] 
  ```

- <samp>修改了非严格模式 `parseInt()` ，将八进制当作带有前导 0 的十进制字面量</samp>

  ```js
  // 非严格模式：值为 8
  // 严格模式：值为 10
  let value = parseInt("010"); 
  ```

