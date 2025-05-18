# <samp>TypeScript</samp>

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

   ```sh
   # 初始化
   pnpm init
   ```

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

   ```sh
   # ts 官方类型库, 包含对 JS 代码的类型描述
   pnpm i -D @types/node
   
   # ts 执行引擎, 直接运行而无需编译
   pnpm i -D ts-node
   
   # 监听文件变化, 自动启动 node 程序
   pnpm i -D nodemon
   ```

   ::: code-group

   ```json[package.json]
   {
     "scripts": {
       "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts"
     },
   }
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

::: warning <samp>如果没有声明类型的变量，被赋值为 `undefined` 或 `null`，关闭 `noImplicitAny` 和 `strictNullChecks` 时，类型将被推断为 `any`</samp>

```ts
let a = undefined; // any
let b = undefined; // any

let c = null; // any
let d = null; // any
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

<samp>`unknown`：表示类型不确定，可能是任意类型；( 严格版的 `any` )</samp>

<samp>`unknown` 和 `any` 的相似之处：所有类型的值都可以分配给 `unknown`</samp>

<samp>不同之处</samp>

- <samp>避免污染问题：`unknown` 类型的变量不能直接赋值给其他变量 ( 除了 `any` 和 `unknown` )</samp>

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

- <samp>`unknown` 类型能进行的运算是有限的，只能进行比较运算 ( `==`, `===`, `!=`, `!==`, `||`, `&&`，`?`, `typeof`, `instanceof`)</samp>

  ```ts
  let a:unknown = 1;
  
  a + 1; // [!code error]“a”的类型为“未知”。
  ```


### <samp>类型缩小</samp>

<samp>类型缩小：缩小 `unknown` 变量类型范围，将一个不确定的类型缩小到一个明确的类型</samp>

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

<samp>集合论：空集是任何集合的子集</samp>

<samp>`never` 是任何其他类型共有的，TypeScript 称其为 " 底层类型 ( bottom type ) "</samp>

<samp>TypeScript 有两个"顶层类型 ( `any` 和 `unknown` )"，只有一个"底层类型 ( `never` )"</samp>

:::

## <samp>基本类型</samp>

<samp>TS 定义类型的方式：`let 变量名: 类型 = 值`</samp>

- <samp>`boolean`：包含 `true` 和 `false` 两个布尔值</samp>

- <samp>`string`：包含所有字符串 ( 普通字符串和模板字符串 )</samp>

- <samp>`number`：包含所有整数、浮点数 ( 非十进制数也属于 `number` )</samp>

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

## <samp>包装对象类型</samp>

<samp>JavaScript 中的 5 种原始类型：`boolean`、`string`、`number`、`bigint`、`symbol`</samp>

<samp>5 种原始类型的值，都有对应的包装对象 ( wrapper object )</samp>

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

<samp>`s` 是字符串的包装对象，`typeof` 返回的是 `object` ，而不是 `string`，但本质上还是字符串，可以使用字符串方法</samp>

> [!NOTE]
>
> <samp>`String()` 只有作为构造函数使用时 ( 即带有 `new` 关键字调用 )，才会返回包装对象；否则返回的是一个普通字符串；`Number()` 和 `Boolean()` 均如此</samp>

### <samp>Array</samp>

<samp>第一种方式：在元素类型后加上 `[]`</samp>

::: code-group

```ts [index.ts]
let list: number[] = [1, 2, 3];
```

```js [index.js]
var list = [1, 2, 3];
```

:::

<samp>第二种方式：使用数组泛型 `Array<元素类型>`</samp>

::: code-group

```ts [index.ts]
let list: Array<number> = [1, 2, 3];
```

```js [index.js]
var list = [1, 2, 3];
```

:::

### <samp>Tuple</samp>

<samp>元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同</samp>

::: code-group

```ts [index.ts]
let x: [string, number];

x = ['hello', 10];
```

```js [index.js]
var x;

x = ['hello', 10]; 
```

:::

### <samp>Enum</samp>

<samp>枚举类型：支持枚举值到枚举名的正、反向映射；默认情况下，从 `0` 开始为元素编号。也可以手动的指定成员的数值</samp>

::: code-group

