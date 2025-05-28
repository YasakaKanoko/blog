# <samp>TypeScript</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>**特点**</samp>

- <samp>TS 是一个可选的、**静态的类型系统**</samp>

  ::: details 

  <samp>**静态**：类型检查始终发生在编译时，而非运行时</samp>

  <samp>**类型系统**：对代码中的标识符(变量、函数、参数、返回值)进行类型检查</samp>

  :::

- <samp>TS 是 JS 的**超集**</samp>

- <samp>拥抱 ES 标准</samp>

- <samp>**类型检查**增强了面向对象开发</samp>

## <samp>编译选项</samp>

<samp>"**编译(Compile)**"：TS 编译器将 TypeScript 代码编译成 JavaScript 代码的过程，编译时会将类型声明和相关的代码删除，不改变 JavaScript 的运行结果</samp>

<samp>默认情况下，TS 编译器可能的**假设**</samp>

- <samp>假设当前环境是 DOM</samp>
- <samp>如果代码中未使用模块化，便认为当前代码是全局执行</samp>
- <samp>编译目标是 ES3</samp>

<samp>**编译选项**：通过修改 `tsconfig.json` 编译选项改变 TypeScript 的假设</samp>

1. <samp>初始化项目</samp>

   ::: code-group

   ```sh[pnpm]
   # 初始化
   pnpm init
   
   # 安装类型编译器
   pnpm i -D typescript
   
   # 初始化ts编译器, 生成ts配置文件
   npx tsc --init
   ```

   ```sh[bun]
   bun init -y
   ```

   :::

