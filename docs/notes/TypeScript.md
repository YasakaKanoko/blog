# <samp>TypeScript</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

- <samp>**JS 动态类型在执行过程中**进行类型的匹配，JS 弱类型会在执行时进行隐式类型转换</samp>

- <samp>TS 是静态类型</samp>

  > [!Tip]
  >
  > <samp>如：Java、C/C++ 等是静态类型</samp>

  1. <samp>可读性强：基于语法解析 TSDoc, ide 增强</samp>

  2. <samp>可维护性强：**在编译阶段暴露大部分错误**</samp>

  3. <samp>大型项目中，可以获得更好的稳定性和开发效率</samp>

- <samp>TS 是 JS 超集</samp>

  1. <samp>兼容所有 JS 特性</samp>
  2. <samp>支持渐进式引入和升级</samp>

## <samp>编译器</samp>

<samp>想要运行 TypeScript 代码，就必须先转为 JavaScript ，这个代码的转换过程叫做"编译" ( Compile )</samp>

<samp>TypeScript 只提供编译器，编译时会将类型声明和相关的代码删除，不会改变 JavaScript 的运行结果</samp>

<samp>TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查</samp>

1. <samp>初始化项目</samp>

   ::: code-group

   ```sh[pnpm]
   # 初始化
   pnpm init
   ```

   ```sh[bun]
   bun init
   ```

   :::

