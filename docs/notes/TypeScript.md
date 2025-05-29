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
   - <samp>`noImplicitUseStrict`：编译结果中不包含 `"use strict"`</samp>
   - <samp>`removeComments`：编译结果不包含注释</samp>
   - <samp>`noEmitOnError`：错误时不生成编译结果</samp>

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
  > - <samp>`symbol` 和 `bigint` **无法直接获取它们的包装对象**</samp>
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

## <samp>其他类型</samp>

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

  > <samp>`never` 是"**底层类型**(bottom type)"，任何其他类型共有的</samp>

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

- <samp>`unknown`：表示类型不确定，可能是任意类型；(严格的 `any`)</samp>

  > [!NOTE]
  >
  > - <samp>`unknown` 类型的变量不能直接赋值给其他类型变量 (除了 `any` 和 `unknown`)</samp>
  >
  >
  > - <samp>不能直接调用 `unknown` 类型变量的方法和属性</samp>
  >
  >
  > - <samp>`unknown` 类型能进行的运算是有限的，只能进行比较运算 (`==`, `===`, `!=`, `!==`, `||`, `&&`，`?`, `typeof`, `instanceof`)</samp>

## <samp>object</samp>

- <samp>`object`：**非原始类型**；包含**对象**、**数组**和**函数**</samp>

  > <samp>**非原始类型**：除了 `number`、`string`、`boolean`、`symbol`、`bigint`、`null`、`undefined` 之外的任何类型</samp>

- <samp>`Object`：所有可转换为对象值的构造函数；简写形式：`{}`</samp>

  > <samp>除了 `undefined`、`null`</samp>
  >
  > ```ts
  > let obj: Object;
  > 
  > obj = true;
  > obj = 'hi';
  > obj = 1;
  > obj = { foo: 123 };
  > obj = [1, 2, 3];
  > obj = (a: number) => { a + 1 };
  > ```

### <samp>对象</samp>

- `type`
- `interface`

### <samp>数组</samp>

- <samp>**字面量**：「类型+方括号」</samp>
- <samp>**泛型**</samp>

### <samp>函数</samp>

#### <samp>可选参数</samp>

<samp>**可选参数**：在参数末尾加上 `?` 实现可选参数</samp>

- <samp>函数体使用可选参数时，需要先判断该参数是否为 `undefined`</samp>
- <samp>可选参数必须在必选参数之后</samp>

#### <samp>默认参数</samp>

<samp>**默认参数**：提供一个默认值，当用户没有传递该参数或传递值为 `undefined` 时，默认初始化值的参数</samp>

<samp>如果默认参数在必选参数之前，调用时必须显式传入 `undefined`</samp>

#### <samp>函数重载</samp>

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

## <samp>扩展类型</samp>

### <samp>类型别名</samp>

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

### <samp>枚举</samp>

<samp>`enum`：定义一组带名称的常量，在编译结果中表现为对象</samp>

::: code-group

```ts[index.ts]
enum Gender {
  male = '男',
  female = '女'
};
```

```js[index.js]
var Gender;
(function (Gender) {
    Gender["Male"] = "\u7537";
    Gender["Female"] = "\u5973";
})(Gender || (Gender = {}));

export {};
```

:::

<samp>**枚举规则**</samp>

- <samp>枚举字段值只能为字符串、数字</samp>

- <samp>数字枚举的值会自增，默认值从 0 开始</samp>

  ::: code-group

  ```ts[index.ts]
  enum Direction {
      Up,
      Down,
      Left,
      Right
  }
  ```

  ```js[index.js]
  var Direction;
  (function (Direction) {
      Direction[Direction["Up"] = 0] = "Up";
      Direction[Direction["Down"] = 1] = "Down";
      Direction[Direction["Left"] = 2] = "Left";
      Direction[Direction["Right"] = 3] = "Right";
  })(Direction || (Direction = {}));
  export {};
  ```

  :::

- <samp>枚举中尽量不要出现字符串字段，又出现数字字段</samp>

<samp>**值类型**</samp>

- <samp>**值类型**在类型约束时会产生重复代码</samp>

  ```ts
  type gender = '男' | '女';
  ```

- <samp>**值类型**逻辑含义何真实值产生混淆，需要修改大量代码</samp>

- <samp>**值类型**不会产生在编译结果</samp>

#### <samp>枚举的位运算</samp>

```ts
enum Permission {
  Read = 1,
  Write = 2,
  Create = 3,
  Delete = 4
}

// 1. 组合
let p: Permission = Permission.Read | Permission.Write;

// 2. 判断
function hasPermission(target: Permission, per: Permission) {
  return (target && per) === per;
}

// 3. 删除
p = p ^ Permission.Write;
```

### <samp>接口</samp>

<samp>`interface`：约束类、对象、函数的类型约定</samp>

- <samp>约束对象</samp>

  ```ts
  interface IBytedancer {
    readonly jobId: number; // 只读属性
    name: string;
    sex: 'man' | 'woman' | 'other';
    age: number;
    hobby?: string; // 可选属性
    [key: string]: any; // 任意类型
  };
  ```

- <samp>约束函数</samp>

  ::: code-group

  ```ts[interface]
  interface IMult {
    (x: number, y: number): number;
  };
  
  interface IMult {
    sum: (x: number, y: number) => number;
  }
  ```

  ```ts[type]
  type IMult = {
    (x: number, y: number): number;
  };
  
  type IMult = {
    sum: (x: number, y: number) => number;
  }
  
  type sum = (x: number, y: number) => number;
  ```

  :::