2. <samp>`tsconfig.json`</samp>

   <samp>参考：[tsconfig.json](https://www.typescriptlang.org/tsconfig/)</samp>

   ::: details

   - <samp>`"outDir": "./dist"`：导出路径</samp>

   - <samp>`"esModuleInterop": true`：改善CommonJS/ES模块互操作性</samp>
   - <samp>`"forceConsistentCasingInFileNames": true`：强制文件导入路径大小写一致</samp>
   - <samp>`"include": ["src"]`：包含的目录</samp>
   - <samp>`"exclude": ["node_modules"]`：排除的目录</samp>
   - <samp>`"strict": true`：严格类型检查</samp>
     - <samp>`noImplicitAny`：不允许隐式 `any` 类型</samp>
     - <samp>`strictNullChecks`：在类型检查中考虑 `null` 和 `undefined`</samp>
     - <samp>`strictFunctionTypes`：在函数赋值时进行严格的类型检查</samp>
     - <samp>`strictBindCallApply`：检查 `bind`, `call`, `apply` 方法的参数和返回值类型</samp>
     - <samp>`strictPropertyInitialization`：检查类字段是否在构造函数中被初始化</samp>
     - <samp>`strictBuiltinIteratorReturn`：内置迭代器的返回类型为 `undefined` 而不是 `any`</samp>
     - <samp>`noImplicitThis`：不允许 `this` 具有隐式的 `any` 类型</samp>
     - <samp>`useUnknownInCatchVariables`：默认情况下将 `catch` 变量视为 `unknown` 而不是 `any`</samp>
     - <samp>`alwaysStrict`：确保在生成的 JavaScript 文件中包含 `'use strict'`</samp>

   ::: 

   ::: code-group

   ```json[tsconfig.json]
   {
     "compilerOptions": {
     
     	// Environment setup & latest features
       "lib": ["ESNext"], // 生成的JavaScript版本
       "target": "ESNext", // 内部类型声明库, 不包含dom   
       "module": "Preserve", // TypeScript 编译器不会将其转换为其他模块系统
       "moduleDetection": "force", // 强制 TypeScript 编译器检测模块文件的格式
       "jsx": "react-jsx", // 指定生成的 JSX 代码的类型为 React.jsx
       "allowJs": true, // 允许编译 JavaScript 文件
       
       // Bundler mode
       "moduleResolution": "bundler", // 指定模块解析的模式为 bundler
       "allowImportingTsExtensions": true, // 允许导入带有 .ts 和 .tsx 扩展名的文件
       "verbatimModuleSyntax": true, // 确保 TypeScript 编译器在编译时不会对模块语法进行任何转换
       "noEmit": true, // 不要生成任何 JavaScript 文件
   
       // Best practices
       "strict": true, // 启用所有严格类型检查选项
       "skipLibCheck": true, // 跳过所有 .d.ts 文件的类型检查
       "noFallthroughCasesInSwitch": true, // 确保每个 case 语句都有明确的终止条件
       "noUncheckedIndexedAccess": true, // 通过索引访问对象属性时，确保返回的类型包含 undefined
       "noImplicitOverride": true, // 确保覆盖方法的意图是显式的
   
       // Some stricter flags (disabled by default)
       "noUnusedLocals": false, // 关闭对未使用的本地变量的类型检查
       "noUnusedParameters": false, // 禁止报告未使用的函数参数
       "noPropertyAccessFromIndexSignature": false, // 关闭对从索引签名访问属性时的严格类型检查
     },
   }
   ```

   :::

3. <samp>依赖项</samp>

   ::: code-group

   ```sh[pnpm]
   # TypeScript 的类型定义包
   pnpm i -D @types/node
   
   # Node.js 执行环境，可以直接运行 TypeScript 文件
   pnpm i -D ts-node
   
   # 监视文件变化的工具，当检测到项目中的文件发生变化时，会自动重启 Node.js 应用程序
   pnpm i -D nodemon
   ```

   ```sh[bun]
   bun add -D @types/bun
   ```

   :::


4. <samp>脚本</samp>

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

## <samp>原始类型</samp>

- <samp>`number`：数值</samp>

- <samp>`string`：字符串</samp>

- <samp>`boolean`：布尔值</samp>

- <samp>`bigint`：大整数</samp>

- <samp>`symbol`：符号</samp>

- <samp>`undefined`：未定义</samp>

- <samp>`null`：空</samp>

  > [!NOTE]
  >
  > - <samp>`null` 和 `undefined` 是所有类型的子类型，可以赋值给任意类型</samp>
  > - <samp>**编译选项**开启 `strictNullChecks` 后，`undefined` 和 `null` 只能赋值给自身、`any`、`unknown`</samp>

### <samp>类型约束</samp>

<samp>**类型约束**：变量、函数参数、函数返回值</samp>

```ts
const q: string = 'string';
const w: number = 1;
const e: boolean = true;
const r: null = null;
const t: undefined = undefined;
```

### <samp>其他类型</samp>

- <samp>**联合类型**(union types)：多种类型任选其一；符号 `|`</samp>

  ```ts
  let name: string | undefined;
  ```

  <samp>**类型保护**：通常情况下，可以通过 `typeof` 触发类型保护</samp>

  ```ts
  if (typeof name === 'string') {
    name; // let name: string
  }
  ```

- <samp>**交叉类型**(intersection types)：多种类型叠加在一起形成一种新类型，包含了所需的所有类型的特性；符号：`&`</samp>

- <samp>`void`：约束函数返回值；表示函数没有任何值返回</samp>

- <samp>`never`：约束函数返回值；表示函数永远不会结束</samp>

- <samp>**值类型**：使用值进行约束，变量为字面量</samp>

  ```ts
  // 和联合类型一起约束, 表示只能取其中一个值
  let gender: 'male' | 'female';
  
  // 约束空数组
  let arr: [];
  
  // 约束对象属性的类型
  let user: { 
    name: string; 
    age: number; 
  }
  ```

- <samp>**元组**(Tuple)：定长数组，数组每一项的类型确定</samp>

- <samp>`any`：任意类型；绕过类型检查</samp>

  > <samp>`any` 是"**顶层类型**(top type)"，可以赋值给任意类型的数据</samp>

## <samp>类型别名</samp>

<samp>`type`：类型别名；相当于 C++ 中的 `typedef`</samp>

```ts
type IBookList = Array<{
  author: string;
} & ({
  type: 'history';
  range: string;
} | {
  type: 'story';
  theme: string;
})>; 
```

## <samp>object</samp>

- <samp>`object`：**非原始类型**；包含**对象**、**数组**和**函数**</samp>

  > <samp>**非原始类型**：除了 `number`、`string`、`boolean`、`symbol`、`bigint`、`null`、`undefined` 之外的任何类型</samp> 

- <samp>`Object`：所有可转换为对象值的构造函数；简写形式：`{}`</samp>

  > <samp>除了 `undefined`、`null`</samp>

### <samp>数组</samp>

- <samp>字面量</samp>
- <samp>泛型</samp>

### <samp>函数</samp>



#### <samp>可选参数</samp>

<samp>**可选参数**：在参数末尾加上 `?` 实现可选参数</samp>

- <samp>函数体使用可选参数时，需要先判断该参数是否为 `undefined`</samp>
- <samp>可选参数必须在必选参数之后</samp>

#### <samp>默认参数</samp>

<samp>**默认参数**：提供一个默认值，当用户没有传递该参数或传递值为 `undefined` 时，默认初始化值的参数</samp>

<samp>如果默认参数在必选参数之前，调用时必须显式传入 `undefined`</samp>



#### <samp>重载</samp>

<samp>**函数重载**：根据参数的不同，产生不同的函数行为</samp>

```ts
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error('a与b必须是相同类型');
}
```

## <samp>symbol</samp>

<samp>Symbol 值通过 `Symbol()` 函数生成，每一个 Symbol 值都是独一无二的</samp>

> <samp>symbol 类型无法表示某一具体的 Symbol 值，即 Symbol 值无法通过字面量表示</samp>

```ts
let x: symbol = Symbol();
let y: symbol = Symbol();
```

#### <samp>unique symbol</samp>

<samp>`unique symbol`：表示单个的、某个具体的 Symbol 值</samp>

- <samp>`unique symbol` 只能使用 `const` 声明</samp>

- <samp>`const` 声明的 `symbol` 类型是 `unique symbol` 类型</samp>

- <samp>`uninque symbol` 是 `symbol` 的子类型，`unique symbol` 可以赋值给 `symbol`</samp>

- <samp>每个 `unique symbol` 类型的变量，值是不一样的</samp>

- <samp>如果需要写成同一个 `unique symbol` 类型，只能写成 `typeof x`</samp>

  ```ts
  const a: unique symbol = Symbol();
  const b: typeof a = a; 
  ```

- <samp>`Symbol.for()`：返回相同的 Symbol 值(虽然值是相等的，但是引用完全不同)</samp>

  ```ts
  const a: unique symbol = Symbol.for('foo');
  const b: unique symbol = Symbol.for('foo');
  ```

- <samp>`unique symbol` 的作用是用作特定属性名，保证不会和其他属性名冲突</samp>

  > <samp>`unique symbol` 是 `symbol` 的子类型，在 `interface` 中，不能同时存在两个同类型的索引签名</samp>

  ```ts
  interface Foo {
    [x: unique symbol]: string; // [!code error] 类型“symbol”的索引签名重复。
    [y: symbol]: string; // [!code error] 类型“symbol”的索引签名重复。
  }
  ```

- <samp>`unique symbol` 类型可以用作 `class` 属性值，只能赋值给类的 `readonly static` 属性</samp>

  ```ts
  class C {
    static readonly foo: unique symbol = Symbol();
  }
  ```

  > <samp>静态只读属性 `foo` 是 `unique symbol`， `static` 和 `readonly` 两个限定符缺一不可</samp>

<samp>**类型推断**</samp>

- <samp>`let` 声明的 `symbol`，推断为 `symbol`</samp>

  > <samp>如果 `let` 声明的变量，被 `unique symbol` 变量赋值，类型推断依然是 `symbol`</samp>
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

## <samp>包装对象</samp>

- <samp>`Boolean`</samp>

- <samp>`String`</samp>

- <samp>`Number`</samp>

- <samp>`BigInt`</samp>

- <samp>`Symbol`</samp>

  > - <samp>只有 `symbol` 和 `bigint` **无法直接获取它们的包装对象**，即 `Symbol()` 和 `BigInt()` 不能作为构造函数使用，剩下三种可以</samp>
  >
  >   ```ts
  >   // 获取 symbol 和 bigint 的包装对象
  >   let a = Object(Symbol());
  >   let b = Object(BigInt(1));
  >   ```
  >
  > - <samp>`symbol` 和 `Symbol` 两种写法没有差异；`bigint` 和 `BigInt` 也是如此，建议始终使用小写</samp>

<samp><b>注意</b></samp>

- <samp>大写类型同时包含包装对象和字面量，小写类型只包含字面量</samp>
- <samp>建议只使用小写类型，不使用大写类型；很多内置方法的参数，定义在小写类型中</samp>

## <samp>Object</samp>

<samp>`Object`：JavaScript 的广义对象，即可转换为对象的值都是 `Object` 类型；简写形式：`{}`</samp>

> <samp>除了 `undefined` 和 `null`</samp>

```ts
let obj: Object;

obj = true;
obj = 'hi';
obj = 1;
obj = { foo: 123 };
obj = [1, 2, 3];
obj = (a: number) => { a + 1 };
```

### <samp>object</samp>

<samp>`object`：JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值</samp>

```ts
let obj: object;

obj = { foo: 123 };
obj = [1, 2, 3];
obj = (a: number) => { a + 1 };
```

::: info

<samp>无论是 `Object` 还是 `object`，都只包含内置对象原生的属性和方法，自定义的属性和方法不在这两个类型中</samp>

:::

## <samp>其他类型</samp>

### <samp>any</samp>

<samp>`any`：没有任何限制，可以被赋予任意类型</samp>

- <samp>当变量类型设置为 `any` 时，TypeScript 会关闭这个变量的类型检查</samp>

- <samp>`any` 类型可能污染其他变量，它可以赋值给任何类型的变量，导致其他变量出错</samp>

::: info <samp>使用 `any` 的场景</samp>

1. <samp>关闭某些变量的类型检查，就可以设置为 `any`</samp>
2. <samp>为了适配老的 JavaScript ，让代码迅速迁移到 TypeScript</samp>
3. <samp>不希望对来自用户或第三方库的值进行类型检查</samp>

<samp>`any` 可以看作是所有其他类型的全集，TypeScript 将这种类型称为"**顶层类型**(top type)"</samp>

:::

<samp>**类型推断**</samp>

- <samp>如果开发时没有类型声明，TS 会自己推断类型</samp>

- <samp>如果无法推断出具体类型，就将类型推断为 `any`</samp>

  > <samp>`noImplicitAny` 选项：只要当类型推断为 `any` 时就报错</samp>
  >
  > ::: code-group
  >
  > ```json[tsconfig.json]
  > {
  >   "compilerOptions": {
  >     "noImplicitAny": true
  >   }
  > }
  > ```
  >
  > :::

### <samp>unknown</samp>

<samp>`unknown`：表示类型不确定，可能是任意类型；(严格的 `any`)</samp>

> [!tip]
>
> <samp>凡是需要 `any` 类型的地方，通常都应该优先考虑 `unknown` 类型</samp>

<samp>`unknown` 和 `any` 的相似之处：所有类型的值都可以分配给 `unknown`</samp>

<samp>`unknown` 和 `any` 的不同之处</samp>

- <samp>`unknown` 类型的变量不能直接赋值给其他类型变量 (除了 `any` 和 `unknown`)</samp>


- <samp>不能直接调用 `unknown` 类型变量的方法和属性</samp>


- <samp>`unknown` 类型能进行的运算是有限的，只能进行比较运算 (`==`, `===`, `!=`, `!==`, `||`, `&&`，`?`, `typeof`, `instanceof`)</samp>


- <samp>类型缩小：缩小 `unknown` 变量类型范围，将一个不确定的类型缩小到一个明确的类型</samp>

  ```ts
  let a: unknown = 1;
  if (typeof a === 'number') {
    let r = a + 1; // [!code highlight]
  }
  ```

### <samp>never</samp>

<samp>`never`："空类型"，不包含任何值</samp>

::: info <samp>使用场景</samp>

- <samp>不可能返回值的函数</samp>
- <samp>联合类型</samp>

:::

<samp>`never` 类型可以赋值给任意其他类型</samp>

::: info <samp>为什么 `never` 可以赋值给任意类型</samp>

- <samp>集合论：空集是任何集合的子集</samp>

- <samp>`never` 是任何其他类型共有的，TypeScript 称其为"底层类型 (bottom type)"</samp>

<samp>TypeScript 有两个"顶层类型 (`any` 和 `unknown`)"，只有一个"底层类型 (`never`)"</samp>

:::

## <samp>值类型</samp>



> 
>
> ```ts
>const x = { foo: 1 }; // const x: { foo: number; }
> ```
> 
> <samp>`const` 变量赋值对象时，属性值是可以改变的</samp>

- <samp>值类型是基本类型的子类型</samp>

  ```ts
  const x: 5 = 4 + 1; // [!code error] 不能将类型“number”分配给类型“5”。
  ```

  > <samp>父类型不能赋值给子类型，子类型可以赋值给父类型</samp>
  >
  > <samp>如果一定需要父类型赋值给子类型，需要使用类型断言</samp>
  >
  > ```ts
  > let y: number = 4 + 1;
  > const x: 5 = y as 5; // [!code highlight] OK
  > ```



## <samp>type</samp>

<samp>`type` 定义一个类型别名</samp>

- <samp>别名具有块级作用域</samp>

- <samp>同作用域内，别名不允许重名</samp>

- <samp>别名支持表达式，可以在定义一个别名时，使用另一个别名，即别名允许嵌套</samp>

  ```ts
  type World = "world";
  type Greeting = `hello ${World}`;
  ```

- <samp>如果类型 `A` 的值可以赋值给类型 `B`，那么类型 `A` 就称为类型 `B` 的子类型(subtype)</samp>

  > <samp>凡是可以使用父类型的地方，都可以使用子类型。即父类型不能赋值给子类型，子类型可以赋值给父类型</samp>
  >
  > <samp>因为子类型继承了父类型的所有特征，子类型还具有父类型所没有的特征</samp>

## <samp>typeof</samp>

<samp>`typeof` 运算符是一个一元运算符，代表操作数的类型</samp>

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

- <samp>`typeof` 操作数是一个值</samp>

- <samp>`typeof` 返回的值是值类型</samp>

  ```ts
  const a = { x: 0 };
  
  type T0 = typeof a;   // { x: number }
  type T1 = typeof a.x; // number
  ```

- <samp>`typeof` 的参数只能是标识符，不能是表达式</samp>

  ```ts
  type T = typeof (1 + 2); // [!code error] 应为标识符。
  ```

- <samp>`typeof` 参数不能是类型</samp>

  ```ts
  type Age = number;
  type myAge = typeof Age; // [!code error] “Age”仅表示类型，但在此处却作为值使用。
  ```

## <samp>数组</samp>

数组建议使用方括号形式，而不是泛型，因为在 React 中 `<>` 是组件的写法

- <samp>「类型+方括号」</samp>

  ```ts
  type IArr1 = number[];
  type IArr2 = (number | string)[];
  ```

- <samp>数组泛型</samp>

  ```ts
  type IArr1 = Array<number>;
  type IArr2 = Array<number | string>;
  ```

- <samp>接口定义数组</samp>

  ```ts
  interface IArr = {
    [key: number]: any;
  }
  ```

- <samp>使用方括号读取成员类型</samp>

  ```ts
  type IArr1 = string[];
  type Item1 = IArr1[0]; // type name = string
  
  type IArr2 = string[];
  type Item2 = IArr2[number]; // type name = string
  ```

- <samp>由于数组是动态变化的，不会进行边界检查，越界访问数组元素不会报错</samp>

### <samp>只读数组</samp>

<samp>只读数组：禁止删除、修改、新增数组成员</samp>

1. <samp>声明只读数组，需要在类型前加上 `readonly`</samp>

   ```ts
   const arr: readonly number[] = [0, 1];
   ```

   > [!NOTE]
   >
   > - <samp>只读数组没有 `pop()`、`push()` 等可改变原数组的方法；数组是只读数组的子类，只读数组是数组的父类</samp>
   >
   > - <samp>`readonly` 关键字不能和数组泛型一起使用</samp>

2. <samp>`ReadonlyArray<T>` 和 `Readonly<T[]>`：声明只读数组的泛型</samp>

   ```ts
   const a1: ReadonlyArray<number> = [1, 2, 3];
   const a2: Readonly<number[]> = [1, 2, 3];
   ```

3. <samp>`as const`：const 断言，声明只读数组</samp>

   ```ts
   const arr = [0, 1] as const; // const arr: readonly [0, 1]
   ```

### <samp>多维数组</samp>

```ts
type IArr1 = number[][];
type IArr2 = Array<Array<number>>;
```

## <samp>元组</samp>

<samp>元组(tuple)：表示每个成员的类型可以自由设置的数组，即数组的各个成员的类型可以不同</samp>

- <samp>**元组必须明确声明每个成员的类型**</samp>

  ```ts
  type ITuple = [number, number, string, string];
  ```

- <samp>问号(`?`)作为后缀时，表示成员是可选的</samp>

  ```ts
  type ITuple = [number, string, string, number?];
  ```

  > [!NOTE]
  >
  > <samp>可选成员必须在必选成员之后</samp>

- <samp>元组越界的成员会报错</samp>

- <samp>扩展运算符(`...`)：表示不限成员；在元组的任意位置都可以</samp>

  ```ts
  type t1 = [string, ...number[]];
  type t2 = [...string[], number];
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

  > [!TIP]
  >
  > <samp>元组成员的索引都是数值索引，即索引类型是 `number`</samp>
  >
  > ```ts
  > type Tuple = [string, number];
  > type Age = Tuple[number]; // type Age = string | number
  > ```

### <samp>只读元组</samp>

- <samp>类型前加上 `readonly`</samp>

  ```ts
  type t = readonly [number, string];
  ```

- <samp>泛型：`Readonly<T>`</samp>

  ```ts
  type t = Readonly<[number, string]>;
  ```

- <samp>`as const`："`const` 断言"声明只读元组</samp>

  ```ts
  let t = [3, 4] as const;
  ```

  > <samp>`as const` 生成的实际上是一个值类型，可以称为只读数组或只读元组</samp>

- <samp>只读元组是元组的父类型，只读元组不能赋值给元组</samp>

  ```ts
  function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
  }
  let point = [3, 4] as const;
  distanceFromOrigin(point); // [!code error] 类型“readonly [3, 4]”的参数不能赋给类型“[number, number]”的参数。类型 "readonly [3, 4]" 为 "readonly"，不能分配给可变类型 "[number, number]"。
  
  distanceFromOrigin(point as [number, number]); // [!code highlight] 正确的解决方式
  ```

<samp>**成员数量**</samp>

- <samp>如果没有可选成员和扩展运算符，TypeScript 会推断出元组的成员数量(即元组长度)</samp>

- <samp>如果包含了可选成员，TypeScript 会推断出可能的成员数量</samp>

- <samp>如果使用了扩展运算符，TypeScript 就无法推断出成员数量</samp>

<samp>**扩展运算符**</samp>

<samp>如果使用扩展运算符传入函数参数时，TypeScript 认为转换后的参数个数是不确定的</samp>

```ts
const arr = [1, 2];

