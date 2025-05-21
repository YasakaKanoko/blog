# <samp>Module</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>CommonJS</samp>

<samp>CommonJS 模块</samp>

- <samp>每个文件都是一个模块，有自己的作用域，在一个文件中定义的变量、函数、类都是私有的</samp>

- <samp>每个模块内部，存在一个 `module` 对象，`module` 代表当前模块，有一个 `exports` 属性表示对外部的接口</samp>

  > <samp>通过 `global` 暴露，这种做法是不推荐的</samp>

  ```js
  // example.js
  let x = 5;
  let addX = (value) => {
      return value + x;
  };
  module.exports.x = x;
  module.exports.addX = addX;
  ```

- <samp>`require()` 方法用于加载模块</samp>

  ```js
  const example = require('./example.js');
  
  console.log(example.x); // 5
  console.log(example.addX(1)); // 6
  ```

<samp>CommonJS 模块化的特点</samp>

- <samp>所有代码运行在模块作用域，不会污染全局作用域</samp>

- <samp>模块可以多次加载，但只会在第一次加载时运行一次，然后将运行结果缓存，后续加载直接读取缓存结果</samp>
- <samp>模块的加载顺序：同步加载</samp>

<samp>因此，可以认为 CommonJS 是同步的，必须等文件加载完毕后才能继续执行</samp>

### <samp>module</samp>

<samp>Node 提供一个 `Module` 构造函数，所有模块都是 `Module` 的实例</samp>

<samp>每个模块都是该基础模块的实例</samp>

```js
class Module {
  constructor(id, parent) {
    this.id = id;
    this.exports = {};
    this.parent = parent;
  }
}
```

- <samp>`module.id`：模块的标识符，通常是带有绝对路径的模块文件名</samp>

- <samp>`module.filename`：模块的文件名，绝对路径</samp>

- <samp>`module.loaded`：返回布尔值，表示模块是否完成加载</samp>

- <samp>`module.parent`：返回对象，表示调用该模块的模块</samp>

- <samp>`module.children`：返回数组，表示模块要用到的其他模块</samp>

- <samp>`module.exports`：模块输出的值</samp>

### <samp>[require()](https://fredkschott.com/post/2014/06/require-and-the-module-system/)</samp>

<samp>Node 模块的加载机制</samp>

```js
Module._load = function(request, parent, isMain) {
  // 1. Check Module._cache for the cached module.
    
  // 2. Create a new Module instance if cache is empty. 
    
  // 3. Save it to the cache.
    
  // 4. Call module.load() with your the given filename.
  //    This will call module.compile() after reading the file contents.
    
  // 5. If there was an error loading/parsing the file,
  //    delete the bad module from the cache
    
  // 6. return module.exports
};
```

- <samp>`Module._load` 负责加载新模块并管理模块缓存，加载时减少冗余文件的读取次数，提升程序速度</samp>

- <samp>如果缓存中不存在该模块，`Module._load` 会创建一个模块实例，读取文件内容，并调用 `Module.compile`</samp>

  ```js
  Module.prototype._compile = function(content, filename) {
    // 1. Create the standalone require function that calls module.require.
      
    // 2. Attach other helper methods to require.
      
    // 3. Wraps the JS code in a function that provides our require,
    //    module, etc. variables locally to the module scope.
      
    // 4. Run that function
  };
  ```

<samp>这里会将 `require` 封装在一个独立函数中，这个函数包含一些鲜为人知的(lesser-known)方法</samp>

- <samp>`require()`：加载模块</samp>
- <samp>`require.resolve()`：将模块名解析为绝对路径</samp>
- <samp>`require.main`：主模块</samp>
- <samp>`require.cache`：缓存的模块</samp>
- <samp>`require.extensions`：根据文件扩展名，可用的编译方法</samp>

<samp>当 `require` 准备就绪，将加载的整个源代码封装在一个新的函数中，接收 `require`、`module`、`exports` 以及其他暴露的变量作为参数，这将为模块创建一个新的函数作用域，从而不会污染 Node.js 的其余部分</samp>

```js
(function (exports, require, module, __filename, __dirname) {
  // YOUR CODE INJECTED HERE!
});
```

<samp>执行该函数，`Module._compile` 同步执行，待此代码执行完毕后，`Module._load` 开始执行并返回 `module.exports` 给用户</samp>

### <samp>exports</samp>

<samp>`exports` 是 `module.exports` 的指针</samp>