2. <samp>`tsc`：安装类型编译器</samp>

   ```sh
   npm i -g typescript
   
   # 生成ts配置文件
   tsc --init
   ```

   ::: details <samp>参考：[tsconfig.json](https://www.typescriptlang.org/tsconfig/)</samp>

   ```js
   {
     // 编译选项
     "compilerOptions": {
       
       // 生成的JavaScript版本
       "target": "es2016",
       // 内部类型声明库, 不包含dom
       "lib": ["ES2016"],   
       // 模块
       "module": "commonjs",
       // 导出路径
       "outDir": "./dist",  
       // 改善CommonJS/ES模块互操作性
       "esModuleInterop": true,
       // 强制文件导入路径大小写一致
       "forceConsistentCasingInFileNames": true, 
       // 严格模式
       "strict": true, 
       // 跳过声明文件的类型检查, 提升编译速度
       "skipLibCheck": true
       
     },
     // 包含的目录
     "include": ["src"],
     // 排除的目录
     "exclude": ["node_modules"]
   }
   ```

   :::

3. <samp>依赖项</samp>

   ```sh[pnpm]
   # ts 官方类型库, 包含对 JS 代码的类型描述
   pnpm i -D @types/node
   
   # ts 执行引擎, 直接运行而无需编译
   pnpm i -D ts-node
   
   # 监听文件变化, 自动启动 node 程序
   pnpm i -D nodemon
   ```

   ::: code-group

   ```json[pnpm.package.json]
   {
     "scripts": {
       "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts"
     },
   }
   ```

   ```json[bun.package.json]
   "scripts": {
     "dev": "bun --hot run index.ts"
   },
   ```

   :::

## <samp>any</samp>

<samp>`any`：没有任何限制，可以被赋予任意类型</samp>

<samp>当变量类型设置为 `any` 时，TypeScript 会关闭这个变量的类型检查</samp>

::: info <samp>使用 `any` 的场景</samp>

1. <samp>关闭某些变量的类型检查，就可以设置为 `any`</samp>
2. <samp>为了适配老的 JavaScript ，让代码迅速迁移到 TypeScript</samp>
3. <samp>不希望对来自用户或第三方库的值进行类型检查</samp>

<samp>`any` 可以看作是所有其他类型的全集，TypeScript 将这种类型称为"顶层类型 ( top type )"</samp>

:::

### <samp>类型推断</samp>

<samp>如果开发时没有类型声明，TS 会自己推断类型</samp>

<samp>如果无法推断出具体类型，就将类型推断为 `any`</samp>

```ts
let foo = 123; // let foo: number
// 如果foo更改为其他类型, 与推断类型不一致, TypeScript会报错
foo = 'Hello'; // [!code error] 不能将类型“string”分配给类型“number”。
```

<samp>TypeScript 提供一个 `noImplicitAny` 选项，只要当类型推断为 `any` 时就报错</samp>

::: code-group

```shell[shell]
tsc --noImplicitAny index.ts
```

```json[tsconfig.json]
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

:::

### <samp>污染问题</samp>

<samp>`any` 类型可能污染其他变量，它可以赋值给任何类型的变量，导致其他变量出错</samp>

```ts
let x: any = 'hello';
let y: number;

y = x; // [!code highlight] 不报错
```

## <samp>unknown</samp>

<samp>`unknown`：表示类型不确定，可能是任意类型；(严格的 `any`)</samp>

<samp>`unknown` 和 `any` 的相似之处：所有类型的值都可以分配给 `unknown`</samp>

<samp>不同之处</samp>

- <samp>避免污染问题：`unknown` 类型的变量不能直接赋值给其他变量 (除了 `any` 和 `unknown`)</samp>

  ```ts
  let v1: unknown = 1;
  let v2: number = v1; // [!code error] 不能将类型“unknown”分配给类型“number”。
  ```

- <samp>不能直接调用 `unknown` 类型变量的方法和属性</samp>

  ```ts
  let v1: unknown = { foo: 123 };
  v1.foo  // [!code error] “v1”的类型为“未知”。
  
  let v2: unknown = 'hello';
  v2.trim() // [!code error] “v2”的类型为“未知”。
  
  let v3: unknown = (n = 0) => n + 1;
  v3() // [!code error] “v3”的类型为“未知”。
  ```

- <samp>`unknown` 类型能进行的运算是有限的，只能进行比较运算 (`==`, `===`, `!=`, `!==`, `||`, `&&`，`?`, `typeof`, `instanceof`)</samp>

  ```ts
  let a: unknown = 1;
  
  a + 1; // [!code error] “a”的类型为“未知”。
  
  ```

- <samp>类型缩小：缩小 `unknown` 变量类型范围，将一个不确定的类型缩小到一个明确的类型</samp>

  ```ts
  let a: unknown = 1;
  if (typeof a === 'number') {
    let r = a + 1; // [!code highlight]
  }
  ```

<samp>`unknown` 可以看作是更安全的 `any`。一般来说，凡是需要设为 `any` 类型的地方，通常都应该优先考虑设为 `unknown` 类型</samp>

## <samp>never</samp>

<samp>`never`："空类型"，不包含任何值</samp>

::: info <samp>使用场景</samp>

- <samp>不可能返回值的函数</samp>
- <samp>一个变量可能有多种类型 ( 即联合类型 )，排除所有可能之后，剩余的情况就是 `never`</samp>

:::

```ts
function fn(x: string | number) {
  if (typeof x === 'string') {
    // ...
  } else if (typeof x === 'number') {
    // ...
  } else {
    x; // [!code highlight] (parameter) x: never
  }
}
```

<samp>`never` 类型可以赋值给任意其他类型</samp>

```ts{4-7}
function f(): never {
  throw new Error('Error');
}
let v1: number = f();
let v2: string = f();
let v3: boolean = f();
let v4: never = f();
```

<samp>`f()` 函数用于抛出错误，所以返回值可以写作 `never`，即不返回任何值</samp>

::: info <samp>为什么 `never` 可以赋值给任意类型</samp>

- <samp>集合论：空集是任何集合的子集</samp>

- <samp>`never` 是任何其他类型共有的，TypeScript 称其为 " 底层类型 ( bottom type ) "</samp>

<samp>TypeScript 有两个"顶层类型 ( `any` 和 `unknown` )"，只有一个"底层类型 ( `never` )"</samp>

:::

## <samp>基本类型</samp>

<samp>TS 定义类型的方式：`let 变量名: 类型 = 值`</samp>

- <samp>`boolean`：包含 `true` 和 `false` 两个布尔值</samp>

- <samp>`string`：包含所有字符串 (普通字符串和模板字符串)</samp>

- <samp>`number`：包含所有整数、浮点数 (非十进制数也属于 `number`)</samp>

- <samp>`bigint`：包含所有大整数</samp>

  > [!CAUTION]
  >
  > - <samp>`bigint` 和 `number` 不兼容</samp>
  >
  > - <samp>`bigint` 是 ES2020 引入。TypeScript 的"编译选项" `target` 参数不能低于 `es2020`</samp>

- <samp>`symbol`：`Symbol()` 函数的返回值就是 `symbol` 类型</samp>

- <samp>`object`：包含所有对象、数组和函数</samp>

- <samp>`undefined`：表示未定义，即可表示类型，也可表示值</samp>

- <samp>`null`：表示为空，此处没有值</samp>

> [!NOTE]
>
> - <samp>首字母大写的 `Number`、`Boolean`、`String` 等是 JavaScript 内置对象，而不是类型名称</samp>
>
> - <samp>`undefined` 和 `null` 既可以作为值，也可以作为类型</samp>

```ts
// 字符串
const q: string = 'string';

// 数值
const w: number = 1;

// 布尔值
const e: boolean = true;

// null
const r: null = null;

// undefined
const t: undefined = undefined;
```

::: warning <samp>如果没有声明类型的变量，被赋值为 `undefined` 或 `null`，在关闭 `noImplicitAny` 和 `strictNullChecks` 时，类型将被推断为 `any`</samp>

```ts
let a = undefined; // any
let b = undefined; // any

let c = null; // any
let d = null; // any
```

:::

## <samp>包装对象类型</samp>

<samp>JavaScript 中的 5 种原始类型：`boolean`、`string`、`number`、`bigint`、`symbol`</samp>

<samp>5 种原始类型的值，都有对应的包装对象(wrapper object)</samp>

```ts
'hello'.charAt(1); // e
```

> <samp>字符串执行了 `charAt()` 方法。在 JavaScript 中，只有对象才有方法，原始类型的值本身没有方法，调用方法时，字符串自动转换为包装对象，`charAt()` 方法其实是定义在包装对象上</samp>

<samp>只有 `symbol` 和 `bigint` **无法直接获取它们的包装对象**，即 `Symbol()` 和 `BigInt()` 不能作为构造函数使用，剩下三种可以</samp>

```ts
const s = new String('Hello');
typeof s; // [!code highlight] 'object'
s.charAt(1); // 'e'
```

<samp>`s` 是字符串的包装对象，`typeof` 返回的是 `object` ，不是 `string`，但本质上还是字符串，可以使用字符串方法</samp>

> [!NOTE]
>
> <samp>`String()` 只有作为构造函数使用时(即带有 `new` 关键字调用)，才会返回包装对象；否则返回的是一个普通字符串；`Number()` 和 `Boolean()` 均如此</samp>

### <samp>包装对象和字面量</samp>

<samp>TypeScript 提供了大写和小写进行区分</samp>

- <samp>`Boolean` 和 `boolean`</samp>
- <samp>`String` 和 `string`</samp>
- <samp>`Number` 和 `number`</samp>
- <samp>`BigInt` 和 `bigint`</samp>
- <samp>`Symbol` 和 `symbol`</samp>

<samp>大写类型同时包含包装对象和字面量，小写类型只包含字面量</samp>

<samp>建议只使用小写类型，不使用大写类型；很多内置方法的参数，定义在小写类型中</samp>

```ts
const n1: number = 1;
const n2:Number = 1;

Math.abs(n1);
Math.abs(n2); // [!code error] 类型“Number”的参数不能赋给类型“number”的参数。“number”是基元，但“Number”是包装器对象。如可能首选使用“number”。
```

<samp>`Symbol()` 和 `BigInt()` 不能当作构造函数使用，无法获取 `symbol` 类型和 `bigint` 类型的包装对象</samp>

<samp>使用下面的写法获取包装对象。但是，它们没有使用场景</samp>

```ts
let a = Object(Symbol());
let b = Object(BigInt(1));
```

> [!NOTE]
>
> <samp>`symbol` 和 `Symbol` 两种写法没有差异；`bigint` 和 `BigInt` 也是如此，建议始终使用小写</samp>

## <samp>Object 与 object</samp>

### <samp>Object</samp>

<samp>`Object`：JavaScript 的广义对象，即可转换为对象的值都是 `Object` 类型</samp>

```ts
let obj: Object;

obj = true;
obj = 'hi';
obj = 1;
obj = { foo: 123 };
obj = [1, 2, 3];
obj = (a: number) => { a + 1 };
```

<samp>除了 `undefined` 和 `null` 不能转换为对象</samp>

```ts
let obj: Object;
obj = undefined; // [!code error] 不能将类型“undefined”分配给类型“Object”。
obj = null; // [!code error] 不能将类型“null”分配给类型“Object”。
```

<samp>`Object` 的简写形式：`{}`</samp>

```ts
let obj: {};
```

### <samp>object</samp>

<samp>`object`：JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值</samp>

```ts
let obj: object;

obj = { foo: 123 };
obj = [1, 2, 3];
obj = (a: number) => { a + 1 };
obj = true; // [!code error] 不能将类型“boolean”分配给类型“object”。
obj = 'hi'; // [!code error] 不能将类型“string”分配给类型“object”。
obj = 1; // [!code error] 不能将类型“number”分配给类型“object”。
```

> [!NOTE]
>
> <samp>无论是 `Object` 还是 `object`，都只包含内置对象原生的属性和方法，自定义的属性和方法不在这两个类型中</samp>

## <samp>undefined 与 null</samp>

<samp>`undefined` 和 `null` 既是值，又是类型</samp>

> [!NOTE]
>
> <samp>作为值时，任何其他类型的变量都可以赋值为 `undefined` 和 `null`</samp>

```ts
const obj: object = undefined;
obj.toString(); // [!code highlight] 在编译阶段不报错, 在运行阶段报错。不能将类型“undefined”分配给类型“object”。
```

<samp>这样不利于发挥类型系统的优势，为了避免这种情况发生，"编译选项"开启 `strictNullChecks`</samp>

::: code-group

```sh
tsc --strictNullChecks app.ts
```

```json[tsconfig.json]
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

:::

<samp>开启 `strictNullChecks` 后，`undefined` 和 `null` 只能赋值给自身、`any`、`unknown`</samp>

```ts
let x: undefined = null; // [!code error] 不能将类型“null”分配给类型“undefined”。
let y: null = undefined; // [!code error] 不能将类型“undefined”分配给类型“null”。
```

## <samp>值类型</samp>

<samp>TypeScript 规定：单个值也是一种类型，称为"值类型"</samp>

<samp>声明了值类型，赋值其他值就会报错</samp>

```ts
let x: 'hello';
x = 'world'; // [!code error] 不能将类型“"world"”分配给类型“"hello"”。
```

<samp>**类型推断**：如果遇到 const 声明变量，如果没有注明类型，就推断该变量是值类型</samp>

```ts
const x = 'https'; // const x: "https"
const y: string = 'https'; // const y: string
```

> [!NOTE]
>
> <samp>如果使用 `const` 声明的变量是一个对象，不会推断为值类型</samp>
>
> ```ts
> const x = { foo: 1 }; // const x: { foo: number; }
> ```
>
> <samp>`x` 没有被推断为值类型，而是将属性推断为 `number` 类型；因为 JavaScript 中，`const` 变量赋值对象时，属性值是可以改变的</samp>

<samp>值类型有时会发生奇怪的报错</samp>

```ts
const x: 5 = 4 + 1; // [!code error] 不能将类型“number”分配给类型“5”。
```

<samp>这是因为 TypeScript 推断右侧的类型为 `number`，`5` 是 `number` 的子类型，`number` 是 `5` 的父类型</samp>

<samp>父类型不能赋值给子类型，子类型可以赋值给父类型</samp>

```ts
let x: 5 = 5;
let y: number;

y = x; // [!code highlight] 子类型可以赋值给父类型
```

<samp>如果一定需要父类型赋值给子类型，需要使用类型断言</samp>

```ts
let y: number = 4 + 1;
const x: 5 = y as 5; // [!code highlight] OK
```

## <samp>联合类型</samp>

<samp>联合类型(union types)：多个类型组成一个新类型，符号 `|`</samp>

<samp>联合类型 `A|B` 表示：任何一个类型只要属于 `A` 或 `B`，就属于联合类型 `A|B`</samp>

```ts
let x: string | number;
```

> <samp>`x` 的值既可以是字符串，也可以是数值</samp>

- <samp>联合类型与值类型结合</samp>

  ```ts
  let setting: true | false; // 这样写也是布尔类型boolean
  let gender: 'male' | 'female';
  let rainbowColor: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
  ```

- <samp>如果编译选项开启了 `strictNullChecks` 后，其他类型变量不能赋值 `undefined` 或 `null`，但是某个变量需要包含空值时，可以使用联合类型</samp>

  ```ts
  let name: string | null;
  ```

- <samp>联合类型在第一个成员前加上 `|`，方便书写</samp>

  ```ts
  let x:
    | 'one'
    | 'two'
    | 'three'
    | 'four';
  ```

- <samp>如果存在多种类型，读取时需要进行类型缩小(type narrowing)</samp>

  ```ts
  function printId(id: number | string) {
    console.log(id.toUpperCase()); // [!code error]类型“string | number”上不存在属性“toUpperCase”。类型“number”上不存在属性“toUpperCase”。
  }
  ```

  <samp>类型缩小：判断 id 的类型是字符串还是数值，如果是字符串，那就执行字符串的方法</samp>

  ```ts
  function printId(id: number | string) {
    if (typeof id === 'string') {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }
  ```


> [!TIP]
>
> <samp>"类型缩小"是 TypeScript 处理联合类型的标准方法，凡是在多种类型的场合，都需进行类型缩小再处理</samp>
>
> <samp>事实上，"联合类型"可以看作是"类型放大"(type windening)，处理时需要"类型缩小(type narrowing)"处理</samp>
>
> ```ts
> function getPort(
>   scheme: 'http' | 'https'
> ) {
>   switch (scheme) {
>     case 'http':
>       return 80;
>     case 'https':
>       return 443;
>   }
> }
> ```

## <samp>交叉类型</samp>

<samp>交叉类型(intersection types)：多个类型组成的一个新类型，符号：`&`</samp>

<samp>交叉类型 `A&B` 表示，任何一个类型必须同时属于 `A` 和 `B`，才属于交叉类型 `A&B`，即交叉类型同时满足 `A` 和 `B` 的特征</samp>

```ts
let x: number & string; // let x: never
```

> <samp>变量 `x` 同时满足数值和字符串是不可能的，类型推断为 `never`</samp>

- <samp>交叉类型主要用于表示对象的合成</samp>

  ```ts
  let obj:
    { foo: string } &
    { bar: string };
  
  obj = {
    foo: 'hello',
    bar: 'world'
  };
  ```

- <samp>交叉类型常用于对象类型添加新属性</samp>

  ```ts
  type A = { foo: number };
  
  type B = A & { bar: number };
  ```

## <samp>type</samp>

<samp>`type` 定义一个类型的别名</samp>

- <samp>别名具有块级作用域</samp>

  ```ts
  type Color = 'red';
  
  if (Math.random() < 0.5) {
    type Color = 'blue';
  }
  ```

- <samp>同作用域内，别名不允许重名</samp>

  ```ts
  type Color = 'red'; // [!code error] 标识符“Color”重复。
  type Color = 'blue'; // [!code error] 标识符“Color”重复。
  ```

- <samp>别名支持表达式，可以在定义一个别名时，使用另一个别名，即别名允许嵌套</samp>

  ```ts
  type World = "world";
  type Greeting = `hello ${World}`;
  ```

## <samp>typeof</samp>

<samp>`typeof` 运算符是一个一元运算符，代表操作数的类型</samp>

<samp>`typeof` 操作数是一个值</samp>

> <samp>在 JavaScript 中，`typeof` 只可能返回八种结果，返回值是字符串形式</samp>
>
> ```js
> typeof undefined; // "undefined"
> typeof true; // "boolean"
> typeof 1337; // "number"
> typeof "foo"; // "string"
> typeof {}; // "object"
> typeof parseInt; // "function"
> typeof Symbol(); // "symbol"
> typeof 127n // "bigint"
> ```

<samp>在 TypeScript 中，`typeof` 返回的是不再是字符串，而是值类型</samp>

```ts
const a = { x: 0 };

type T0 = typeof a;   // { x: number }
type T1 = typeof a.x; // number
```

> <samp>这种写法只能用在类型运算中，不能用于值运算</samp>

```ts
let a = 1;
let b: typeof a; // 类型运算

// 值运算
if (typeof a === 'number') {
  b = a;
}
```

<samp>TypeScript 规定：`typeof` 的参数只能是标识符，不能是表达式</samp>

<samp>`typeof` 参数不能是类型</samp>

```ts
type Age = number;
type myAge = typeof Age; // [!code error] “Age”仅表示类型，但在此处却作为值使用。
```



## <samp>块级类型声明</samp>

<samp>TypeScript 支持块级类型声明，即类型可以声明在代码块(用大括号表示)里面，并且只在当前代码块有效</samp>

```ts
if (true) {
  type T = number;
  let v: T = 5;
} else {
  type T = string;
  let v: T = 'hello';
}
```

## <samp>类型兼容</samp>

<samp>TypeScript 类型兼容：某些类型可以兼容其他类型</samp>

```ts
type T = number | string;

let a: number = 1;
let b: T = a;
```

> <samp>`a` 赋给 `b` 不会报错，因为 `b` 的类型兼容 `a` 的类型</samp>

<samp>如果类型 A 的值可以赋值给 B，那么就称 A 是 B 的子类型(subtype)，类型 `number` 是 `number | string` 的子类型</samp>

<samp>子类型可以用在父类型的场合，但是子类型可能具有父类型所没有的特征，所以父类型不能用在子类型的场合</samp>

## <samp>数组</samp>

<samp>数组写法</samp>

- `数组类型[]`

- <samp>泛型：Array<类型></samp>

<samp>如果数组成员比较复杂，将类型写在括号内</samp>

```ts
let arr1: (number | string)[];

let arr2: Array<number | string> = [1, 2, 3];
```

<samp>如果数组是任意类型，写成 `any[]`</samp>

```ts
let arr: any[];
```

<samp>声明后，成员数量是不受限制的</samp>

```ts
let arr:number[];
arr = [];
arr = [1];
arr = [1, 2];
arr = [1, 2, 3];
```

> <samp>这样设计的目的是因为数组的成员是动态变化的</samp>

<samp>可以访问不存在的成员，TypeScript 不报错</samp>

```ts
let arr: number[] = [1, 2, 3];
let foo = arr[3];
```

<samp>TypeScript 允许使用方括号读取成员的类型</samp>

```ts
type Names = string[];
type name = Names[0];
```

> <samp>数组成员的索引类型是 `number`，所以读取成员的类型可以写成</samp>
>
> ```ts
> type Names = string[];
> type name = Names[number];
> ```

### <samp>类型推断</samp>

<samp>如果是空数组，推断类型为 `any[]`；赋值后，自动更新类型推断</samp>

```ts
const arr = [];
arr.push(1);
arr; // const arr: number[]

arr.push('a');
arr; // const arr: (string | number)[]
```

<samp>类型推断自动更新的前提只发生在初始值为空数组的情况</samp>

### <samp>只读数组</samp>

<samp>只读数组：禁止删除、修改、新增数组成员</samp>

1. <samp>声明只读数组，需要在类型前加上 `readonly`</samp>

   ```ts
   const arr: readonly number[] = [0, 1];
   ```

   <samp>只读数组没有 `pop()`、`push()` 等可改变原数组的方法，`number[]` 的方法数量多于 `readonly number[]` ，这意味这 `number[]` 其实是 `readonly number[]` 的子类</samp>

   ```ts
   function getSum(s: number[]) { }
   const arr: readonly number[] = [1, 2, 3];
   getSum(arr); // [!code error] 类型“readonly number[]”的参数不能赋给类型“number[]”的参数。类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"。
   ```

   > <samp>只读数组是数组的父类，所以不能代替原数组</samp>

   > [!NOTE]
   >
   > <samp>`readonly` 关键字不能和数组泛型一起使用</samp>

2. <samp>TypeScript 提供了两个泛型用于声明只读数组</samp>

   <samp>分别是：`ReadonlyArray<T>` 和 `Readonly<T[]>`</samp>

   ```ts
   const a1: ReadonlyArray<number> = [1, 2, 3];
   const a2: Readonly<number[]> = [1, 2, 3];
   ```

3. <samp>"`const` 断言" 也可以用于声明只读数组</samp>

   ```ts
   const arr = [0, 1] as const; // const arr: readonly [0, 1]
   ```

### <samp>多维数组</samp>

<samp>TypeScript 的多维数组采用 `T[][]`，`T` 是最底层的数组成员的类型</samp>

```ts
let multi: number[][] = [
  [1, 2, 3], 
  [4, 5, 6]
];
```

## <samp>元组</samp>

<samp>元组(tuple)：表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同</samp>

- <samp>由于成员类型不一样，所以**元组必须明确声明每个成员的类型**</samp>

  ```ts
  const s: [string, string, boolean] = ['1', '2', true];
  ```

- <samp>元素成员的类型可以添加问号(`?`)作为后缀，表示成员是可选的</samp>

  ```ts
  let a: [number, number?] = [1]; // let a: [number, (number | undefined)?]
  ```
  
  > [!NOTE]
  >
  > <samp>可选成员必须在必选成员之后</samp>
  >
  > ```ts
  > type myTuple = [
  > number,
  > number,
  > number?,
  > string?
  > ];
  > ```

- <samp>元组越界的成员会报错</samp>

- <samp>扩展运算符(`...`)：表示不限成员</samp>

  ```ts
  type NamedNums = [
    string,
    ...number[]
  ];
  const a: NamedNums = ['A', 1, 2];
  const b:NamedNums = ['B'];
  ```

  <samp>扩展运算符（`...`）用在元组的任意位置都可以</samp>

  ```ts
  type t1 = [string, number, ...boolean[]];
  type t2 = [string, ...boolean[], number];
  type t3 = [...boolean[], string, number];
  ```

- <samp>不确定元组成员的类型和数量</samp>

  ```ts
  type Tuple = [...any[]]; // type Tuple = any[]
  ```

- <samp>元组成员可以添加成员名称，这个名称是说明性的，没有任何作用</samp>

  ```ts
  type Color = [
    red: number,
    green: number,
    blue: number
  ];
  const c: Color = [255, 255, 255];
  ```

- <samp>读取元组成员类型</samp>

  ```ts
  type Tuple = [string, number];
  type Age = Tuple[1]; // type Age = number
  ```

  <samp>元组成员的索引都是数值索引，即索引类型是 `number`</samp>

  ```ts
  type Tuple = [string, number];
  type Age = Tuple[number]; // type Age = string | number
  ```

  

### <samp>只读元组</samp>

- <samp>类型前加上 `readonly`</samp>

  ```ts
  type t = readonly [number, string];
  ```

- <samp>泛型：`Readonly<T>`</samp>

  ```ts
  type t = Readonly<[number, string]>;
  ```

- <samp>"`const` 断言" 也可以用于声明只读元组</samp>

  ```ts
  let t = [3, 4] as const;
  ```

  > <samp>`as const` 生成的实际上是一个值类型，也可以称为只读数组或只读元组</samp>

<samp>和数组一样，只读元组是元组的父类型，只读元组不能赋值给元组</samp>

```ts
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
let point = [3, 4] as const;
distanceFromOrigin(point); // [!code error] 类型“readonly [3, 4]”的参数不能赋给类型“[number, number]”的参数。类型 "readonly [3, 4]" 为 "readonly"，不能分配给可变类型 "[number, number]"。
```

<samp>要解决上面的报错，需要在传入的参数上使用类型断言</samp>

```ts
distanceFromOrigin(point as [number, number]); 
```

### <samp>成员数量</samp>

- <samp>如果没有可选成员和扩展运算符，TypeScript 会推断出元组的成员数量(即元组长度)</samp>

  ```ts
  function f(point: [number, number]) {
    if (point.length === 3) { // [!code error] 此比较似乎是无意的，因为类型“2”和“3”没有重叠。 
    }
  }
  ```

  > <samp>TypeScript 推测元组长度是 `2`，不可能是 `3`</samp>

- <samp>如果包含了可选成员，TypeScript 会推断出可能的成员数量</samp>

  ```ts
  function f(point: [number, number?, number?]) {
    if (point.length === 4) { // [!code error] 此比较似乎是无意的，因为类型“1 | 2 | 3”和“4”没有重叠。 
    }
  }
  ```

- <samp>如果使用了扩展运算符，TypeScript 就无法推断出成员数量</samp>

### <samp>扩展运算符</samp>

<samp>如果使用扩展运算符传入函数参数时，可能出现参数数量与数组数量长度不匹配的情况</samp>

```ts
const arr = [1, 2];

function add(x: number, y: number) {
}
add(...arr); // [!code error] 扩张参数必须具有元组类型或传递给 rest 参数。
```

> <samp>因为函数的参数数量已经确定了，TypeScript 转换的参数个数是不确定的</samp>

- <samp>方法一：把成员数量不确定的数组写成成员数量确定的元组，在使用扩展运算符</samp>

  ```ts
  const arr: [number, number] = [1, 2];
  ```

- <samp>方法二：使用 `as const` 断言</samp>

  ```ts
  const arr = [1, 2] as const;
  ```

## <samp>symbol</samp>

<samp>Symbol 值通过`Symbol()`函数生成，每一个 Symbol 值都是独一无二的，与其他任何值都不相等</samp>

```ts
let x: symbol = Symbol();
let y: symbol = Symbol();
```

> <samp>`x` 和 `y` 都是 symbol 类型，但是它们是不相等的</samp>

### <samp>unique symbol</samp>

<samp>`symbol` 类型包含所有的 Symbol 值，但无法表示某一具体的 Symbol 值，即 Symbol 值无法通过字面量表示</samp>

- <samp>`unique symbol`：表示单个的、某个具体的 Symbol 值</samp>

  > <samp>`unique symbol` 表示单个值且该值无法被修改，因此只能使用 `const` 声明</samp>
  >
  > ```ts
  > let x: unique symbol = Symbol(); // [!code error] 类型为 "unique symbol" 的变量必须为 "const"。
  > ```

- <samp>`const` 声明的 Symbol 值，默认就是 `unique symbol`，因此可以省略值类型</samp>

  ```ts
  const x: unique symbol = Symbol(); // const x: typeof x
  
  // 等价于 
  const x = Symbol(); // const x: typeof x
  ```

- <samp>`uninque symbol` 是 `symbol` 的子类型，可以将 `unique symbol` 赋值给 `symbol`</samp>

  ```ts
  const a: unique symbol = Symbol();
  const b: symbol = a;
  ```

- <samp>每个 `unique symbol` 类型的变量，值是不一样的</samp>

  ```ts
  const a: unique symbol = Symbol();
  const b: unique symbol = Symbol();
  
  console.log(a === b); // [!code error] 此比较似乎是无意的，因为类型“typeof a”和“typeof b”没有重叠。
  ```

- <samp>由于 Symbol 值是独一无二的，不能把一个赋值给另一个</samp>

  ```ts
  const a: unique symbol = Symbol();
  const b: unique symbol = a; // [!code error] 不能将类型“typeof a”分配给类型“typeof b”。
  ```

  > <samp>如果需要写成同一个 `unique symbol` 类型，只能写成 `typeof a`</samp>
  >
  > ```ts
  > const a: unique symbol = Symbol();
  > const b: typeof a = a; 
  > ```

- <samp>`Symbol.for()`：返回相同的 Symbol 值(虽然值是相等的，但是引用完全不同)</samp>

  ```ts
  const a: unique symbol = Symbol.for('foo');
  const b: unique symbol = Symbol.for('foo');
  ```

<samp>`unique symbol` 的作用是用作特定属性名，保证不会和其他属性名冲突；不能使用 `symbol`</samp>

```ts
const x:unique symbol = Symbol();
const y:symbol = Symbol();

interface Foo {
  [x]: string; // [!code highlight]
  [y]: string; // [!code error]
}
```

<samp>`unique symbol` 类型可以用作 `class` 属性值，只能赋值给类的 `readonly static` 属性</samp>

```ts
class C {
  static readonly foo: unique symbol = Symbol();
}
```

> <samp>静态只读属性 `foo` 是 `unique symbol`， `static` 和 `readonly` 两个限定符缺一不可</samp>

### <samp>类型推断</samp>

- <samp>`let` 声明的 `symbol`，推断为 `symbol`</samp>

  > <samp>如果 `let` 声明的变量，被赋值为另一个 `unique symbol` 变量，类型推断还是 `symbol`</samp>
  >
  > ```ts
  > const x = Symbol();
  > let y = x; // let y: symbol
  > ```

- <samp>`const` 声明的 `symbol`，推断为 `unique symbol`</samp>

  > <samp>如果 `const` 声明的变量，被赋值为另一个 `symbol` 类型变量，则推断为 `symbol`</samp>
  >
  > ```ts
  > let x = Symbol();
  > const y = x; // const y: symbol
  > ```

## <samp>函数</samp>

<samp>函数声明时，需要在声明时，给出参数的类型和返回值的类型</samp>

```ts
function hello(txt: string): void {
  console.log('hello ' + txt);
}
```

> <samp>`void`：表示没有返回值</samp>

<samp>如果不指定类型，TypeScript 会推断参数类型为 `any`</samp>

<samp>没有特定需求，返回值的类型可以不写，TypeScript 会自己推断</samp>



