# <samp>TypeScript</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

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
   - <samp>`noImplicitUseStrict`：编译结果中不包含 `'use strict'`</samp>
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

  - <samp>通过 `Symbol()` 函数生成，每一个 Symbol 值都是独一无二的</samp>

    ```ts
    let x: symbol = Symbol();
    ```

  - <samp>`unique symbol`：表示单个的、某个具体的 Symbol 值</samp>

    ```ts
    // unique symbol只能使用const声明
    const x: unique symbol = Symbol();
    
    // const声明的symbol类型是unique symbol类型
    const x = Symbol();
    
    // 如果需要写成同一个unique symbol类型, 只能写成typeof x
    const a: unique symbol = Symbol();
    const b: typeof a = a; 
    
    // Symbol.for(): 返回相同的 Symbol 值(虽然值是相等的，但是引用完全不同)
    const a: unique symbol = Symbol.for('foo');
    const b: unique symbol = Symbol.for('foo');
    ```



- <samp>`undefined`：未定义</samp>

- <samp>`null`：空</samp>

  > [!NOTE]
  >
  > - <samp>`symbol` 和 `bigint` **无法直接获取它们的包装对象**</samp>
  >
  > - <samp>`null` 和 `undefined` 是所有类型的子类型，可以赋值给任意类型</samp>
  > - <samp>**编译选项**开启 `strictNullChecks` 后，`undefined` 和 `null` 只能赋值给自身、`any`、`unknown`</samp>

<samp>**类型约束**：常用于约束**变量**、**函数参数**、**函数返回值**</samp>

```ts
const q: string = 'string';
const w: number = 1;
const e: boolean = true;
const r: null = null;
const t: undefined = undefined;
```

## <samp>object</samp>

- <samp>`object`：**非原始类型**；包含**对象**、**数组**和**函数**</samp>

  > <samp>**非原始类型**：除了 `number`、`string`、`boolean`、`symbol`、`bigint`、`null`、`undefined` 之外的任何类型</samp>

- <samp>`Object`：所有可转换为对象值的构造函数；简写形式：`{}`</samp>

  > <samp>除了 `undefined`、`null`</samp>
  >
  > - <samp>`boolean`、`string`、`number`、`bigint`、`symbol`</samp>
  
  ```ts
  let obj: Object;
  
  obj = true;
  obj = 'hi';
  obj = 1;
  obj = { foo: 123 };
  obj = [1, 2, 3];
  obj = (a: number) => { a + 1 };
  ```

### <samp>对象</samp>

<samp>声明了对象类型，赋值时不能缺少指定属性，也不能有多余的属性</samp>

```ts
type Obj1 = {
  x:number;
  y:number;
};

interface Obj2 {
  x: number;
  y: number;
}
```

#### <samp>可选属性</samp>

- <samp>可选属性等同于 undefined，在属性名前使用 `?` 表示</samp>

  ```ts
  type User = { name?: string; }
  let user: User = {};
  ```

- <samp>读写可选属性前，需要先判断是否为 `undefined`</samp>

  ::: code-group

  ```ts[===运算符]
  if (user.name === undefined) {
    user.name = 'Alice';
  }
  ```

  ```ts[?:运算符]
  (user.name === undefined) ? 'Alice' : user.name;
  ```

  ```ts[空值合并运算符]
  user.name ?? 'Alice';
  ```

  :::

- <samp>如果打开 `"exactOptionalPropertyTypes"` 和 `"strictNullChecks"` 选项，则可选属性不能设为 `undefined` </samp>

  ::: code-group

  ```ts[tsconfig.json]
  {
    "compilerOptions": {
      "strictNullChecks": true,
      "exactOptionalPropertyTypes": true,   
    }
  }
  ```

  :::

#### <samp>只读属性</samp>

<samp>属性名前加上 `readonly` 关键字，表示只读属性，不能修改</samp>

- <samp>只读属性值只能在初始化期间赋值，此后不能修改该属性</samp>

- <samp>`readonly` 修饰符并不禁止修改该对象的属性，只是禁止完全替换该对象</samp>

  ```ts
  interface Home {
    readonly resident: {
      name: string;
      age: number;
    }
  }
  
  const h: Home = {
    resident: {
      name: "Alice",
      age: 17
    }
  }
  
  h.resident = { name: 'Kate' }; // [!code --] 无法为“resident”赋值，因为它是只读属性。
  h.resident.age = 18; // [!code ++]
  ```