#### <samp>接口继承</samp>

- <samp>使用 `extends` 关键字继承其他的 `interface`</samp>

  ```ts
  interface A {
    T1: string;
  }
  
  interface B extends A {
    T2: number;
  }
  ```

- <samp>`interface` 允许多重继承</samp>

  ```ts
  interface A {
    T1: string;
  }
  
  interface B {
    T2: number;
  }
  
  interface C extends A, B {
    T3: boolean;
  }
  ```

- <samp>`interface` 继承 `type` 定义的对象类型</samp>

  ```ts
  type A = {
    name: string;
    capital: string;
  };
  
  interface B extends A {
    population: number;
  }
  ```

- <samp>`interface` 继承 `class`</samp>

  ```ts
  class A {
    x: string = '';
    y(): boolean {
      return true;
    }
  };
  
  interface B extends A {
    z: number;
  };
  ```

#### <samp>interface 与 type</samp>

- <samp>同名的 `interface` 会合并</samp>

- <samp>`interface` 可以继承其他类型，而 `type` 的继承需要依赖 `&` 运算符</samp>

  - <samp>`interface` 子接口不能覆盖父接口(不能具有同名的成员)</samp>

    ```ts
    interface A {
      foo: number;
    };
    
    interface B extends A {
      foo: string; // [!code error] 接口“B”错误扩展接口“A”。属性“foo”的类型不兼容。不能将类型“string”分配给类型“number”。
      bar: number;
    };
    ```
  - <samp>`type` 使用交叉类型继承会将相同成员交叉</samp>

    ```ts
    type A = {
      str: string;
    }
    
    type B = {
      str: number;
    } & A;
    
    let s: B = {
      str: 1, // [!code error] 不能将类型“number”分配给类型“never”。
    }
    ```

- <samp>`interface` 不能包含属性映射，而 `type` 可以</samp>

  ```ts
  interface Point {
    x: number;
    y: number;
  }
  
  type PointCopy1 = {
    [Key in keyof Point]: Point[Key];
  };
  ```

- <samp>`this` 关键字只能用于 `interface`</samp>

  ```ts
  interface Foo {
    add(num: number): this;
  };
  ```
- <samp>`type` 只能表示非对象类型，`interface` 只能表示对象(数组、函数、对象、类等)</samp>

- <samp>`type` 可以扩展复杂类型(联合类型和交叉类型)</samp>

### <samp>类</samp>



## <samp>模块</samp>

- <samp>如果编译结果是 commonjs 模块，导出的声明是 `exports` 属性，默认导出会变成 `exports` 的 `default` 属性</samp>

  <samp>导出</samp>

  ::: code-group

  ```ts[myModule.ts]
  export const name = "Kevin";
  export function sum(a: number, b: number) {
    return a + b;
  }
  export default function (){
    console.log("Hello World!")
  }
  ```

  ```js[myModule.js]
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.name = void 0;
  exports.sum = sum;
  exports.default = default_1;
  exports.name = "Kevin";
  function sum(a, b) {
      return a + b;
  }
  function default_1() {
      console.log("Hello World!");
  }
  ```

  :::

  <samp>导入</samp>

  ::: code-group

  ```ts[index.ts]
  import sayHello, { name, sum } from './myModule'
  console.log(name)
  console.log(sum(3, 4))
  sayHello();
  ```

  ```js[index.js]
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const myModule_1 = require("./myModule");
  console.log(myModule_1.name);
  console.log((0, myModule_1.sum)(3, 4));
  (0, myModule_1.default)();
  ```

  :::

- <samp>解决默认导出的问题</samp>

  - <samp>方法一</samp>

    ```ts
    import fs from 'fs'; // [!code error] 模块“"fs"”没有默认导出。
    
    import * as fs from 'fs'; // ✅
    ```

  - <samp>方法二</samp>

    ::: code-group

    ```json[tsconfig.json]
    {
      "compilerOptions": {
        "target": "ES2016",
        "module": "CommonJS",
        "lib": ["ES2016"],
        "esModuleInterop": true // [!code ++]
      }
    }
    ```

    ```ts[index.ts]
    import fs from 'fs'; // ✅
    ```

    :::

<samp>**TS 中的 commonjs**</samp>

<samp>在 TS 中的 commonjs 语法没有类型推断，建议使用 `import`</samp>

```ts
const myModule = require ('./myModule'); // [!code --]
import myModule = require ('./myModule'); // [!code ++]
```

### <samp>模块解析</samp>

- <samp>classic：递归查找模块</samp>
- <samp>bundler：bundler 模式，使用打包工具解析规则，在打包过程中将所有模块打包成一个文件</samp>
- <samp>node：查找本地 node_modules，再查找库 </samp>



## <samp>symbol</samp>

<samp>Symbol 值通过 `Symbol()` 函数生成，每一个 Symbol 值都是独一无二的</samp>

> <samp>symbol 类型无法表示某一具体的 Symbol 值，即 Symbol 值无法通过字面量表示</samp>

```ts
let x: symbol = Symbol();
let y: symbol = Symbol();
```

### <samp>unique symbol</samp>

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

<samp>`never` 类型可以赋值给任意其他类型</samp>

::: info <samp>为什么 `never` 可以赋值给任意类型</samp>

- <samp>集合论：空集是任何集合的子集</samp>

- <samp>`never` 是任何其他类型共有的，TypeScript 称其为"底层类型 (bottom type)"</samp>

<samp>TypeScript 有两个"顶层类型 (`any` 和 `unknown`)"，只有一个"底层类型 (`never`)"</samp>

:::