function add(x: number, y: number) {
}
add(...arr); // [!code error] 扩张参数必须具有元组类型或传递给 rest 参数。
```

- <samp>方法一：声明把成员数量不确定的数组变成成员数量确定的元组，再使用扩展运算符</samp>

  ```ts
  const arr: [number, number] = [1, 2];
  ```

- <samp>方法二：声明时使用 `as const` 断言</samp>

  ```ts
  const arr = [1, 2] as const;
  ```

## <samp>对象</samp>

- <samp>对象字面量</samp>

  ```ts
  let obj: { x: number; y: number };
  ```

- <samp>类型别名</samp>

  ```ts
  type IBytedance =  { x: number; y: number };
  ```

- <samp>接口声明</samp>

  ```ts
  interface IBytedance { x: number; y: number };
  ```

<samp>**注意事项**</samp>

- <samp>一旦声明类型，对象赋值时，不能缺少指定的属性，也不能有多余的属性</samp>

- <samp>不能读写不存在的属性</samp>

- <samp>不能删除类型声明中存在的属性，但可以修改属性值</samp>

  ```ts
  const obj: { x: number, y: number } = {
    x: 1, y: 2
  }
  delete obj.x; // [!code error]
  ```

- <samp>对象的方法</samp>

  ```ts
  type IObj = {
    x:number;
    y:number;
    add: (x:number,y:number)=>number;
  };
  ```

<samp>**可选属性**</samp>

- <samp>可选属性赋值时，允许赋值 `undefined`</samp>

- <samp>读取没有值的可选属性，返回 `undefined`</samp>

- <samp>建议使用可选属性前，先进行判断是否为 `undefined`</samp>

  ```ts
  type IBytedance = {
    firstName: string,
    lastName?: string
  }
  const user: IBytedance = {
    firstName: 'John'
  }
  if (user.lastName !== undefined) {
    console.log(`Hello ${user.firstName} ${user.lastName} `);
  }
  ```

  > [!TIP]
  >
  > - <samp>使用三元运算符判断</samp>
  >
  >   ```ts
  >   let firstName = (user.firstName === undefined) ? 'Foo' : user.firstName;
  >   let lastName = (user.lastName === undefined) ? 'Bar' : user.lastName;
  >   ```
  >
  > - <samp>使用空值合并运算符判断</samp>
  >
  >   ```ts
  >   let firstName = user.firstName ?? 'Foo';
  >   let lastName = user.lastName ?? 'Bar';
  >   ```

- <samp>可选属性与设置的必选属性 `undefined` 两者不等价：可选属性可以省略，但必选属性 `undefined` 不能省略</samp>

  ```ts
  type A = { x: number; y?: number; };
  type B = { x: number; y: number | undefined; };
  
  let obj1: A = { x: 1 };
  let obj2: B = { x: 1 }; // [!code error] 类型 "{ x: number; }" 中缺少属性 "y"，但类型 "B" 中需要该属性。
  ```

<samp>当编译选项开启 `strictNullChecks` 和 `exactOptionalPropertyType` 选项时，可选属性不能赋值 `undefined`</samp>

::: code-group

```json[tsconfig.json]
{
  "compilerOptions": {
    "strictNullChecks": true,
    "exactOptionalPropertyTypes": true,
  }
}
```

:::

<samp>**只读属性**</samp>

<samp>在关键字前加上 `readonly`，表示不可修改</samp>

- <samp>只读属性只能在对象初始化时赋值</samp>

- <samp>如果属性值是一个对象，`readonly` 修饰符并不禁止修改该对象的属性，只是禁止完全替换掉该对象</samp>

  ```ts
  interface Home {
    readonly resident: {
      name: string;
      age: number;
    }
  }
  const h: Home = {
    resident: {
      name: "John",
      age: 42
    }
  };
  
  h.resident.name = "Alice";
  h.resident = {}; // [!code error] 无法为“resident”赋值，因为它是只读属性。
  ```

- <samp>如果一个对象有两个引用，即两个变量指向同一个对象，其中一个变量是只读的，那么修改属性值时，会影响到只读属性</samp>

  ```ts
  interface Person {
    name: string;
    age: number;
  };
  
  interface ReadOnlyPerson {
    readonly name: string;
    readonly age: number;
  };
  
  let w: Person = {
    name: "John",
    age: 42
  };
  
  let r: ReadOnlyPerson = w;
  
  w.age += 1;
  console.log(r.age); // 43
  ```


<samp>**属性名的索引类型**</samp>

<samp>TypeScript 可以声明属性名的索引类型</samp>

- <samp>对象的属性名同时具有数值索引和字符串索引，数值索引必须服从字符串索引，因为内部的数值属性会自动转换为字符串属性</samp>

  ```ts
  type MyType = {
    [x: string]: string;
    [x: number]: number; // [!code error] “number”索引类型“number”不能分配给“string”索引类型“string”。
  }
  ```

- <samp>声明属性名索引，同时声明单个属性名；如果属性名不符合索引范围，会报错；这是因为不能同时存在两个同类型的索引签名</samp>

  ```ts
  type MyType = {
    [x: string]: string;
    foo: boolean; // [!code error] 类型“boolean”的属性“foo”不能赋给“string”索引类型“string”。
  }
  ```

- <samp>属性名的索引类型，应谨慎使用，属性名的声明太宽泛，约束太少</samp>

  > <samp>不适用于声明数组，使用这种方式声明数组，不能使用内部的数组方法和 `length` 属性</samp>
  >
  > ```ts
  > type MyArr = {
  >   [n: number]: number;
  > };
  > 
  > const arr: MyArr = [1, 2, 3];
  > arr.length; // [!code error] 类型“MyArr”上不存在属性“length”。
  > ```

### <samp>**解构赋值**</samp>

<samp>解构赋值的类型声明，和对象一样</samp>

```ts
const { id, name, price }: {
  id: number;
  name: string;
  price: number
} = product;
```

> [!NOTE] <samp>注意</samp>
>
> <samp>无法单独指定解构变量的类型，因为冒号在 JavaScript 中表示指定新变量名</samp>
>
> ```ts
> const obj = { x: 1, y: 2 };
> const { x: number, y: number } = obj; // [!code error] 无法重新声明块范围变量“number”。
> ```
>
> <samp>在实际中使用要特别小心，例如：在函数参数中解构对象</samp>
>
> ```ts
> function draw({
>   shape: Shape,
>   xPos: number = 100
> }) {
>   let myShape = shape; // [!code error] 找不到名称“shape”。你是否指的是“Shape”?
>   let x = xPos; // [!code error] 找不到名称“xPos”。
> }
> ```

## <samp>函数</samp>

<samp>**函数声明**</samp>

- <samp>类型别名</samp>

  ```ts
  type fn = {
    (x: number, y: number): number
  };
  ```

- <samp>`=>` 指定返回值类型</samp>

  ```ts
  type f = (a: number, b: number) => number;
  ```

- <samp>使用 `interface` 简化</samp>

  ```ts
  interface IMult {
    (x: number, y: number): number;
  }
  ```

<samp>**返回值**</samp>

- <samp>`void`：表示没有返回值</samp>

  > <samp>如果函数没有 `return` 语句，推断函数返回值为 `void`</samp>

- <samp>如果不指定类型，TypeScript 会推断参数类型为 `any`</samp>

- <samp>如果变量需要套用另一个函数，可以使用 `typeof`</samp>

  ```ts
  function add(x: number, y: number) {
    return x + y;
  }
  const myAdd: typeof add = (x, y) => {
    return x + y;
  }
  ```

<samp>**Function 类型**</samp>

- <samp>任何函数都属于 `Function` 类型</samp>

- <samp>`Function` 可以接受任意数量参数，每个参数都是 `any`，返回值的类型也是 `any`，表示没有任何约束</samp>

  ```ts
  function doSomething(f: Function) {
    return f(1, 2, 3);
  }
  ```

<samp>**类型推断**</samp>

<samp>箭头函数的参数类型省略了，是靠函数返回值类型 `Person` 去推断类型</samp>

```ts
type Person = { name: string };