- <samp>如果一个对象有两个引用，那么修改其中一个，会影响只读变量</samp>

  ```ts
  interface Person { name: string; age: number; }
  interface ReadonlyPerson { readonly name: string; readonly age: number; }
  
  let w: Person = { name: 'Vicky', age: 42 };
  let r: ReadonlyPerson = w;
  w.age += 1;
  
  console.log(w.age); // 43
  console.log(r.age); // [!code warning] 43
  ```


#### <samp>索引类型</samp>

- <samp>同名索引的属性名的类型可以不同，但是必须优先服从字符串类型</samp>

  ```ts
  type MyType = {
    [x: string]: string;
    [x: number]: string; // ✅
  }
  ```

- <samp>同名索引的属性值的类型必须相同</samp>

  ```ts
  type MyType = {
    [x: string]: string;
    [x: number]: number; // [!code error] “number”索引类型“number”不能分配给“string”索引类型“string”。
  }
  ```

#### <samp>对象解构</samp>

- <samp>解构赋值</samp>

  ```ts
  let product = { id: '1', name: 'cup', price: 3 }
  
  const { id, name, price }: {
    id: string;
    name: string;
    price: number
  } = product;
  ```

- <samp>为解构的属性命名</samp>

  ```ts
  let obj = { x: 'Hello', y: 1 };
  
  let { x: foo, y: bar }
    : { x: string; y: number } = obj;
  
  console.log(foo, bar);
  ```



### <samp>数组</samp>

- <samp>**字面量**：「类型+方括号」</samp>
- <samp>**泛型**：`Array<T>`</samp>

  > <samp>建议少用泛型的形式声明数组，因为在 React 中尖括号会被识别为组件</samp>

#### <samp>只读数组</samp>

- <samp>字面量加上 `readonly` 关键字</samp>

  ```ts
  const arr: readonly number[] = [0, 1];
  ```

- <samp>泛型</samp>

  ```ts
  const a1: ReadonlyArray<number> = [0, 1];
  
  const a2: Readonly<number[]> = [0, 1];
  ```

#### <samp>多维数组</samp>

<samp>使用 `T[][]` 声明二维数组</samp>

```ts
var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25]
];
```

#### <samp>元组</samp>

<samp>元组(tuple)：元组必须声明每个成员的类型</samp>

- <samp>`?`：表示该成员可选；可选成员必须在必选成员之后</samp>

  ```ts
  type tuple = [number, string?];
  ```

- <samp>`...`：扩展运算符，表示不限成员数量的元组</samp>

  ```ts
  type tuple = [number, ...string[]];
  ```

- <samp>元组可以通过方括号读取类型</samp>

  ```ts
  type Tuple = [string, number, Date];
  type TupleEl = Tuple[number]; // type TupleEl = string | number | Date
  ```

### <samp>函数</samp>

```ts
type mult1 = (x: number, y: number) => number;

type mult2 = { (x: number, y: number): number }

interface mult3 { (x: number, y: number): number; }
```

#### <samp>可选参数</samp>

<samp>**可选参数**：在参数末尾加上 `?` 实现可选参数</samp>

- <samp>函数体使用可选参数时，需要先判断该参数是否为 `undefined`</samp>
- <samp>可选参数必须在必选参数之后</samp>
- <samp>可选参数与显式 `undefined` 不同：可选参数可以省略，`undefined` 必须显式传参</samp>

  ```ts
  type F2 = (a: number, b: number | undefined) => number;
  let f2: F2 = (x, y) => {
    return x + (y ?? 0);
  }
  f2(1); // [!code --] 应有 2 个参数，但获得 1 个。
  f2(1, undefined); // [!code ++]
  ```

#### <samp>默认参数</samp>

<samp>**默认参数**：提供一个默认值，当用户没有传递该参数或传递值为 `undefined` 时，默认初始化值的参数</samp>

<samp>如果默认参数在必选参数之前，调用时必须显式传入 `undefined`</samp>

```ts
function add(x: number = 0, y: number) {
  return x + y;
}

add(1); // [!code --] 应有 2 个参数，但获得 1 个。
add(undefined, 1); // [!code ++] 
```

#### <samp>参数解构</samp>

- <samp>数组</samp>

  ```ts
  type A = [x: number, y: number];
  function sum([a, b]: A) {
    return a + b;
  }
  ```

- <samp>对象</samp>

  ```ts
  type A = { x: number; y: number };
  function sum({ x, y }: A) {
    return x + y;
  }
  ```

#### <samp>rest</samp>

- <samp>`rest` 可以嵌套</samp>

  ```ts
  function f(...args: [boolean, ...string[]]) { }
  ```