```ts [index.ts]
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

```

```js [index.js]
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

```

:::

<samp><b>手动赋值</b></samp>

::: code-group

```ts [index.ts]
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;

```

```js [index.js]
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

```

:::

<samp>枚举类型的便利在于可以由枚举的值得到它的名字，不确定映射到哪个名字，可以直接查找</samp>

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // Green
```



<samp>`any` 对现有代码进行改写时，允许在编译时包含或移除类型检查</samp>

<samp>`Object` 作用相似，允许赋任意值，但不能调用任意方法</samp>

```ts [index.ts]
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // [!code error] 类型“Object”上不存在属性“toFixed”。

```

<samp>当只知道一部分数据的类型时，可以使用 `any` 声明数组</samp>

::: code-group

```ts [index.ts]
let list: any[] = [1, true, "free"];
list[1] = 100;

```

```js [index.js]
var list = [1, true, "free"];
list[1] = 100;

```

:::

### <samp>Void</samp>

<samp>`void`：表示没有任何类型，通常作为一个函数的返回值类型</samp>

::: code-group

```ts [index.ts]
function warnUser(): void {
  console.log("This is my warning message");
}

```

```js [index.js]
function warnUser() {
  console.log("This is my warning message");
}

```

:::

<samp>声明一个 `void` 变量，值只能赋予 `undefined` 和 `null`</samp>

```ts
let unusable: void = undefined;
```

### <samp>Null 与 Undefined</samp>

<samp>和 `void` 相似，`null` 与 `undefined` 本身用处不大</samp>

```ts
let u: undefined = undefined;
let n: null = null;
```

> [!NOTE]
>
> <samp>默认情况下，`null` 与 `undefined` 是所有类型的子类型</samp> 
>
> <samp>当指定了 `--strictNullChecks` 标记，`null` 与 `undefined` 只能赋值给 `void` 和他们自身</samp>

### <samp>Never</samp>

<samp>`never` 类型表示永远不存在的值的类型；例如：`never` 类型总是抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型</samp>

> [!NOTE]
>
> - <samp>变量可能是 `never` 类型，当它们被永不为真的类型保护约束时</samp>
>
> - <samp>`never` 类型是任何类型的子类型，也可以赋值给任何类型</samp>
>
> - <samp>`never` 类型没有子类型，也不能赋值给任意类型 ( 除了 `never` 本身 )</samp>

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断返回值的类型为never
function fail() {
  return error('Failed');
}

function infiniteLoop() {
  while (true) {

  }
}

```

### <samp>Object</samp>

<samp>`object` 表示非原始类型，除 `number`, `string`, `boolean`, `symbol`, `null` 或 `undefined` 之外的类型</samp>

<samp>使用 `object` 的类型，可以更好的表示类似 `Object.create` 的 API</samp>

```ts
declare function create(o: object | null): void;
create({prop:0});
create(null);

create(42); // [!code error] 类型“number”的参数不能赋给类型“object”的参数。
create("string"); // [!code error] 类型“string”的参数不能赋给类型“object”的参数。
create(false); // [!code error] 类型“boolean”的参数不能赋给类型“object”的参数。
create(undefined); // [!code error] 类型“undefined”的参数不能赋给类型“object | null”的参数。

```

### <samp>Interface</samp>

<samp>接口的作用是为类型命名和第三方代码定义契约</samp>

<samp>表示自定义类型 ( 命名约定 )，与类和对象进行区分</samp>

```ts
interface IBytedancer {
  // readonly: 只读属性, 约束属性不可在对象初始化外赋值
  readonly jobId: number;
  name: string;
  sex: 'man' | 'woman' | 'other';
  age: number;
  // 可选属性: 定义该属性可不存在
  hobby?: string;
  // 任意属性: 表示还可拥有任意数量的属性
  [key: string]: any;
}

const bytedancer: IBytedancer = {
  jobId: 9303245,
  name: 'Lin',
  sex: 'man',
  age: 28,
  hobby: 'swimming'
};

bytedancer.jobId = 12345; // [!code error] 无法为“jobId”赋值，因为它是只读属性。
bytedancer.platform = 'data';// [!code highlight] 任意属性标注可以添加任意属性
```