const people = ['alice', 'bob', 'jan'].map(
  (name): Person => ({ name })
);
```

> [!NOTE]
>
> <samp>上例中，函数右侧的 `name` 必须被括号包裹，否则会把 `{}` 当做函数体处理</samp>

### <samp>可选参数</samp>

- <samp>参数可缺省：参数的实际类型是原始类型或 `undefined`</samp>

- <samp>函数的可选参数只能在参数列表的尾部，在必选参数之后</samp>


- <samp>如果前面参数可能为空，不能使用可选参数，只能显式注明参数类型可能为 `undefined`，传参时也必须显式传入 `undefined`</samp>

- <samp>函数体内部使用可选参数时，需要判断该参数是否为 `undefined`</samp>

### <samp>参数默认值</samp>

- <samp>如果设置了参数默认值，那就表示这个值就默认是可选参数</samp>

  ```ts
  function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
  }
  ```

- <samp>可选参数和默认值不能同时使用</samp>
- <samp>传参时，如果传入 `undefined`，也会触发默认值</samp>
- <samp>默认值的参数如果不位于参数列表的末尾，调用时不能省略，传参时必须显式地传入 `undefined`</samp>

### <samp>参数解构</samp>

- <samp>数组</samp>

  ```ts
  function fn([x, y]: [number, number]) {
    return x + y;
  }
  ```

- <samp>对象</samp>

  ```ts
  type ISum = { a: number, b: number };
  function sum({ a, b }: ISum) {
    return a + b;
  }
  ```

### <samp>rest 参数</samp>

- <samp>剩余参数为数组</samp>

  ```ts
  function f(...nums: number[]) { }
  ```

- <samp>剩余参数为元组</samp>

  ```ts
  function f(...args: [boolean, number]) { }
  ```

- <samp>剩余参数可以嵌套</samp>

  ```ts
  function f(...args: [boolean, ...string[]]) { }
  ```

- <samp>剩余参数与变量解构</samp>

  ```ts
  function f(...[str, times]: [string, number]): string {
    return str.repeat(times);
  }
  ```

### <samp>readonly</samp>

<samp>在参数类型前加上 `readonly` 关键字，表示只读参数；只读参数只能用在数组和元组</samp>

```ts
function arraySum(
  arr: readonly number[]
) { }
```

### <samp>void</samp>

<samp>`void`：表示函数无返回值</samp>

- <samp>`void` 只允许返回 `undefined` 与 `null`</samp>

  > [!TIP]
  >
  > <samp>打开 `strictNullChecks` 后，只能返回 `undefined`</samp>

- <samp>变量、方法、函数参数返回 `void`，并不代表不能赋值为一个有返回值的函数</samp>

  > <samp>如：数组方法 `Array.prototype.forEach(fn)` 的参数返回值是 `void`；如果与 `push` 使用时，违反了约定；由于该返回值没有作用，因此不报错</samp>
  >
  > ```ts
  > let list = [4, 5, 6];
  > let res: number[] = [];
  > list.forEach(el => res.push(el));
  > ```

- <samp>函数抛出错误的返回值为 `void`</samp>

  ```ts
  function throwErr(): void {
    throw new Error('something wrong');
  }
  ```

### <samp>never</samp>

<samp>`never` 表示一定不会出现返回值，即函数不会结束</samp>

- <samp>抛出错误</samp>

  ```ts
  function fail(msg: string): never {
    throw new Error(msg);
  }
  ```

  > <samp>抛出错误属于 `never` 和 `void` 类型，无法从返回值获取哪一种错误</samp>

- <samp>死循环</samp>

> [!NOTE]
>
> - <samp>`never` 表示函数异常或死循环</samp>
> - <samp>`void` 表示函数正常执行结束或不返回值或返回 `undefined`</samp>

### <samp>函数重载</samp>

<samp>函数重载 (function overload)：根据参数的不同，会有不同的函数行为</samp>

<samp>逐一定义每种情况的类型</samp>

```ts
function add(x: number, y: number): number;
function add(x: any[], y: any[]): any[];
function add(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  }
  throw new Error('wrong parameters');
}
```

> [!NOTE]
>
> - <samp>重载与具体实现之间不能存在其他代码</samp>
>
> - <samp>重载的类型声明和函数实现类型不能冲突</samp>
>
>   ```ts
>   function fn(x: boolean): void; // [!code error] 此重载签名与其实现签名不兼容。
>   function fn(x: string): void;
>   function fn(x: number | string) {
>     console.log(x);
>   }
>   ```
>
> - <samp>重载声明的顺序是按顺序向下检查，宽的声明应该在后面，防止覆盖其他类型声明</samp>
>
> - <samp>对象的方法也可以进行重载</samp>
>
>   ```ts
>   class StringBuilder {
>     #data = '';
>         
>     add(num: number): this;
>     add(bool: boolean): this;
>     add(str: string): this;
>     add(value: any): this {
>       this.#data += String(value);
>       return this;
>     }
>         
>     toString() {
>       return this.#data;
>     }
>   }
>   ```

### <samp>构造函数</samp>

<samp>构造函数的调用必须使用 `new` 关键字</samp>

<samp>类(`class`) 本质上也是构造函数</samp>

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: any) {
    this.name = name;
    this.age = age;
  }
}
```