- <samp>`rest` 可以结合解构使用</samp>

  ```ts
  function repeat(...[str, times]: [string, number]): string {
    return str.repeat(times);
  }
  ```

#### <samp>readonly</samp>

<samp>`readonly` 表示只读参数，函数内部无法修改</samp>

```ts
function arraySum(arr: readonly number[]) { }
```



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

## <samp>其他类型</samp>

- <samp>**联合类型**(union types)：多种类型任选其一；符号 `|`</samp>

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

- <samp>`unknown`：表示类型不确定，可能是任意类型；(严格的 `any`)，也是"**顶层类型**"(top type)</samp>

  > [!NOTE]
  >
  > - <samp>`unknown` 类型的变量不能直接赋值给其他类型变量 (除了 `any` 和 `unknown`)</samp>
  >
  >
  > - <samp>不能直接调用 `unknown` 类型变量的方法和属性</samp>
  >
  >
  > - <samp>`unknown` 类型能进行的运算是有限的，只能进行比较运算 (`==`, `===`, `!=`, `!==`, `||`, `&&`，`?`, `typeof`, `instanceof`)</samp>

## <samp>扩展类型</samp>

### <samp>类型别名</samp>

<samp>`type`：类型别名；相当于 C++ 中的 `typedef`</samp>

- <samp>类型别名具有块级作用域</samp>

  ```ts
  function hello(txt: string) {
    type msg = string;
    let newTxt: msg = 'Hello' + txt;
    return newTxt;
  }
  const newTxt: msg = hello('world'); // [!code error] 找不到名称“msg”。
  ```

- <samp>类型别名不允许重名</samp>

- <samp>别名支持表达式，允许嵌套</samp>

  ```ts
  type World = "world";
  type Greeting = `hello ${World}`;
  ```



### <samp>枚举</samp>

<samp>`enum`：定义一组带名称的常量，在编译结果中**表现为对象**</samp>

> <samp>**表现为对象**</samp>
>
> - <samp>可以使用方括号运算符或点运算符调用对象的属性</samp>
>
> - <samp>不能出现与 enum 结构同名的变量</samp>

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

- <samp>枚举字段值可以是字符串、数字(不能是 `bigint`)、表达式</samp>

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

- <samp>枚举的成员值是只读的，不能重新赋值(建议在声明时加上 `const` 修饰)</samp>

  ```ts
  const enum Color {
    Red,
    Green,
    Blue
  }
  ```

- <samp>枚举可以混合，但尽量不要即出现字符串字段，又出现数字字段</samp>

- <samp>枚举可以合并</samp>

  - <samp>首个成员的值可以省略初始值</samp>
  - <samp>不能有同名的成员</samp>

- <samp>`keyof`：取出枚举中的所有成员的名，作为联合类型返回</samp>

  ```ts
  enum MyEnum {
    A = 'a',
    B = 'b'
  }
  
  type Foo = keyof typeof MyEnum; // type Foo = "A" | "B"
  ```

- <samp>`in`：取出索引</samp>

  ```ts
  enum MyEnum {
    A = 'a',
    B = 'b'
  }
  for (let key in MyEnum) {
    console.log(key); // A B
  }
  ```

- <samp>**反向映射**：通过成员值获取成员名</samp>

  ```ts
  enum Direction {
      Up = 1,
      Down,
      Left,
      Right
  }
  console.log(Direction[3]); // Left
  ```

  <samp>**原理**：两段赋值</samp>

  ```ts
  Direction[Direction["Up"] = 0] = "Up";
  
  // 等价于
  Direction["Up"] = 0
  Direction[0] = "Up";
  ```

  > <samp>字符串不存在反向映射</samp>

#### <samp>枚举与值类型比较</samp>

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

- <samp>`interface` 可以继承 `type` 定义的对象类型</samp>

  ```ts
  type A = {
    name: string;
    capital: string;
  };
  
  interface B extends A {
    population: number;
  }
  ```

- <samp>`interface` 可以继承 `class`</samp>

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

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

- <samp>参数默认值</samp>

  ::: code-group

  ```ts[index.ts]
  // 在参数中初始化默认值
  class User {
    name: string;
    age: number;
    gender: "男" | "女" = "男";
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  ```

  ```ts[index.ts]
  // 在构造函数中初始化默认值
  class User {
    name: string;
    age: number;
    gender: "男" | "女";
  
    constructor(name: string, age: number, gender: "男" | "女" = "男") {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  ```

  :::

  > <samp>检查是否设置初值</samp>
  >
  > ::: code-group
  >
  > ```json[tsconfig.json]
  > {
  >   "compilerOptions": {
  >   	"strictPropertyInitialization": true;
  >   },
  > }
  > ```
  >
  > :::