```js
const exports = module.exports;
```

- <samp>使用 `exports` 输出模块接口时，可以向 `exports` 对象添加方法</samp>

  > <samp>不能让 `exports` 指向单一的值，这样会改变 `exports` 的指向</samp>

- <samp>`exports` 是 `module.exports` 对象的指针，修改 `module.exports` 会让 `exports` 失效</samp>

  > <samp>建议不要使用 `exports`，使用 `module.exports`</samp>
  >
  > ```js
  > this.m = 5;
  > exports.c = 3;
  > module.exports = {
  >   a: 1,
  >   b: 2
  > }; // 输出: { a: 1, b: 2 }
  > ```
  >
  > <samp>这里的 `this` 并没有指向 `module.exports`，而是指向了一个空对象 `{}`</samp>

### <samp>require 规则</samp>

<samp>`require` 命令的基本功能，读入并执行一个 JavaScript 文件，返回该模块的 `exports` 对象；如果未发现指定模块，会报错</samp>

- <samp>默认后缀名是 `.js`</samp>

  ```js
  const foo = require('foo');
  ```

  > <samp>如果未指定后缀名，Node 会尝试添加 `.js`、`.json`、`.node` 再搜索</samp>
  >
  > <samp>`.js` 是以文本格式的 JavaScript 脚本解析</samp>
  >
  > <samp>`.json` 是以 JSON 格式文本文件解析</samp>
  >
  > <samp>`.node` 以编译后的二进制文件解析</samp>

- <samp>如果参数以 `/` 开头表示绝对路径</samp>

  <samp>如果参数以 `./` 开头表示相对路径</samp>

  <samp>如果参数不以 `/` 或 `./` 开头，则表示加载的模块是核心模块 (位于 Node.js 系统安装目录中)</samp>

- <samp>如果该目录下 `package.json` 中存在 `main` 字段，则加载 `main` 字段指定的路口文件</samp>

  <samp>如果不存在 `main` 或 `package.json` ，则会加载该目录下 `index.js` 或 `index.node`</samp>

### <samp>require.main</samp>

<samp>`require` 方法有一个 `main` 属性，用于判断模块是直接执行，还是调用执行</samp>

- <samp>直接执行 (`node module.js`)，`require.main` 指向模块自身</samp>

  ```js
  require.main === module; // true 
  ```

- <samp>调用执行时 (通过 `require` 加载执行)，返回 `false`</samp>

### <samp>模块缓存</samp>

<samp>首次加载某个模块，Node 会缓存该模块，之后再加载时，直接从缓存中取出模块的 `module.exports` 属性</samp>

<samp>所有缓存的模块都保存在 `require.cache` 中</samp>

<samp>删除模块缓存</samp>

```js
// 删除指定模块缓存
delete require.cache[moduleName];

// 删除所有模块缓存
Object.keys(require.cache).forEach((key) => {
  delete require.cache[key];
});
```

### <samp>模块的加载机制</samp>

<samp>CommonJS 模块加载机制，输入的是输出的值的拷贝</samp>

```js
// lib.js
let counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter
};
```

<samp>值一旦被输出，模块内部变化不会影响该值</samp>

```js
// main.js
let { counter } = require('./lib');
let { incCounter } = require('./lib');

console.log(counter); // 3
incCounter();
console.log(counter); // 3
```

<samp><b>浏览器环境中的 CommonJS</b></samp>

1. <samp>浏览器加载 JS 文件，需要从远程服务器获取，网络的传输效率低于 node 读取本地文件的效率，由于 CommonJS 是同步的，这会极大地降低运行的性能</samp>

2. <samp>如果读取 JS 文件内容并放入一个环境中执行，需要浏览器厂商支持；CommonJS 属于社区标准，而非官方标准。</samp>

## <samp>ESM</samp>

<samp>CommonJS 加载模块称为"运行时加载"，只有运行时才能得到整个对象，无法在编译时"静态优化"</samp>

<samp>ESM 的设计思想是尽量静态化，编译时确定模块的依赖关系，以及输入和输出变量，称"编译时加载"</samp>

<samp><b>ESM 的特点</b></samp>

1. <samp>`import` 和 `export` 必须处于模块顶层</samp>

2. <samp>异步加载：加载完成后使用回调函数</samp>

3. <samp>模块的代码需要放置在函数的环境中</samp>

   > <samp>ESM 最初设计在浏览器中，文件的加载通过网络加载</samp>