## <samp>interface</samp>

<samp>接口(interface)：类型约定，对象模板</samp>

- <samp>对象属性</samp>

  - <samp>如果属性可选，在属性名后加上 `?`</samp>
  - <samp>如果属性只读，在属性名前加上 `readonly`</samp>

- <samp>对象属性索引</samp>

  - <samp>属性索引只有 `string`、`number`、`symbol` 三种类型</samp>
  - <samp>一个接口中最多只能有一种同类型索引</samp>
  - <samp>数值型索引必须服从于字符串索引</samp>

- <samp>对象方法</samp>

  - <samp>方法的三种写法</samp>

    ```ts
    interface A {
      f(x: boolean): string;
    }
    interface B {
      f: (x: boolean) => string;
    }
    interface C {
      f: { (x: boolean): string };
    }
    ```

  - <samp>属性名可以采用表达式</samp>

    ```ts
    const f = 'f';
    interface A {
      [f]:(x: boolean): string;
    }
    ```

  - <samp>方法重载</samp>

    ```ts
    interface A {
      f(): number;
      f(x: boolean): boolean;
      f(x: string, y: string): string;
    }
    ```

  - <samp>对象函数重载</samp>

    ```ts
    interface IAdd {
      f(): number;
      f(x: boolean): boolean;
      f(x: string, y: string): string;
    }
    
    function myFun(): number;
    function myFun(x: boolean): boolean;
    function myFun(x: string, y: string): string;
    function myFun(x?: boolean | string, y?: string): number | boolean | string {
      if (x === undefined && y === undefined) return 1;
      if (typeof x === 'boolean' && y === undefined) return true;
      if (typeof x === 'string' && typeof y === 'string') return 'hello';
      throw new Error('wrong parameters');
    };
    const a: IAdd = {
      f: myFun
    }
    ```

