# <samp>TypeScript</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>为什么选择 TypeScript?</samp>

- <samp>**JS 动态类型在执行过程中**进行类型匹配，JS 弱类型会在执行时进行隐式类型转换</samp>

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
   bun init -y
   ```

   :::

2. <samp>`tsc`：安装类型编译器</samp>

   ```sh
   npm i -g typescript
   
   # 生成ts配置文件
   tsc --init
   ```

   ::: details <samp>参考：[tsconfig.json](https://www.typescriptlang.org/tsconfig/)</samp>

   ::: code-group

   ```json[pnpm.tsconfig.json]
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

   ```json[bun.tsconfig.json]
   {
     "compilerOptions": {
       // Environment setup & latest features
       "lib": ["ESNext"],
       "target": "ESNext",
       "module": "Preserve",
       "moduleDetection": "force",
       "jsx": "react-jsx",
       "allowJs": true,
   
       // Bundler mode
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "verbatimModuleSyntax": true,
       "noEmit": true,
   
       // Best practices
       "strict": true,
       "skipLibCheck": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedIndexedAccess": true,
       "noImplicitOverride": true,
   
       // Some stricter flags (disabled by default)
       "noUnusedLocals": false,
       "noUnusedParameters": false,
       "noPropertyAccessFromIndexSignature": false,
     },
   }
   ```

   :::

3. <samp>依赖项</samp>

   ::: code-group

   ```sh[pnpm]
   # ts 官方类型库, 包含对 JS 代码的类型描述
   pnpm i -D @types/node
   
   # ts 执行引擎, 直接运行而无需编译
   pnpm i -D ts-node
   
   # 监听文件变化, 自动启动 node 程序
   pnpm i -D nodemon
   ```

   ```sh[bun]
   bun add -d @types/bun
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

## <samp>基本类型</samp>

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
> - <samp>首字母大写的 `Number`、`Boolean`、`String` 等是 JavaScript 内置包装对象类型，而不是类型名称</samp>
>
> - <samp>`undefined` 和 `null` 既可以作为值，也可以作为类型</samp>
>
>   <samp>作为值时，任何其他类型的变量都可以赋值为 `undefined` 和 `null`</samp>
>
>   ```ts
>   const obj: object = undefined;
>   obj.toString(); // [!code highlight] 在编译阶段不报错, 在运行阶段报错。不能将类型“undefined”分配给类型“object”。
>   ```
>

::: warning 

<samp>如果没有声明类型的变量，被赋值为 `undefined` 或 `null`，在关闭 `noImplicitAny` 和 `strictNullChecks` 时，类型将被推断为 `any`</samp>

:::

<samp>开启 `strictNullChecks` 后，`undefined` 和 `null` 只能赋值给自身、`any`、`unknown`</samp>

::: code-group

```json[tsconfig.json]
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

:::

### <samp>symbol</samp>

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

<samp>`any` 可以看作是所有其他类型的全集，TypeScript 将这种类型称为"顶层类型(top type)"</samp>

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

<samp>单个值也是一种类型，称为"值类型"</samp>

- <samp>声明值类型，就表示为固定值</samp>

- <samp>**类型推断**：如果使用 `const` 声明，没有注明类型，就推断该变量是值类型</samp>

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

## <samp>联合类型</samp>

<samp>联合类型(union types)：多个类型组成一个新类型，符号 `|`</samp>

- <samp>联合类型与值类型联合</samp>

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
    if (typeof id === 'string') {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }
  ```
  
  > [!TIP]
  >
  > <samp>事实上，"联合类型"可以看作是"类型放大"(type windening)，处理时需要"类型缩小(type narrowing)"处理</samp>
  >
  > <samp>"类型缩小"是 TypeScript 处理联合类型的标准方法，凡是在多种类型的场合，都需进行类型缩小再处理</samp>

## <samp>交叉类型</samp>

<samp>交叉类型(intersection types)：多个类型组成的一个新类型，符号：`&`</samp>

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