### <samp>export</samp>

<samp>给定一个 ES 模块，浏览器无需查看导入或导出的内容，执行前整个模块都将被解析(这会涉及往返多次网络请求)</samp>

1. <samp>导出变量</samp>

   ```js
   // 写法一
   export let firstName = 'Mike';
   export let lastName = 'Wheeler';
   export let year = 1985;
   
   // 写法二
   let firstName = 'Mike';
   let lastName = 'Wheeler';
   let year = 1985;
   
   export { firstName, lastName, year };
   ```

2. <samp>输出函数或类</samp>

   ```js
   // 写法一
   function v1() {};
   export { v1 };
   
   // 写法二
   export function v2() {};
   ```

3. <samp>使用 `as` 设置别名</samp>

   ```js
   function v1() {};
   
   export { 
     v1 as streamV1
   };
   ```

> [!NOTE]
>
> 1. <samp>`export` 对外输出三种接口：函数、类、使用 `var`, `let`, `const` 声明的变量</samp>
>
> 2. <samp>通过 `export` 输出的接口，与对应的值存在动态绑定，即通过接口可以获取模块内部实时的值</samp>
>
>    > <samp>CommonJS 的模块输出具有缓存，不存在动态更新</samp>
>
> 3. <samp>`export` 命令可以出现在模块任意位置，但必须处于模块顶层；如果处于块级作用域，会报错</samp>
>
>    ```js
>    function foo() {
>      export default 'bar';
>    }
>    foo();
>    ```
>

### <samp>import</samp>

1. <samp>通过接收一对大括号，指定需要导入的变量名，必须与导出时接口名称相同</samp>

   ```js
   import { firstName, lastName, year } from './example.js';
   ```

2. <samp>`as` 关键字：将导入的变量重命名</samp>

   ```js
   import { lastName as surname } from './example.js';
   ```

3. <samp>`import` 输入变量是只读的，不允许在加载模块的脚本中改写接口</samp>

   > <samp>特殊情况：如果导入的是一个对象，可以改写对象的属性，但不建议</samp>

   ```js
   import { a } from './a.js';
   a.foo = 'Hello world!'; // 合法操作 
   ```

4. <samp>`import` 命令具有提升效果</samp>

   > <samp>原因：`import` 是在编译阶段执行的，在代码运行之前执行</samp>

   ```js
   foo();
   import { foo } from './module.js';
   ```

5. <samp>`import` 必须处于模块顶层</samp>

6. <samp>重复执行同一句 `import` 语句，只执行一次，而不会执行多次</samp>

   > <samp>`import` 语句是 Singleton 模式</samp>

   ```js
   import { foo } from './my_module.js';
   import { bar } from './my_module.js';
   
   // 等价于
   import { foo, bar } from './my_module.js';
   ```

7. <samp>通过 Babel 转码，CommonJS 模块的`require`命令和 ES6 模块的`import`命令，可以写在同一个模块里面，但不建议，`import` 会在静态解析阶段执行，可能达不到预期效果</samp>

8. <samp>`*`：整体加载</samp>

   ```js
   import * as myLib from './lib.js';
   myLib.add(1, 2);
   ```

### <samp>export default</samp>

<samp>使用 `import` 命令时，必须知道加载的变量名和函数名</samp>

1. <samp>默认导出匿名函数</samp>

   ```js
   // export-default.js
   export default function() {
     console.log('foo');
   }
   ```

   ```js
   // index.js
   import customName from './export-default.js';
   customName(); // foo
   ```

2. <samp>具名导出</samp>

   ```js
   function foo() {
     console.log('foo');
   }
   export default foo;
   ```

3. <samp>一个模块中只能有一个默认导出，因此默认导出不需要使用大括号，且 `import` 导入时无需加大括号，因为仅有且只有一个与之对应</samp>

   ```js
   import foo from './foo.js';
   foo(); // foo
   ```

4. <samp>本质上，`default` 实际是一个变量，`export default` 会将变量的值赋给 `default`，实际是输出 `default` 变量的值</samp>

   <samp>`default` 后不能跟变量声明语句</samp>

   ```js
   let a = 1;
   export default a;
   ```

   <samp>本质上，`export default` 是在输出一个叫 `default` 的变量或方法</samp>

   ```js
   // modules.js
   function add(x, y) {
     return x * y;
   }
   export { add as default }; // 等价于 export default add;
   
   // index.js
   import { default as foo } from './module.js';
   // 等价于
   // import foo from './modules.js';
   ```