- <samp>函数</samp>

- <samp>构造函数</samp>

  ```ts
  interface ErrorConstructor {
    new (message?: string): Error;
  }
  ```

  

### <samp>interface 继承</samp>

- <samp>继承使用 `extends` 关键字其他 `interface`</samp>

  ```ts
  interface Shape {
    name: string;
  }
  
  interface Circle extends Shape {
    radius: number;
  }
  ```

- <samp>允许多重继承</samp>

  ```ts
  interface Style {
    color: string;
  }
  
  interface Shape {
    name: string;
  }
  
  interface Circle extends Style, Shape {
    radius: number;
  }
  ```

- <samp>子接口与父接口存在同名属性时，会覆盖父接口的属性</samp>

  ::: info <samp>前提条件</samp>

  <samp>子接口和父接口的同名属性的类型是兼容的</samp>

  :::

- <samp>继承 `type`：只能继承 `type` 定义的对象</samp>

  ```ts
  type Country = {
    name: string;
    capital: string;
  
  };
  interface CountryWithPop extends Country {
    population: number;
  }
  ```

- <samp>继承 `class`：继承该类的所有成员</samp>

  > [!NOTE]
  >
  > <samp>`interface` 可以继承类的私有成员和保护成员，但是没有意义(类中无法构成父类和子类关系，对象中则无法使用这些私有成员)</samp>

  ```ts
  class A {
    x: string = '';
  
    y(): boolean {
      return true;
    }
  }
  
  interface B extends A {
    z: number
  }
  
  const b: B = {
    x: '',
    y: function () { return true },
    z: 123
  }
  ```