- <samp>可选属性：`?`</samp>

- <samp>访问修饰符，控制类中的某个成员的访问权限</samp>

  - <samp>`public`：公共的(默认)</samp>
  - <samp>`private`：私有的；只在类中范围内可用</samp>
  - <samp>protected：</samp>

## <samp>类型推断</samp>

<samp>类型声明不是必需的，如果没有，TypeScript 会自己推断类型</samp>

- <samp>`any`：如果无法推断出类型，TypeScript 就会认为该变量的类型是 `any`</samp>

  > <samp>`noImplicitAny` 选项：不允许隐式 `any`</samp>

- <samp>`never`</samp>

  - <samp>联合类型</samp>
  - <samp>抛出错误的函数</samp>
  - <samp>无限执行的函数</samp>

- <samp>`symbol`</samp>

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

- <samp>数组：如果初始值是空数组，推断为 `any[]`</samp>

- <samp>`void`：函数返回 `undefined` 或 `null`</samp>

## <samp>类型保护</samp>

<samp>**类型保护**：通常情况下，可以通过 `typeof` 触发类型保护</samp>

## <samp>类型断言</samp>

<samp>允许绕过编译器的类型检查</samp>

- <samp>`<T>value`</samp>
- <samp>`value as T`</samp>

```ts
// 类型断言的条件: 值的实际类型是 T 的子类型，或 T 是值的子类型
const p1: { x: number } = { x: 0, y: 0 } as { x: number; y: number };

// 类型断言不应该滥用, 可能留下安全隐患
const data: object = {
  a: 1, b: 2, c: 3
};
console.log((data as Array<string>).length);

// 类型断言的作用: 指定未知类型的变量具体类型
const value: unknown = 'Hello World!';
const s1: string = value as string;
```

### <samp>as const</samp>

<samp>`as const`：类型推断时，将变量断言为**值类型**</samp>

- <samp>`as const` 只能用于字面量，不能用于变量</samp>
- <samp>`as const` 无法用于表达式</samp>
- <samp>`as const` 的前置形式(`<const>val`)</samp>

```ts
// as const 将数组断言成只读元组
const arr = [1, 2, 3] as const; // const arr: readonly [1, 2, 3]

// as const 断言枚举成员
enum f { x, y };
let e = f.x as const; 
```

### <samp>非空断言</samp>

<samp>**非空断言**：符号 `!`；针对可能为空的变量(即 `undefined` 与 `null`)</samp>

::: code-group

```ts[非空断言运算符]
function f(x: number | null) {
  console.log(x!.toFixed());
}
```

```ts[typeof]
function f(x: number | null) {
  if (typeof x !== 'number') {
    throw new Error('Not a number');
  }
  console.log(x.toFixed)
}
```

:::

<samp>非空断言在类中，表示类的属性初始化时有初始值</samp>

```ts
class Point {
  x!: number;
  y!: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

### <samp>断言函数</samp>

<samp>`asserts` 语句等同于 `void`</samp>

```ts
type AccessLevel = 'r' | 'w' | 'rw';

function allowsReadAccess(level: AccessLevel): asserts level is 'r' | 'rw' {
  if (!level.includes('r')) {
    throw new Error('Read not allowed');
  }
}
```

<samp>`NonNullable<T>`：表示类型 `T` 去除空以后的剩余类型</samp>

```ts
function assertIsDefined<T>(
  value: T
): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}
```

<samp>`asserts x`：断言为真，即不为 `undefined`、`null`、`false` ，断言函数的简写形式</samp>

```ts
function assertIsDefined(x: unknown): asserts x {
  if (!x) {
    throw new Error("x is not defined");
  }
}
```

## <samp>模块</samp>

<samp>TS 支持所有的 ES 模块语法(即 `import`、`export` 语句)</samp>

- <samp>如果希望一个文件作为模块(变量不暴露)，在脚本顶部加上一行</samp>

  ```ts
  export {};
  ```

- <samp>TS 允许输出和输入类型</samp>

  ::: code-group

  ```ts[a.ts]
  // export type Bool = true | false;
  
  type Bool = true | false;
  export { Bool };
  ```

  ```ts[b.ts]
  import { Bool } from './a';
  let foo: Bool = true;
  ```

  :::

### <samp>commonjs</samp>

<samp>如果编译结果是 commonjs 模块，导出的声明是 `exports` 属性，默认导出会变成 `exports` 的 `default` 属性</samp>

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
