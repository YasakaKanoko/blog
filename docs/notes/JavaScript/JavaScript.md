# <samp>JavaScript</samp>

[[TOC]]

## <samp>DOM</samp>

<samp>**文档对象模型** ( DOM，Document Object Model ) 是一个应用变成接口 ( API )，在 HTML 中使用扩展的 XML；DOM 将整个页面抽象为一组分层节点。HTML 或 XML 每个组成部分都是一种节点，包含不同的数据</samp>

```html
<html>
  <head>
    <titl>Sample Page</titl>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

<samp>DOM 可以生成一组分层节点</samp>

```
html
├─ head
|   └─ title
|  		└─ Sample Page
└─ body
    └─ p
	  	└─ Hello World!
```

<samp>通过 DOM API 添加、删除、替换、修改节点</samp>





<samp>**标识符**：变量、函数、属性或参数名</samp>

<samp>**规则**</samp>

- <samp>字母、数字、下划线 ( `_` ) 和美元符号 ( `$` )</samp>

- <samp>区分大小写</samp>
- <samp>首字符不能是数字</samp>
- <samp>"字母" 不只是英文字母，可以是扩展 ASCII 字符和 Unicode 字符（不推荐）</samp>

- <samp>其余位字符可以是数字</samp>

<samp><b>注释</b></samp>

- <samp>`// 单行注释`</samp>
- <samp>`/* 多行注释 */`</samp>

## <samp>严格模式</samp>

<samp>严格模式是 ES5 添加的一种执行模式，ES3 的一些不规范的写法在这种模式下会被处理，对于不安全的操作将会**抛出错误**</samp>

<samp>**启用严格模式**：就在脚本开头加上一个裸的字符串</samp>

```js
"use strict";
```

<samp>也可以单独指定一个函数使用严格模式执行，只需要在函数作用域开头加上该字符串</samp>

## <samp>关键字/保留字</samp>

<samp>ES5 关键字：`break`、`do`、`in`、`typeof`、`case`、`else`、`instanceof`、`var`、`catch`、`export`、`new`、`void`、`class`、`extends`、`return`、`while`、`const`、`finally`、`super`、`with`、`continue`、`for`、`switch`、`yield`、`debugger`、`function`、`this`、`default`、`if`、`throw`、`delete`、`import`、`try`</samp>

<samp>ES5 保留字</samp>

- <samp>始终保留：`enum`</samp>

- <samp>严格模式下保留：`implements`、`package`、`public`、`interface`、`protected`、`static`、`let`、`private`</samp>

- <samp>模块代码中保留：`await`</samp>

## <samp>变量声明</samp>

<samp>JS 变量是弱类型，可以用于保存任意类型的数据</samp>

<samp>声明变量有 `var`、`let`、`const` 三种方式</samp>

<samp>变量应在声明时初始化，未经初始化的变量值都是 `undefined`</samp>

### <samp>var</samp>

<samp>`var` 具有函数作用域和全局作用域</samp>

> <samp>函数作用域：函数内使用 `var` 声明的变量无法在函数外使用</samp>
>
> <samp>全局作用域：全局作用域内声明的 `var` 变量**会提升为 `window` 的属性**</samp>

<samp>**变量提升**：把声明提升到函数作用域 ( 全局作用域 ) 顶部</samp>

- <samp>可以在声明前使用，值为 `undefined`</samp>

- <samp>允许重复声明，每次会当作普通赋值语句处理</samp>

### <samp>let</samp>

<samp>`let` 与 `var` 的区别</samp>

- <samp>`let` 具有块级作用域</samp>

- <samp>`let` 声明不会被提升</samp>

  > [!TIP]
  >
  > <samp>**暂时性死区 ( TDZ )**：在 `let` 或 `const` 声明前的区域称为**暂时性死区**</samp>
  >
  > <samp>`let` 与 `const` 实际上有提升，因为变量在暂时性死区，在提升时不会进行默认初始化，使得其无法访问</samp>
  >
  > <samp>参考：[在 JavaScript 中使用 `let` 和 `const` 提升](https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/)</samp>