### <samp>接口合并</samp>

- <samp>向全局对象或外部库，添加自定义的属性和方法</samp>

  ```ts
  // TypeScript 中不具有window对象和document对象, 如果需要向其中添加自定义属性
  interface Document {
    foo: string；
  }
  document.foo = 'hello';
  ```

- <samp>同名接口合并时，同名属性的类型不能有冲突</samp>

- <samp>同名接口合并时，同名方法类型声明不同，会发生函数重载</samp>

  ::: code-group

  ```ts[index.ts]
  interface Document {
    createElement(tagName: any): Element;
  }
  interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
  }
  interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
  }
  ```

  ```ts[函数重载]
  interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
  }
  ```

  :::

  > [!NOTE]
  >
  > <samp>字面量会具有更高的优先级，字面量会在函数重载之前</samp>
  >
  > ```ts
  > interface A {
  >   f(x: 'foo'): boolean;
  >   f(x: any): void;
  > }
  > ```

- <samp>如果两个 `interface` 组合的联合类型存在同名属性，那么该属性也是联合类型</samp>

  ```ts
  interface Circle {
    area: bigint;
  }
  
  interface Rectangle {
    area: number;
  }
  
  declare const s: Circle | Rectangle;
  ```

### <samp>interface 与 type</samp>