### <samp>export 与 import 复合</samp>

1. <samp>在同一个模块中，表示输入后输出</samp>

   > <samp>需要注意的是，当 `export` 和 `import` 写成一行后，实际并未导入该模块，而是转发接口</samp>

   ```js
   export { foo, bar } from './my_module.js';
   
   // 可以理解为
   import { foo, bar } from './my_module.js';
   export { foo, bar };
   ```

2. <samp>整体导出</samp>

   ```js
   export * from './my_module.js';
   ```

3. <samp>默认导出</samp>

   ```js
   export { default } from './my_module.js';
   ```

4. <samp>具名导出</samp>

   ```js
   export { foo as default } from './my_module.js';
   
   export { default as foo } from './my_module.js';
   ```

5. <samp>ES2020：别名导出</samp>

   ```js
   export * as ns from './my_module.js';
   ```

### <samp>跨模块常量</samp>

<samp>如果需要使用的常量非常多，可以创建一个 `constants` 目录，将常量写在不同文件中并保存在该目录下</samp>

```js
// constants/db.js
export const db = {
  url: 'http://127.0.0.1:8080/',
  username: 'admin',
  password: '123456'
};

// constants/user.js
export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

// constants/index.js
export {db} from './db';
export {users} from './users';
```

```js
// script.js
import {db, users} from './constants/index';
```

### <samp>import()</samp>

<samp>ES2020 提案：`import()` 函数支持动态加载模块</samp>

- <samp>`import()` 可以用在任何地方</samp>

- <samp>`import()` 与 `import` 不同，没有静态连接关系</samp>

- <samp>`import()` 是异步的，返回 Promise 对象，`require()` 是同步的</samp>

  ```js
  async function renderWidget() {
    const container = document.getElementById('widget');
    if (container !== null) {
      const widget = await import('./widget.js');
      widget.render(container);
    }
  }
  
  renderWidget();
  ```

<samp>`import()` 场景</samp>

- <samp>按需加载：在需要时，再加载某个模块</samp>

  ```js
  button.addEventListener('click', (event) => {
    import('./dialogBox.js').then((dialogBox) => {
      dialogBox.open();
    }).catch((error) => {
      console.log(error);
    })
  });
  ```

- <samp>条件加载</samp>

  ```js
  if (condition) {
    import('./moduleA.js').then();
  } else {
    import('./moduleB.js').then();
  }
  ```

- <samp>动态的模块路径</samp>

  > <samp>根据 `fn` 的返回结果，返回不同的模块</samp>

  ```js
  import(fn()).then();
  ```

### <samp>ESM 与 CommonJS 的差异</samp>

<samp>在大型项目中，ESM 速度较慢，与 `require` 相比，要么导入时使用 `await` 表达式，这样必须返回一个 Promise，这将带来额外的 microticks 和开销</samp>

<samp>**差异**</samp>

- <samp>CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用</samp>

  > <samp>因为 CommonJS 加载的是一个对象 ( `module.exports` )，在模块内部变化不会影响原值</samp>

- <samp>CommonJS 是运行时加载，ES6 是编译时加载</samp>

- <samp>CommonJS 的 `require()` 是同步加载，ES6 的 `import` 是异步加载</samp>

## <samp>参考</samp>

- <samp>[CommonJS 规范](https://javascript.ruanyifeng.com/nodejs/module.html#toc0)</samp>
- <samp>[The Node.js Way - How `require()` Actually Works](https://fredkschott.com/post/2014/06/require-and-the-module-system/)</samp>
- <samp>[module.js 源码](https://github.com/nodejs/node-v0.x-archive/blob/master/lib/module.js)</samp>

- <samp>[ES6 Module 的语法](https://es6.ruanyifeng.com/#docs/module)</samp>
- <samp>[Changing `require` to `import` updates the module syntax to ES modules, which are more compatible with modern JavaScript environments and tooling](https://typescript.tv/errors/#ts80001)</samp>
- <samp>[Asynchronous vs. Synchronous Programming: Key Similarities and Differences](https://www.mendix.com/blog/asynchronous-vs-synchronous-programming/)</samp>
- <samp>[CommonJS loads modules synchronously, ES modules are asynchronous](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)</samp>
- <samp>[CommonJS is not going away](https://bun.sh/blog/commonjs-is-not-going-away)</samp>