- <samp>全局作用域中使用 `let` 声明的变量不会成为 `window` 的属性</samp>

### <samp>const</samp>

<samp>`const` 与 `let` 大部分行为相同，不同之处在于 `const` 必须在声明时初始化值，无法重新赋值</samp>

> [!NOTE]
>
> <samp>如果 `const` 指向引用值，可以修改引用对象的内容，只是不能再引用其他对象</samp>

<samp>`const` 变量适用于 `for` 循环中迭代一个不准备改变的量</samp>

```ts
let array: number[] = [1, 2, 3, 4, 5];
for (const item of array) {
  console.log(item);
}
```

## <samp>数据类型</samp>

### <samp>原始类型</samp>

<samp>JS 有 7 种简单数据类型</samp>

- `Undefined`
- `Null`
- `Boolean`
- `Number`
- `String`
- `Symbol`
- `BigInt`

<samp>其中，`Symbol` 是符号类型 ( ES6 新增  )，`BigInt` 是大整数类型 ( ES10 新增 )</samp>

#### <samp>undefined</samp>

<samp>`undefined` 会被解释为一个假值，变量声明未赋值默认为 `undefined`</samp>

> [!NOTE]
>
> - <samp>未声明的变量和声明未赋值的变量是不同的，前者使用会报错，后者使用不会报错只是值为 `undefined`</samp>
> - <samp>未声明的变量和声明未赋值的变量在使用 `typeof` 时都会返回 `"undefined"`</samp>

#### <samp>null</samp>

<samp>`null` 是一个假值，表示一个空对象指针，如果初始化变量时，建议使用 `null` 作为初始值</samp>

#### <samp>boolean</samp>

<samp>Boolean 表示 `true` 和 `false`</samp>

<samp>`Boolean()` 函数：将其他值转换为布尔值</samp>

- <samp>布尔值：原样返回</samp>
- <samp>字符串：空字符串为 `false`，其余为 `true`</samp>
- <samp>数值：`0`、`NaN` 为 `false`，其余为 `true`</samp>
- <samp>对象：`null` 为 `false`，其余为 `true`</samp>
- <samp>`undefined`：始终为 `false`</samp>

#### <samp>number</samp>

<samp>Number 类型使用 IEEE 754 标准保存整数和小数</samp>

- <samp>十进制</samp>

- <samp>八进制：(严格模式下不支持)，以 `0` 开头</samp>

- <samp>十六进制：以 `0x` 开头</samp>

- <samp>浮点数：支持科学计数法</samp>

<samp>Number 的范围</samp>

- <samp>`Number.MAX_VALUE`：1.7976931348623157e+308</samp>
- <samp>`Number.MIN_VALUE`：5e-324</samp>

<samp>如果超出该范围，会存储为正无穷 ( `Infinity` ) 或负无穷 ( `-Infinity` )</samp>

<samp>`isFinite()`：判断是否在范围内，`false` 表示为无穷值，`true` 表示仍在范围内</samp>

<samp>`NaN`：特殊的数值</samp>

- <samp>使用 `0` 除 `0` 返回 `NaN`，使用其他数值除 `0` 的值为无穷</samp>
- <samp>`NaN` 参与运算的结果是 `NaN`</samp>
- <samp>`NaN` 不等于任何值，包括它自身</samp>
- <samp>`isNaN()`：非数值都会返回 `true`</samp>

#### <samp>string</samp>

<samp>字符串包含单引号、双引号、反引号</samp>

<samp>**转义字符**</samp>