<samp>相同点：都可以作为类型别名</samp>

<samp>**不同点**</samp>

- <samp>`type` 可表示非对象类型，`interface` 只能表示对象类型(数组、函数等)</samp>

- <samp>继承</samp>

  - <samp>`type` 的继承：使用 `&` 运算符</samp>

    ```ts
    interface Foo { x: number };
    type Bar = Foo & { y: string; };
    ```

  - <samp>`interface` 的继承：使用 `extends` 关键字</samp>

    ```ts
    type Foo = { x: number };
    interface Bar extends Foo { y: string; }
    ```

- <samp>同名的 `interface` 会自动合并，同名 `type` 会报错</samp>

- <samp>`interface` 不能映射；`type` 可以映射</samp>

  ```ts
  interface Point {
    x: number;
    y: number;
  }
  
  type PointCopy1 = {
    [Key in keyof Point]: Point[Key];
  };
  ```

- <samp>`this` 只能用于 `interface`</samp>

  ```ts
  // 正确
  interface Foo {
    add(num: number): this;
  };
  
  // 报错
  type Bar = {
    add(num: number): this; // [!code error] "this" 类型仅在类或接口的非静态成员中可用。
  };
  ```

- <samp>`type` 可以扩展原始数据</samp>

  ```ts
  type MyStr = string & {
    type: 'new'
  };
  ```

- <samp>`interface` 无法表达某些复杂类型 (比如交叉类型和联合类型)，但是 `type` 可以</samp>

## <samp>类</samp>

<samp>类(class)是面向对象编程的基本构建，封装了属性和方法</samp>

- <samp>支持顶层声明属性及其类型</samp>

- <samp>如果打开了 `strictPropertyInitialization`(默认打开)，会检测属性是否设置了初值，未设置初值会报错</samp>

  > <samp>`!`：非空断言</samp>
  >
  > ```ts
  > class Point {
  >   x!: number;
  >   y!: number;
  > }
  > ```

- <samp>`readonly` 表示属性只读</samp>

  ```ts
  class A {
    readonly id: string;
  
    constructor() {
      this.id = 'bar';
    }
  }
  ```

### <samp>方法</samp>

<samp>方法与普通函数、类的声明方式一致</samp>

> <samp>构造函数不能声明返回值，它的返回值是实例对象</samp>

- <samp>参数默认值</samp>

  ```ts
  class Point {
    x: number;
    y: number;
  
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }
  ```

- <samp>函数重载</samp>

  ```ts
  class Point {
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: number | string, y?: string) {
    }
  }
  ```

### <samp>存储器方法</samp>

<samp>存储器(accessor)是特殊的类方法，包括取值器(getter)和存值器(setter)</samp>

<samp>取值器用来读取属性，存值器用来写入属性</samp>

```ts
class C {
  _name = '';
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
```

- <samp>如果只有 `get`，没有 `set`，那么该属性自动转为只读属性</samp>

- <samp>`get` 和 `set` 可访问性必须一致，要么都为公开方法，要么都为私有方法</samp>