- <samp>`\n` ：换行</samp>
- <samp>`\t` ：制表</samp>
- <samp>`\b` ：退格</samp>
- <samp>`\r` ：回车</samp>
- <samp>`\f` ：换页</samp>
- <samp>`\\` ：反斜杠</samp>
- <samp>`\'` ：单引号</samp>
- <samp>`\"` ：双引号</samp>
- <samp><code>\\`</code> ：反引号</samp>
- <samp>`\xnn` ：以十六进制编码的字符</samp>
- <samp>`\unnnn` ：以十六进制编码的 Unicode 字符</samp>

> [!NOTE]
>
> - <samp>字符串是不可变类型</samp>
> - <samp>`toString()`：其他值转字符串形式</samp>
>   - <samp>如果值有 `toString()` 方法，就调用该方法</samp>
>   - <samp>如果值为 `null`，就返回 `null`</samp>
>   - <samp>如果值为 `undefined`，就返回 `undefined`</samp>


<samp><b>模板字符串</b></samp>

- <samp>使用反引号表示</samp>

- <samp>保留字符串中的换行</samp>

- <samp>插值语法：使用 `${内容}` 的格式进行字符串内插值，插值的内容可以是任意 JS 表达式，并最终会将运算结果使用`String()` 转型函数转换为字符串拼接进字符串</samp>

- <samp>插值语法支持标签函数，标签函数看起来只是一个普通的函数，但它可以接收模板字符串形成的参数，通过返回的字符串来定义模板字符串最终形成的结果字符串，实现自定义行为，使用时只需要把标签函数作为模板字符串的修饰符</samp>

  ```js
  function x2Tag(strings, ...expressions) {
    console.log(strings); // ['', ' + ', ' = ', '']
    console.log(expressions); // [1, 2, 3]
    let e = expressions.map((val) => val * 2);
    let r = strings[0];
    for (let i = 0; i < e.length; ++i) {
      r += e[i] + strings[i + 1];
    }
    return r;
  }
  let s = x2Tag`${1} + ${2} = ${1 + 2}`;
  console.log(s); // 2 + 4 = 6
  ```

- <samp>模板字符串还支持原始字符串，实际上就是使用了内置的标签函数，使得各种转义字符不进行转义</samp>

  ```js
  let s1 = `\n\t\u00A9`;
  let s2 = String.raw`\n\t\u00A9`;
  console.log(s1); //  	©
  console.log(s2); // \n\t\u00A9
  ```

#### <samp>Symbol</samp>

<samp>**符号**：符号是原始值，符号实例是唯一的、不可变的。</samp>

<samp>符号的作用是确保对象属性使用唯一标识符，不会发生属性冲突的风险</samp>

<samp>**创建符号**</samp>

```js
let sym = Symbol();
```

<samp>需要注意的是：`Symbol()` 函数不能作为构造函数通过 `new` 关键字调用，因为符号类型是一个原始值；`new` 用于创建包装类对象，这与设计初衷不符，可以使用 `Object()` 转型为对象</samp>

<samp>创建符号时，可以传入一组字符串作为参数，但是该字符串本身没有任何作用，仅为调试参数</samp>

```js
let sym1 = Symbol('sym');
let sym2 = Symbol('sym');
console.log(sym1 === sym2); // false
```

<samp>**全局符号注册表**</samp>

<samp>为了更好管理和重用符号，可以使用全局符号注册表，将符号注册到注册表中</samp>

<samp>`Symbol.for()`：需要一个字符串作为键，如果该键存在，说明符号已注册，直接返回该键对应的符号；如果不存在，创建一个新符号并在全局注册表中注册</samp>

<samp>`Symbol.keyFor()`：查询某个符号在注册表中对应的键</samp>

```js
let a1 = Symbol.for('a');
let a2 = Symbol.for('a');
let b = Symbol.for('b');

console.log(Symbol.keyFor(b)); // b
console.log(a1 === a2); // true
console.log(Symbol.keyFor(a1) === Symbol.keyFor(a2)); // true
```

<samp>**符号的应用**：作为对象属性的键，在使用符号作为字面量对象属性名时只能使用计算属性的语法</samp>

<samp>`Object.getOwnPropertyNames(obj)`：返回对象的普通属性</samp>

<samp>`Object.getOwnPropertySymbols(obj)`：返回对象的符号属性的值</samp>

<samp>`Object.getOwnPropertyDescriptors(obj)`：返回两种属性的描述对象 ( 包含四个属性的配置项 ) 所构成的对象</samp>

```js
let a = Symbol('a');
let b = Symbol('b');

let obj = {
  [a]: 'a val',
  [b]: 'v val',
  a: 'a',
  b: 'b'
};

console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(a), Symbol(b) ]
console.log(Object.getOwnPropertyDescriptors(obj));
/*
{
  a: { value: 'a', writable: true, enumerable: true, configurable: true },
  b: { value: 'b', writable: true, enumerable: true, configurable: true },
  [Symbol(a)]: {
    value: 'a val',
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol(b)]: {
    value: 'v val',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

<samp><b>常用内置符号</b></samp>

- `Symbol.asyncIterator`
- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.match`
- `Symbol.replace`
- `Symbol.search`
- `Symbol.species`
- `Symbol.split`
- `Symbol.toPrimitive`
- `Symbol.toStringTag`
- `Symbol.unscopables`

### <samp>引用类型</samp>

<samp>引用类型：只有 `Object` 一种，是一个**无序键值对的集合**</samp>

#### <samp>Object</samp>

<samp>`Object` 类型是一组属性和方法的集合</samp>

<samp>可以通过 `Object` 类型的实例创建对象，然后给对象添加属性和方法</samp>

```js
let obj = new Object();

// 无参时可省略括号, 不推荐使用
let obj = new Object;
```

<samp>**方法**</samp>

- <samp>`constructor()`：创建当前对象的函数</samp>
- <samp>`hasOwnProperty()`：判断当前对象实例上是否存在给定的属性</samp>
- <samp>`isPrototypeOf()`：判断当前对象是否为另一个对象的原型</samp>
- <samp>`propertyIsEnumerable()`：判断给定的属性是否可以使用 `for-in` 语句枚举</samp>
- <samp>`toLocaleString()`：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境</samp>
- <samp>`toString()`：返回对象的字符串表示</samp>
- <samp>`valueOf()`：返回对象对应的字符串、数值或布尔值表示。通常与 `toString()` 的返回值相同</samp>

### <samp>typeof</samp>

<samp>`typeof` ：用来确定一个值的类型</samp>

- `"undefined"`
- `"boolean"`
- `"string"`
- `"number"`
- `"symbol"`
- `"bigint"`
- `"object"`
- `"function"`

<samp>**注意**：`typeof` 操作符对 `null` 返回 `"object"` ，因为 `null` 值被认为是一个类似于 C 语言中空指针的东西</samp>

> <samp>这是一个历史遗留问题，因为兼容性被保留下来了</samp>

## <samp>运算符</samp>

### <samp>一元运算符</samp>

<samp>一元操作符：只有一个操作数的运算符。包含自增、自减、正、负</samp>

<samp>自增、自减操作符与 C 语言中的自增自减操作符的行为完全相同，但对于非数值类型会进行隐式转换为数值之后再自增自减操作</samp>

<samp>一元正、负操作符：如果它是数值，则直接生效，如果它是其他值，则进行隐式类型转换之后再运算</samp>

> <samp>自增自减操作符和一元加减操作符返回的**永远是个数值类型的结果**</samp>
>
> <samp>隐式类型转换都是使用转型函数来进行的，即 `Number()`</samp>

### <samp>位运算符</samp>





## <samp>语句</samp>

## <samp>函数</samp>

## <samp>值、作用域与内存</samp>

## <samp>引用类型</samp>

## <samp>集合引用类型</samp>

## <samp>迭代器与生成器</samp>

## <samp>面向对象</samp>

## <samp>代理与反射</samp>

## <samp>异步</samp>

### <samp>同步与异步</samp>

<samp>同步：程序执行的每一步，都可以推断出程序的状态。后面的指令总是在前面的指令完成后才会执行</samp>

<samp>异步：部分任务处于独立运行的状态，异步是以无法预知的进度推进的，只有在异步任务完成时想办法通知主程序</samp>

### <samp>回调函数模式</samp>

<samp>早期 JavaScript 使用回调函数的形式处理异步任务，串联多个异步操作需要深度嵌套的回调函数 ( 称 " 回调地狱 " )</samp>

```ts
function double(value: number) {
  setTimeout(() => {
    setTimeout(console.log, 0, value);
  }, 1000);
}
double(2); // 1000ms后输出2
```

- <samp>`double` 函数设定了一个计时器，它将在 1000 毫秒之后将一个任务推到任务队列上，这个任务的执行是独立的</samp>
- <samp>`double` 在完成了任务调度 ( 将任务推到队列上 ) 之后会立即返回，异步任务的执行与它无关了</samp>

<samp>**异步函数的返回值**：通过回调函数的形式处理异步的返回值</samp>

```ts
function double(value: number, callback: (value: number) => void) {
  setTimeout(() => {
    callback(value * 2)
  }, 1000);
}
function callback(value: number) {
  console.log(value)
}
double(2, callback);
```

<samp>**失败处理**：如果处理时发生错误，需要准备一个回调函数处理失败</samp>

```ts
function double(value: any, resolve: (value: number) => void, reject: (error: unknown) => void) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw new Error('Input is not a number');
      }
      resolve(value * 2);
    } catch (e) {
      reject(e);
    }
  }, 1000);
}
function resolve(value: number) {
  console.log(value);
}
function reject(error: any) {
  console.log(error);
}
double(2, resolve, reject); // 4
double("2", resolve, reject); // error: Input is not a number

```

<samp>**嵌套异步回调**：如果一个异步返回值又依赖另一个异步返回值，就需要嵌套异步回调来处理</samp>

<samp>这意味着得到异步的结果后，还需要对获得的结果再进行一次请求异步操作，这样会导致 " 回调地狱 "</samp>

```ts
function resolve(value: number) {
  double(value, (x) => console.log("Success:", x));
}
```

## <samp>ES2018 和 ES2019</samp>

<samp>ES2018 于 2018 年 1 月完成，主要增加了异步迭代、剩余和扩展操作符、正则表达式和期约等特性</samp>

### <samp>异步迭代</samp>

<samp>异步执行用于释放对执行线程的控制以执行慢回收操作和收回控制，而迭代器协议则涉及为任意对象定义规范顺序</samp>

<samp>异步迭代对两个概念逻辑上统一</samp>

<samp>**同步迭代器**在每次调用 `next()` 时都会返回 `{ value, done }` 对象，这需要确定这个对象内容的计算和资源获取在 `next()` 调用退出时必须完成，否则值将无法确定；使用同步迭代器迭代异步确定的值时，主线程会阻塞，以等待异步操作完成</samp>

<samp>**异步迭代器**会在每次调用 `next()` 时提供解决为 `{ value, done }` 对象的期约。执行线程可以释放并在当前这步循环完成之前执行其他任务</samp>

### <samp>创建异步迭代器</samp>

<samp>同步迭代器：下列函数定义一个简单的 `Emitter` 类，该类包含一个同步生成器函数，该函数产生一个，同步输出：0-4</samp>

```js
class Emitter {
  constructor(max) {
    this.max = max;
    this.syncIdx = 0;
  }
  *[Symbol.iterator]() {
    while (this.syncIdx < this.max) {
      yield this.syncIdx++;
    }
  }
}

const emitter = new Emitter(5);

function syncCount() {
  const syncCounter = emitter[Symbol.iterator]();

  for (const x of syncCounter) {
    console.log(x);
  }
}
syncCount();
// 0
// 1
// 2
// 3
// 4
```

<samp>以上之所以运行起来，因为迭代器可以立即产生下一个值，假如不想在确定下一个产生的值时阻塞主线程执行，也可以定义异步迭代器函数，让它产生期约包装的值</samp>

<samp>`Symbol.asyncIterator`：定义和调用输出期约的生成器函数。新增 `for-await-of` 循环，用于异步迭代器</samp>

```js
```

