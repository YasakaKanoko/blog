# <samp>JavaScript</samp>

[[TOC]]

## <samp>JavaScript 实现</samp>

<samp>**文档对象模型** ( DOM，Document Object Model ) 是一个应用变成接口 ( API )，在 HTML 中使用扩展的 XML；DOM 将整个页面抽象为一组分层节点。HTML 或 XML 每个组成部分都是一种节点，包含不同的数据</samp>

```html
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

<samp>DOM 可以生成一组分层节点</samp>

```txt
html
├─ head
|   └─ title
|  		└─ Sample Page
└─ body
    └─ p
	  	└─ Hello World!
```

<samp>通过 DOM API 添加、删除、替换、修改节点</samp>

> [!NOTE]
>
> <samp>DOM 并非只能通过 JavaScript 访问，而且确实被其他很多语言实现了。不过对于浏 览器来说，DOM 就是使用 ECMAScript 实现的，如今已经成为 JavaScript 语言的一大组成部分。</samp>

## <samp>script</samp>

<samp>`script` 有 8 个属性</samp>

- <samp>`async`：立即开始下载脚本，但不能阻止其他页面的动作</samp>

- <samp>`charset`：使用 `src` 指定代码字符集</samp>

- <samp>`crossorigin`：配置相关请求的 CORS ( 跨域资源共享 ) 设置，默认不使用</samp>

  <samp>`crossorigin="anonymous"` 配置文件请求不必设置凭据标志</samp>

  <samp>`crossorigin="use-credentials"` 设置凭据标志，意味着出战请求包含凭据</samp>

- <samp>`defer`：表示脚本可以延时到文档完全解析和显示之后再执行，只对外部脚本文件有效</samp>

- <samp>`intergrity`：允许对接收到资源和指定的加密签名以及验证子资源完整性 ( SRI，Subresourece Integrity )。如果接收的资源和属性指定的签名不匹配，则会报错，脚本不执行，确保 CDN ( Content Delivery Network ) 不会提供恶意内容</samp>

- <samp>`language`：已废弃。用于表示代码块的脚本语言</samp>
- <samp>`src`：包含要执行的代码的外部文件</samp>

- <samp>`type`：代替 `language`，表示代码块中语言的内容类型 ( 也称 MIME 类型 )，</samp>

  <samp>`type` 值为 `module`，代码会被当成 ES6 模块</samp>

## <samp>基本语法</samp>

## <samp>变量与作用域</samp>

## <samp>基本引用类型</samp>

## <samp>集合引用类型</samp>

## <samp>迭代器与生成器</samp>

## <samp>对象、类与面向对象</samp>

## <samp>代理与反射</samp>

<samp>代理是目标对象的抽象，类似 C++ 指针，可以作为目标对象的替身，但又完全独立于目标对象。目标对象既可以直接操作，也可以通过代理操作</samp>

<samp>**创建空代理**</samp>

<samp>使用 `Proxy` 构造函数，接收两个参数：目标对象和处理程序对象，缺少任何一个参数都会抛出 TypeError</samp>

```js
const target = {
  id: 'target'
};

const handler = {};
const proxy = new Proxy(target, handler);

// id 属性会访问同一个值
console.log(target.id); // target
console.log(proxy.id); // target 
```



## <samp>函数</samp>

## <samp>期约与异步函数</samp>

## <samp>BOM</samp>

## <samp>客户端检测</samp>

## <samp>DOM</samp>

## <samp>DOM 扩展</samp>

## <samp>DOM2 和 DOM3</samp>

## <samp>事件</samp>

## <samp>动画与 Canvas</samp>

## <samp>表单脚本</samp>

## <samp>JavaScript API</samp>

## <samp>错误处理和调试</samp>

## <samp>处理 XML</samp>

## <samp>JSON</samp>

## <samp>网络请求和远程资源</samp>

## <samp>客户端存储</samp>

## <samp>模块</samp>

## <samp>工作者线程</samp>

## <samp>实践</samp>

### <samp>可维护性</samp>

#### <samp>编码规范</samp>

1. <samp>可读性</samp>

   - <samp>代码缩进</samp>

   - <samp>代码注释</samp>

     - <samp>函数和方法：描述其用途，以及完成任务所用的算法。函数或方法的前提(假设)、参数的含义，函数是否有返回值</samp>
     - <samp>大型代码块：完成单一任务，应该在前面给出注释，把需要完成的任务写清楚</samp>
     - <samp>复杂算法</samp>
     - <samp>黑科技：不同浏览器之间存在差异，需要让其他开发者看明白这个黑科技是为解决某个浏览器的什么问题。如果浏览器不能使用正常方式达到目的，需要在注释中写明用途</samp>

   - <samp>变量和函数名</samp>

     - <samp>变量名应该是名词，如：`car`、`person`</samp>
     - <samp>函数名应该是动词，如：`getName()`，返回布尔值的函数以 `is` 开头，如：`isEnabled()`</samp>
     - <samp>变量和函数都是用符合逻辑的名称，不用担心长度问题。长名字问题会通过处理和压缩解决</samp>
     - <samp>变量、函数和方法应该以小写字母开头，使用驼峰大小写形式 ( camelCase )，如：`getName()` 和 `isPerson`。类名首字母大写，如：`Person`、`RequestFactory`。常量应该全部大写并以下划线连接，如：`REQUEST_TIMEOUT`</samp>

   - <samp>变量类型透明化：JavaScript 是松散类型语言，容易忘记变量的数据类型</samp>

     - <samp>第一种方式：通过标明变量类型方式初始化；定义变量时，立即将其初始化为一个将来需要使用的类型值</samp>

       ```js
       // 初始化标明变量类型
       let found = false; // 布尔
       let count = -1; // 数值
       let name = ""; // 字符串
       let person = null; // 对象
       ```

       <samp>初始化方式不适用于函数声明，在 ES6 之后，可以在函数声明参数中指定默认值标注参数类型</samp>

     - <samp>第二种方式：匈牙利表示法。在变量名前缀一个或多个字符表示数据类型</samp>

       <samp>`o` 表示对象，`s` 表示字符串，`i` 表示整数，`f` 表示浮点数，`b` 表示布尔值</samp>

       ```js
       // 匈牙利表示法
       let bFound; // 布尔
       let iCount; // 整数
       let sName; // 字符串
       let oPerson; // 对象
       ```

       <samp>缺点：降低了代码的可读性</samp>

     - <samp>第三种方式：标明变量类型的方式是使用类型注释。类型注释放在变量名后面、初始化表达式的前面。基本思路是在变量旁边使用注释说明类型</samp>

       ```js
       // 类型注释
       let found /*:Boolean*/ = false;
       let count /*:int*/ = 10;
       let name /*:String*/ = "Nicholas";
       let person /*:Object*/ = null; 
       ```

       <samp>缺点：不能再使用多行注释把大型代码块注释掉了。因为类型注释也是多行注释</samp>

#### <samp>松散耦合</samp>

<samp>只要应用程序的某个部分对另一个部分依赖得过于紧密，代码就会变成紧密耦合，因而难以维护。 典型的问题是在一个对象中直接引用另一个对象，这样，修改其中一个，可能必须还得修改另一个。紧密耦合的软件难于维护，需要频繁地重写</samp>

1. <samp>解耦 HTML/JavaScript</samp>

   <samp>Web 开发中最常见的耦合是 HTML/JavaScript 耦合</samp>

   <samp>使用 `<script>` 造成 HTML/JavaScript 紧密耦合</samp>

   ```html
   <script>
     document.write("Hello World!");
   </script>
   ```

   <samp>使用事件处理程序属性造成 HTML/JavaScript 紧密耦合</samp>

   ```html
   <input type="button" value="Click Me" onclick="doSomething()" />
   ```

   <samp>把 HTML 包含在 JavaScript 中</samp>

   ```js
   // HTML 紧密耦合到了 JavaScript
   function insertMessage(msg) {
     let container = document.getElementById("container");
     container.innerHTML = `<div class="msg">
     <p> class="post">${msg}</p>
     <p><em>Latest message above.</em></p>
     </div>`;
   } 
   ```

   <samp>应该避免在 JavaScript 中创建大量 HTML，这主要是为了做到数据层和行为层各司其职，在出错时更容易定位问题所在。如果动态插入的 HTML 格式不对，就会造成页面布局出错。修改数据或页面的同时还需要修改 JavaScript， 这说明两层是紧密耦合的</samp>

   - <samp>HTML 渲染应该尽可能与 JavaScript 分开。在使用 JavaScript 插入数据时，应该尽可能不要插入标记。相应的标记可以包含并隐藏在页面中，在需要的时候 JavaScript 可以直接用它来显示，而不需要动态生成</samp>
   - <samp>通过 Ajax 请求获取要显示的 HTML，这样也可以保证同一个渲染层(PHP、JSP、 Ruby 等)负责输出标记，而不是把标记嵌在 JavaScript 中</samp>

2. <samp>解耦 CSS/JavaScript</samp>

   <samp>CSS 也可能与 JavaScript 产生紧密耦合。最常见的例子就是使用 JavaScript 修改个别样式</samp>

   ```js
   // CSS耦合JavaScript
   element.style.color = "red";
   element.style.backgroundColor = "blue";
   ```

   <samp>JavaScript 某种程度上承担了页面显示的任务，与 CSS 成了紧密耦合。如果将来有一天要修改样式，那么 CSS 和 JavaScript 可能都需要修改</samp>

   <samp>松散耦合：现代 Web 无法做到完全解耦 CSS 和 JavaScript，但可以让耦合变得更松散，主要通过动态修改类名实现</samp>

   ```js
   element.className = "edit";
   ```

   <samp>修改元素 CSS 类名，把大部分样式限制在 CSS 文件中，JavaScript 只负责修改样式的类名，而不直接影响元素的样式</samp>

3. <samp>解耦应用程序逻辑/事件处理程序</samp>

   <samp>每个 Web 应用程序中都会有大量事件处理程序在监听各种事件。可是，其中很少能真正做到应用程序逻辑与事件处理程序分离</samp>

   ```js
   function handleKeyPress(event) {
     if (event.keyCode == 13) {
       let target = event.target;
       let value = 5 * parseInt(target.value);
       if (value > 10) {
         document.getElementById("error-msg").style.display = "block";
       }
     }
   }
   ```

   <samp>更好的做法是将应用程序逻辑与事件处理程序分开，各自负责处理各自的事情。事件处理程序应该专注于 `event` 对象的相关信息，然后把这些信息传给处理应用程序逻辑的某些方法</samp>

   ```js
   function validateValue(value) {
     value = 5 * parseInt(value);
     if (value > 10) {
       document.getElementById("error-msg").style.display = "block";
     }
   }
   
   function handleKeyPress(event) {
     if (event.keyCode == 13) {
       let target = event.target;
       validateValue(target.value);
     }
   } 
   ```

   <samp>`handleKeyPress()` 函数只负责检查用户是不是按下了回车键(`event.keyCode` 等于 `13`)，如果是则取得事件目标，并把目标值传给 `validateValue()` 函数，该函数包含应用程序逻辑</samp>

   > [!NOTE]
   >
   > <samp>`validateValue()` 函数中不包含任何依赖事件处理程序的代码。这个函数只负责接收一个值，并根据该值执行其他所有操作</samp>

   ::: info <samp>注意</samp>

   - <samp>不要把 `event` 对象传给其他方法，而是只传递 `event` 对象中必要的数据</samp>
   - <samp>应用程序中每个可能的操作都应该无须事件处理程序就可以执行</samp>
   - <samp>事件处理程序应该处理事件，而把后续处理交给应用程序逻辑</samp>

   :::


#### <samp>编码惯例</samp>

1. <samp>尊重对象所有权：不要修改不属于你的对象。如果你不负责创建和维护某个对象及其构造函数或方法，就不应该对其进行任何修改</samp>

   - <samp>不要给实例或原型添加属性</samp>

   - <samp>不要给实例或原型添加方法</samp>

   - <samp>不要重定义已有的方法</samp>

   <samp>以上不仅适用于自定义对象，还适用于原生类型和对象，如：`Object`、`String`、`document`、`window` 等</samp>

   - <samp>创建包含想要功能的新对象，通过它与别人的对象交互</samp>

   - <samp>创建新自定义类型继承本来想要修改的类型，可以给自定义类型添加新功能</samp>

2. <samp>不声明全局变量</samp>

   <samp>最多可以创建一个全局变量，作为其他对象和函数的命名空间</samp>

   ```js
   var name = "Nicholas";
   function sayName() {
     console.log(name);
   }
   ```

   <samp>推荐包含在一个对象中</samp>

   ```js
   // 一个全局变量: 推荐
   var MyApplication = {
     name: "Nicholas",
     sayName: function() {
       console.log(this.name);
     }
   }; 
   ```

   <samp>重写后只声明了一个全局对象 `MyApplication`。该对象包含了 `name` 和 `sayName()`。可以避免: `name` 会覆盖 `window.name` 属性，出现任何问题都可以在 `MyApplication` 的代码中找原因</samp>

   > [!NOTE]
   >
   > <samp>命名空间：创建一个对象，然后通过这个对象来暴露</samp>
   >
   > - <samp>`goog.string`：操作字符串的方法</samp>
   >
   > - <samp>`goog.html.utils`：与 HTML 相关的方法</samp>
   >
   > - <samp>`goog.i18n`：与国际化(i18n)相关的方法</samp>
   >
   > <samp>关于命名空间，最重要的确定一个所有人都同意的全局对象名称。这个名称要足够独特，不能与其他人的冲突</samp>

3. <samp>不要比较 `null`：JavaScript 不会自动做任何类型检查</samp>

   ```js
   function sortArray(values) {
     if (values != null) { // 不要比较null
       values.sort(comparator);
     }
   } 
   ```

   <samp>字符串、数值还有其他很多值可以通过这里的检查，结果就会导致错误</samp>

   ```js
   // 建议
   function sortArray(values) {
     if (values instanceof Array) {
       values.sort(comparator);
     }
   } 
   ```

   > [!TIP]
   >
   > <samp>替换 `null` 的比较</samp>
   >
   > - <samp>如果值应该是引用类型，则使用 `instanceof` 操作符检查其构造函数</samp>
   > - <samp>如果值应该是原始类型，则使用 `typeof` 检查其类型</samp>
   > - <samp>如果希望值是有特定方法名的对象，则使用 `typeof` 操作符确保对象上存在给定名字的方法</samp>

4. <samp>使用常量</samp>
   - <samp>重复出现的值：任何使用超过一次的值都应该提取到常量中，也包括 CSS 的类名</samp>
   - <samp>用户界面字符串：任何会显示给用户的字符串都应该提取出来，以方便实现国际化</samp>
   - <samp>URL：Web 应用程序中资源的地址经常会发生变化，因此建议把所有 URL 集中放在一个地方管理</samp>
   - <samp>任何可能变化的值：只要在代码中使用字面值，如果值将来可变，就把它提取到常量中</samp>

### <samp>性能</samp>

#### <samp>作用域意识</samp>

1. <samp>避免全局查找</samp>

   ```js
   function updateUI() {
     let imgs = document.getElementsByTagName("img");
     for (let i = 0, len = imgs.length; i < len; i++) {
       imgs[i].title = '${document.title} image ${i}';
     }
     let msg = document.getElementById("msg");
     msg.innerHTML = "Update complete.";
   }
   ```

   <samp>这个函数有三处引用全局 `document` 对象，如果页面的图片非常多，那么 `for` 循环中就需要引用 `document` 几十甚至上百次，每次都要遍历一次作用域链。通过在局部作用域中保存 `document` 对象的引用，能够明显提升这个函数的性能，因为只需要作用域链查找</samp>

   ```js
   function updateUI() {
     let doc = document; // [!code highlight]
     let imgs = doc.getElementsByTagName("img"); // [!code highlight]
     for (let i = 0, len = imgs.length; i < len; i++) {
       imgs[i].title = '${doc.title} image ${i}'; // [!code highlight]
     }
     let msg = doc.getElementById("msg"); // [!code highlight]
     msg.innerHTML = "Update complete.";
   } 
   ```

2. <samp>不使用 `with` 语句</samp>

   <samp>避免使用 `with` 语句。与函数类似，`with` 语句会创建自己的作用域，因此也会加长其中代码的作用域链。在 `with` 语句中执行的代码一定比在它外部执行的代码慢，因为作用域链查找时多一步</samp>

   ```js
   function updateBody() {
     with(document.body) {
       console.log(tagName);
       innerHTML = "Hello world!";
     }
   } 
   ```

   <samp>`with` 语句让使用 `document.body` 更简单了。使用局部变量也可以实现同样的效果</samp>

   ```js
   function updateBody() {
     let body = document.body;
     console.log(body.tagName);
     body.innerHTML = "Hello world!";
   } 
   ```

#### <samp>正确的方式</samp>

1. <samp>避免不必要的属性查找</samp>

   <samp>算法复杂度使用大 O 表示法来表示。最简单同时也最快的算法可以表示为常量值或 O(1)</samp>

   | <samp>表示法</samp>    | <samp>名称</samp>   | <samp>说明</samp>                                            |
   | ---------------------- | ------------------- | ------------------------------------------------------------ |
   | <samp>$O(1)$</samp>    | <samp>常量</samp>   | <samp>无论多少值，执行时间不变；表示简单值和变量中的值</samp> |
   | <samp>$O(logn)$</samp> | <samp>对数</samp>   | <samp>执行时间随着值的增加而增加，算法不需读取每个值。如：二分查找</samp> |
   | <samp>$O(n)$</samp>    | <samp>线性</samp>   | <samp>执行时间与值的数量直接相关。如：迭代数组的所有元素</samp> |
   | <samp>$O(n^2)$</samp>  | <samp>二次方</samp> | <samp>执行时间随着值的增加而增加，每个值至少需要读取 n 次，如：插入排序</samp> |

   ```js
   // 查询4次常量值, O(1)
   let value = 5;
   let sum = 10 + value;
   console.log(sum);
   
   // 访问数组也是O(1)
   let values = [5, 10];
   let sum = values[0] + values[1];
   console.log(sum); 
   
   // 访问对象属性的算法复杂度是 O(n), 查找属性名要搜索原型链
   let values = { first: 5, second: 10 };
   let sum = values.first + values.second;
   console.log(sum);
   ```

   <samp>避免多次查找获取同一个值</samp>

   ::: code-group

   ```js
   let query = window.location.href.substring(window.location.href.indexOf("?")); 
   ```

   ```js[优化]
   // 节省33%
   let url = window.location.href;
   let query = url.substring(url.indexOf("?")); 
   ```

   :::

2. <samp>优化循环</samp>

   - <samp>**简化终止条件**。因为每次循环都会计算终止条件，所以它应该尽可能地快。这意味着要避免属性查找或其他 O(n)操作</samp>
   - <samp>**简化循环体**。循环体是最花时间的部分，因此要尽可能优化。要确保其中不包含可以轻松转移到循环外部的密集计算</samp>
   - <samp>**使用后测试循环**。最常见的循环就是 `for` 和 `while` 循环，属于先测试循环。`do-while` 是后测试循环，避免了对终止条件初始评估 ，因此应该会更快</samp>

   ```js
   for (let i = 0; i < values.length; i++) {
     process(values[i]);
   } 
   
   // 假设处理这些值的顺序不重要，那么可以将循环变量改为递减的形式
   for (let i = values.length - 1; i >= 0; i--) {
     // 终止条件的计算复杂度也从查找values.length的O(n)变成了访问0的O(1)
     process(values[i]);
   } 
   
   // 后测试循环: 一定是至少有一个值需要处理一次。如果这里的数组是空的, 那么会浪费一次循环, 而先测试循环就可以避免这种情况
   let i = values.length-1;
   if (i > -1) {
     do {
       process(values[i]);
     }while(--i >= 0);
   }
   ```

3. <samp>展开循环</samp>

   <samp>如果循环的次数是有限的，那么通常抛弃循环而直接多次调用函数会更快</samp>

   ```js
   process(values[0]);
   process(values[1]);
   process(values[2]);
   ```

   <samp>如果不能提前预知循环的次数，那么或许可以使用一种叫作达夫设备(Duff’s Device)的技术</samp>

   ```js
   // Jeff Greenberg 在 JavaScript 中实现的达夫设备
   let iterations = Math.ceil(values.length / 8);
   let startAt = values.length % 8;
   let i = 0;
   do {
     switch(startAt) {
       case 0: process(values[i++]);
       case 7: process(values[i++]);
       case 6: process(values[i++]);
       case 5: process(values[i++]);
       case 4: process(values[i++]);
       case 3: process(values[i++]);
       case 2: process(values[i++]);
       case 1: process(values[i++]);
     }
     startAt = 0;
   } while (--iterations > 0); 
   ```

   > <samp>达夫设备的实现首先通过用 `values` 数组长度除以 `8` 计算需要多少次循环</samp>
   >
   > <samp>`Math.ceil()` 用于保证这个值是整数。`startAt` 变量保存着仅按照除以 8 来循环不会处理的元素个数。第一次循环执行时，会检查 `startAt` 变量，以确定要调用 `process()` 多少次。例如，假设数组有 10 个元素，则 `startAt` 变量等于 2，因此第一次循环只会调用 `process()` 两次。第一次循环末尾，`startAt` 被重置为 0。于是，后续每次循环都会调用 8 次 `process()`。这样展开之后，能够加快大数据集的处理速度</samp>

   <samp>Andrew B. King 在 Speed Up Your Site 一书中提出了更快的达夫设备实现，他将 `do-while` 循环分成了两个单独的循环</samp>

   ```js
   // Speed Up Your Site（New Riders，2003）
   let iterations = Math.floor(values.length / 8);
   let leftover = values.length % 8;
   let i = 0;
   if (leftover > 0) {
     do {
       process(values[i++]);
     } while (--leftover > 0);
   }
   do {
     process(values[i++]);
     process(values[i++]);
     process(values[i++]);
     process(values[i++]);
     process(values[i++]);
     process(values[i++]);
     process(values[i++]);
     process(values[i++]);
   } while (--iterations > 0);
   ```

   > <samp>第一个循环中处理的次数。处理完这些额外的值之后进入主循环，每次循环调用 8 次 `process()`。这个实现比原始的实现快约 40%</samp>

4. <samp>避免重复解释</samp>

   <samp>重复解释的问题存在于 JavaScript 代码尝试解释 JavaScript 代码的情形。在使用 `eval()` 函数或 `Function` 构造函数，或者给 `setTimeout()` 传入字符串参数时会出现这种情况</samp>

   ```js
   eval("console.log('Hello world!')");
   let sayHi = new Function("console.log('Hello world!')"); 
   setTimeout("console.log('Hello world!')", 500); 
   ```

   <samp>这些字符串在初始解析阶段不会被解释，因为代码包含在字符串里。这意味着在 JavaScript 运行时，必须启动新解析器实例来解析这些字符串中的代码。实例化新解析器比较费时间，因此这样会比直接包含原生代码慢</samp>

   ```js
   // eval() 很少使用, 尽量不使用
   console.log('Hello World!');
   
   // Function 构造函数直接使用常规函数重写
   let sayHi = function() {
     console.log('Hello World!');
   }
   
   // setTimeout()直接把函数作为第一个参数
   setTimeout(() => {
     console.log('Hello World!');
   }, 500)
   ```

5. <samp>其他注意事项</samp>
   - <samp>尽可能使用原生方法</samp>
   - <samp>`switch` 语句很快</samp>
   - <samp>位操作很快</samp>

#### <samp>语句最少化</samp>

1. <samp>**多个变量声明**</samp>

   ::: code-group

   ```js
   let count = 5;
   let color = "blue";
   let values = [1,2,3];
   let now = new Date(); 
   ```

   ```js[优化]
   let count = 5,
   	color = "blue",
    	values = [1,2,3],
    	now = new Date(); 
   ```

   :::

2. <samp>**插入迭代性值**</samp>

   ::: code-group

   ```js
   let name = values[i];
   i++;
   ```

   ```js[优化]
   let name = values[i++]; 
   ```

   :::

3. <samp>**使用数组和对象字面量**</samp>

   <samp>使用字面量而非构造函数创建数组/对象</samp>

   ::: code-group

   ```js
   // 创建和初始化数组用了四条语句
   let values = new Array();
   values[0] = 123;
   values[1] = 456;
   values[2] = 789; 
   
   // 创建和初始化对象用了四条语句
   let person = new Object();
   person.name = "Nicholas";
   person.age = 29;
   person.sayName = function() {
     console.log(this.name);
   }; 
   ```

   ```js[优化]
   // 一条语句创建并初始化数组
   let values = [123, 456, 789];
   // 一条语句创建并初始化对象
   let person = {
     name: "Nicholas",
     age: 29,
     sayName() {
       console.log(this.name);
     }
   }; 
   ```

   :::

#### <samp>优化 DOM 交互</samp>

1. 实时更新最小化

   ```js
   let list = document.getElementById("myList"), item;
   for (let i = 0; i < 10; i++) {
     item = document.createElement("li");
     list.appendChild(item);
     item.appendChild(document.createTextNode('Item ${i}');
   } 
   ```

   <samp>每添加 1 项，就会有两次实时更新：一次添加元素，一次为它添加文本节点。因为要添加 10 项，所以整个操作总共要执行 20 次实时更新</samp>

   ```js
   let list = document.getElementById("myList"),
       fragment = document.createDocumentFragment(), // [!code highlight]
       item;
   for (let i = 0; i < 10; i++) {
     item = document.createElement("li");
     fragment.appendChild(item); // [!code highlight]
     item.appendChild(document.createTextNode("Item " + i));
   }
   list.appendChild(fragment);  // [!code highlight]
   ```

2. <samp>使用 `innerHTML`</samp>

   <samp>在页面中创建新 DOM节点的方式有两种：使用 DOM方法如 `createElement()` 和 `appendChild()`， 以及使用 `innerHTML`</samp>

   <samp>对于大量 DOM 更新，使用 `innerHTML`</samp>

   ```js
   let list = document.getElementById("myList"),
       html = ""; // [!code highlight]
   for (let i = 0; i < 10; i++) {
     html += '<li>Item ${i}</li>'; // [!code highlight]
   }
   list.innerHTML = html; // [!code highlight] 
   ```

3. <samp>**事件委托**：事件委托利用了事件的冒泡。任何冒泡的事件都可以不在事件目标上，而在目标的任何祖先元素上处理</samp>

4. <samp>**注意 HTMLCollection**：只要访问 HTMLCollection，无论是它的属性还是方法，就会触发查询文档，而这个查询相当耗时。减少访问 HTMLCollection 的次数可以极大地提升脚本的性能</samp>

   ```js
   let images = document.getElementsByTagName("img");
   for (let i = 0, len = images.length; i < len; i++) {
     // 处理
   }
   ```

   <samp>把 `length` 保存到了 `len` 变量中，而不是每次都读一次 HTMLCollection 的 `length` 属性，在循环中使用 HTMLCollection 时，应该首先取得对要使用的元素的引用</samp>

   ```js
   let images = document.getElementsByTagName("img"),
       image;
   for (let i = 0, len=images.length; i < len; i++) {
     image = images[i];
     // 处理
   } 
   ```

   <samp>增加了 `image` 变量，用于保存当前的图片。有了这个局部变量，就不需要在循环中再访问 `images` HTMLCollection 了</samp>

   > [!tip]
   >
   > <samp>尽量不要访问 HTMLCollection ，以下会返回 HTMLCollection</samp>
   >
   > - <samp>调用 `getElementsByTagName()`</samp>
   > - <samp>读取元素的 `childNodes` 属性</samp>
   > - <samp>读取元素的 `attributes` 属性</samp>
   > - <samp>访问特殊集合，如：`document.form`、`document.images` 等</samp>

### <samp>部署</samp>

#### <samp>摇树优化</samp>

<samp>摇树优化 ( tree shaking ) 确定完全不需要的内容，在最终打包的结果文件中省略</samp>

```js
import { foo } from './utils.js';

console.log(foo);
export const foo = 'foo';
export const bar = 'bar'; // unused 
```

#### <samp>验证</samp>

<samp>代码检查工具检查常见的语法错误和编码错误，可能报告的错误</samp>

- <samp>使用 `eval()`</samp>
- <samp>使用未声明的变量</samp>
- <samp>遗漏分号</samp>
- <samp>不适当的换行</samp>
- <samp>不正确地使用逗号</samp>
- <samp>遗漏了包含语句的括号</samp>
- <samp>遗漏了 `switch` 分支的 `break`</samp>
- <samp>重复声明</samp>
- <samp>使用了 `with`</samp>
- <samp>错误使用等号</samp>
- <samp>执行不到的代码</samp>

#### <samp>压缩</samp>

<samp>JavaScript 文件压缩主要包含：代码大小(code size)和传输负载(wire weight)</samp>

- <samp>删除空格 (换行)</samp>
- <samp>删除注释</samp>
- <samp>缩短变量名、函数名和其他标识符</samp>

<samp>编译</samp>

- <samp>删除未使用的代码</samp>
- <samp>将代码转换为更简洁的语法</samp>
- <samp>全局函数调用、常量和变量行内化</samp>

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

- <samp>修改了非严格模式 parseInt() ，将八进制当作带有前导 0 的十进制字面量</samp>

  ```js
  // 非严格模式：值为 8
  // 严格模式：值为 10
  let value = parseInt("010"); 
  ```

## <samp>JavaScript 库和框架</samp>

<samp>JavaScript 库帮助弥合浏览器之间的差异，能够简化浏览器复杂特性的使用</samp>

<samp>库主要分两种形式： 通用和专用</samp>

<samp>通用 JavaScript 库支持常用的浏览器功能，可以作为网站或 Web 应用程序开发的基础</samp>

<samp>专用 JavaScript 库支持特定功能，只适合网站或 Web 应用程序的一部分</samp>

### <samp>框架</samp>

<samp>框架 "框架"（framework）涵盖各种不同的模式，但各自具有不同的组织形式，用于搭建复杂应用程序。 使用框架可以让代码遵循一致的约定，能够灵活扩展规模和复杂性。框架对常见的任务提供了稳健的实现机制，比如组件定义及重用、控制数据流、路由，等等。 JavaScript 框架越来越多地表现为单页应用程序 (SPA，Single Page Application) ，SPA 使用 HTML5 浏览器历史 API，在只加载一个页面的情况下通过 URL 路由提供完整的应用程序用户界面。框架在应用程序运行期间负责管理应用程序的状态以及用户界面组件。大多数流行的 SPA 框架有坚实的开发者社 区和大量第三方扩展</samp>

#### <samp>React</samp>

<samp>React 是 Facebook 开发的框架，专注于"模型-视图-控制器"(MVC，Model-View-Controller)模型中 的“视图”</samp>

<samp>React 使用单向数据流，是声明性和基于组件的，基于虚拟 DOM 高效渲染页面，提供了在 JavaScript 包含 HTML 标记的 JSX 语法</samp>

<samp>Facebook 也维护了一个 React 的补充框架，叫作 Flux</samp>

#### <samp>Angular</samp>

<samp>谷歌在 2010 年首次发布的 Angular 是基于模型-视图-视图模型 (MVVM) 架构的全功能 Web 应用 程序框架</samp>

<samp>2016 年，这个项目分叉为两个分支：Angular 1.x 和 Angular 2。前者是最初的 AngularJS 项目， 后者则是基于 ES6 语法和 TypeScript 完全重新设计的框架。这两个版本的最新发布版都是指令和基于组件的实现，两个项目都有稳健的开发者社区和第三方扩展</samp>

#### <samp>Vue</samp>

<samp>Vue 是类似 Angular 的全功能 Web 应用程序框架，但更加中立化</samp>

#### <samp>Ember</samp>

<samp>Ember 与 Angular 非常相似，都是 MVVM 架构，并使用首选的约定来构建 Web 应用程序</samp>

<samp>2015 年 发布的 2.0 版引入了很多 React 框架的行为</samp>

#### <samp>Meteor</samp>

<samp>Meteor 是同构的 JavaScript 框架，这意味着客户端和服务器共享一套代码。Meteor 也使用实时数据更新协议，持续从 DB 向客户端推送新数据。虽然 Meteor 是一个极为主观的框架，但好处是可以使用其稳健的开箱即用特性快速开发应用程序</samp>

#### <samp>Backbone.js</samp>

<samp>Backbone.js 是构建于 Underscore.js 之上的一个最小化 MVC 开源库，为 SPA 做了大量优化，可以方便地更新应用程序状态</samp>

### <samp>通用库</samp>

<samp>通用 JavaScript 库提供适应任何需求的功能。所有通用库都致力于通过将常用功能封装为新 API， 来补偿浏览器接口、弥补实现差异。其中有些 API 与原生功能相似，而另一些 API 则完全不同。通用库 通常会提供与 DOM 的交互，对 Ajax 的支持，还有辅助常见任务的实用方法</samp>

#### <samp>jQuery</samp>

<samp>jQuery 是为 JavaScript 提供函数式编程接口的开源库。该库的核心是通过 CSS 选择符匹配 DOM 元素，通过调用链，jQuery 代码看起来更像描述故事情节而不是 JavaScript 代码。这种代码风格在设计师 和原型设计者中非常流行。</samp>

#### <samp>Google Closure Library</samp>

<samp>Google Closure Library 是通用 JavaScript 工具包，与 jQuery 在很多方面都很像。这个库包含非常多模块，涵盖底层操作和高层组件和部件。Google Closure Library 可以按需加载模块，并使用 Google Closure Compiler 构建</samp>

#### <samp>Underscore.js</samp>

<samp>Underscore.js 并不是严格意义上的通用库，但提供了 JavaScript 函数式编程的额外能力。它的文档将 Underscore.js 看成 jQuery 的组件，但提供了更多底层能力，用于操作对象、数组、函数和其他 JavaScript 数据类型。</samp>

#### <samp>Lodash</samp>

<samp>与 Underscore.js 一样，Lodash 也是实用库，用于扩充 JavaScript 工具包。Lodash 提供了很多操作原生类型，如数组、对象、函数和原始值的增强方法</samp>

#### <samp>Prototype</samp>

<samp>Prototype 是对常见 Web 开发任务提供简单 API 的开源库。Prototype 最初是为了 Ruby on Rails 开发 者开发的，由类驱动，旨在为 JavaScript 提供类定义和继承。为此，Prototype 提供了大量的类，将常用和复杂的功能封装为简单的 API 调用。Prototype 包含在一个文件里，可以轻松地插入页面中使用</samp>

#### <samp>Dojo Toolkit</samp>

<samp>Dojo Toolkit 是以包系统为基础的开源库，将功能分门别类地划分为包，可以按需加载。Dojo 支持各种配置选项，几乎涵盖了使用 JavaScript 所需的一切</samp>

#### <samp>MooTools</samp>

<samp>MooTools 是简洁、优化的开源库，为原生 JavaScript 对象添加方法，在熟悉的接口上提供新功能。 由于体积小、API 简单，MooTools 在 Web 开发者中很受欢迎</samp>

#### <samp>qooxdoo</samp>

<samp>qooxdoo 是致力于全周期支持 Web 应用程序开发的开源库。通过实现自己的类和接口，qooxdoo 创建了类似传统面向对象编程语言的模型。这个库包含完整的 GUI 工具包和编译器，用于简化前端构建过程。qooxdoo 最初是网站托管公司 1&1 的内部库，后来基于开源许可对外发布</samp>

### <samp>动画</samp>

#### <samp>D3</samp>

<samp>数据驱动文档（D3，Data Driven Documents）是非常流行的动画库，也是非常稳健和强大的 JavaScript 数据可视化工具。D3 提供了全面完整的特性，涵盖 canvas、SVG、CSS 和 HTML5 可视化。 使用 D3 可以极为精准地控制最终渲染的输出</samp>

#### <samp>three.js </samp>

<samp>three.js 是当前非常流行的 WebGL 库。它提供了轻量级 API，可以实现复杂 3D 渲染与动效</samp>

#### <samp>moo.fx</samp>

<samp>moo.fx 是基于 Prototype 或 MooTools 使用的开源动画库。它的目标是尽可能小(最新版 3KB)，并使开发者只写尽可能少的代码。moo.fx 默认包含 MooTools，也可以单独下载，与 Prototype 一起使用</samp>

#### <samp>Lightbox</samp>

<samp>Lightbox 是创建简单图像覆盖特效的 JavaScript 库，依赖 Prototype 和 script.aculo.us 实现特效。基本思想是可以使用户在当前页面的一个覆盖层中查看一个图像或多个图像。可以自定义覆盖层的外观和过渡</samp>

## <samp>JavaScript 工具</samp>

<samp>JavaScript 工具可以帮助开发者更容易定位问题、优化代码和部署上线。 其中有些工具是在 JavaScript 中使用的，而其他工具则是在浏览器之外使用的</samp>

### <samp>包管理</samp>

<samp>JavaScript 项目经常要使用第三方库和资源，以避免代码重复和加速开发。第三方库也称为"包"， 托管在公开代码仓库中。包的形式可以是直接交付给浏览器的资源、与项目一起编译的 JavaScript 库， 或者是项目开发流程中的工具。这些包总在活跃开发和不断修订，有不同的版本。JavaScript 包管理器可以管理项目依赖的包，涉及获取和安装，以及版本控制。</samp>

<samp>包管理器提供了命令行界面，用于安装和删除项目依赖。项目的配置通常存储在项目本地的配置文件中</samp>

#### <samp>npm</samp>

<samp>npm，即 Node 包管理器(Node Package Manager)，是 Node.js 运行时默认的包管理器。在 npm 仓库中发布的第三方包可以指定为项目依赖，并通过命令行本地安装</samp>

<samp>npm 仓库包含服务端和客户端 JavaScript 库。 npm 是为在服务器上使用而设计的，服务器对依赖大小并不敏感。在安装包时，npm 使用嵌套依赖树解析所有项目依赖，每个项目依赖都会安装自己的依赖。这意味着如果项目依赖三个包 A、B 和 C， 而这三个包又都依赖不同版本的 D，则 npm 会安装包 D 的三个版本</samp>

#### <samp>Bower</samp>

<samp>Bower 与 npm在很多方面相似，包括包安装和管理 CLI，但它专注于管理要提供给客户端的包。Bower 与 npm 的一个主要区别是 Bower 使用打平的依赖结构。这意味着项目依赖会共享它们依赖的包，用户的任务是解析这些依赖。例如，如果你的项目依赖三个包 A、B 和 C，而这三个包又都依赖不同版本的 D，那就需要找一个同时满足 A、B、C 需求的包 D。这是因为打平的依赖结构要求每个包只能安装一个版本</samp>

#### <samp>JSPM</samp>

<samp>JSPM 是使用 SystemJS 构建的包管理器，用动态模块加载。这个包管理器本身与 npm 类似，但其包仓库与注册无关。在 npm、GitHub 或自定义仓库中注册包，都可以使用 JSPM 的 CLI 安装。JSPM 不会在服务器上构建和预编译资源，而是通过 SystemJS 按需将包交付给客户端。与 Bower 类似，JSPM 也使用打平的依赖结构</samp>

#### <samp>yarn</samp>

<samp>yarn 是 Facebook 开发的定制包管理器，从很多方面看是 npm 的升级版。yarn 可以通过自己的注册表访问相同的 npm 包，并且安装方式与 npm 也相同。yarn 和 npm 的主要区别是提供了加速安装、包缓 存、锁文件等功能，且提供了改进了包安全功能</samp>

### <samp>模块加载器</samp>

<samp>模块加载器可以让项目按需从服务器获取模块，而不是一次性加载所有模块或包含所有模块的 JS 文件。ECMAScript 6 模块规范定义了浏览器原生支持动态模块加载的最终目标。现在仍有很多浏览器不支持 ES6 模块加载。因此，模块加载器可以让客户端实现动态模块加载</samp>

#### <samp>SystemJS</samp>

<samp>SystemJS 模块加载器可以在服务器上使用，也可以在客户端使用。它支持所有模块格式，包括 AMD、 CommonJS、UMD 和 ES6；也支持浏览器内转译 (考虑到性能，不推荐在大型项目中使用)</samp>

#### <samp>RequireJS</samp>

<samp>RequireJS 构建于 AMD 模块规范之上，支持特别旧的浏览器。虽然 RequireJS 经实践证明很不错， 但 JavaScript 社区整体上还是会抛弃 AMD 模块格式。因此不推荐在大型项目中使用 RequireJS</samp>

### <samp>模块打包</samp>

<samp>模块打包器可以将任意格式、任意数量的模块合并为一个或多个文件，供客户端加载。模块打包器 会分析应用程序的依赖图并按需排序模块。一般来说，应用程序最终只需要一个打包后的文件，但多个结果文件也是可以配置生成的。模块打包器有时候也支持打包原始或编译的 CSS 资源。最终生成的文件可以自执行，也可以多个资源拼接在一起按需执行</samp>

#### <samp>Webpack</samp>

<samp>Webpack 拥有强大的功能和可扩展能力，是今天非常流行的打包工具。Webpack 可以绑定不同的模块类型，支持多种插件，且完全兼容大多数模板和转译库</samp>

#### <samp>JSPM</samp>

<samp>JSPM 是构建在 SystemJS 和 ES6 模块加载器之上的包管理器。JSPM 建议的一个工作流是把所有模块打包到一个文件，然后通过 SystemJS 加载。可以通过 JSPM CLI 使用这个功能</samp>

#### <samp>Browserify</samp>

<samp>Browserify 是稍微有点历史但久经考验的模块打包器，支持 Node.js 的 CommonJS `require()` 依赖语法</samp>

#### <samp>Rollup</samp>

<samp>Rollup 在模块打包能力方面与 Browserify 类似，但内置了摇树优化功能。Rollup 可以解析应用程序的依赖图，排除没有实际使用的模块</samp>

### <samp>编译/转译工具及静态类型系统</samp>

<samp>开发者通常希望使用很新的 ECMAScript 特性，而这些特性未必所有浏览器都支持。开发者也经常希望使用静态类型系统或特性在 ECMAScript 规范之外强化自己的代码</samp>

#### <samp>Babel</samp>

<samp>Babel 是将最新 ECMAScript 规范代码编译为兼容 ECMA 版本的一个常用工具。Babel 也支持 React 的 JSX，支持各种插件，与所有主流构建工具兼容</samp>

#### <samp>Google Closure Compiler</samp>

<samp>Google Closure Compiler 是强大的 JavaScript 编译器，能够执行各种级别的编译优化，同时也是稳健的静态类型检查系统。其类型注解要求以 JSDoc 风格编写</samp>

#### <samp>CoffeeScript</samp>

<samp>CoffeeScript 是 ECMAScript 语法的增强版，可以直接编译为常规 JavaScript。CoffeeScript 中绝大部分是表达式，这是受到了 Ruby、Python 和 Haskell 的启发</samp>

#### <samp>TypeScript</samp>

<samp>微软的 TypeScript 是 JavaScript 支持类型的超集，增加了稳健的静态类型检查和主要语法增强。因为它是 JavaScript 严格的超集，所以常规 JavaScript 代码也是有效的 TypeScript 代码。TypeScript 也可以使用类型定义文件指定已有 JavaScript 库的类型信息</samp>

#### <samp>Flow</samp>

<samp>Flow 是 Facebook 推出的简单的 JavaScript 类型注解系统，其类型语法与 TypeScript 非常相似，但除了类型声明没有增加其他语言特性</samp>

### <samp>高性能脚本工具</samp>

<samp>JavaScript 从一开始就没有考虑支持敏捷的计算。为解决性能问题，有很多项目致力于改造浏览器执行代码的方式</samp>

#### WebAssembly

<samp>WebAssembly 项目 (简称 Wasm) 正在实现一门语言，该语言可以在多处执行（可移植）并以二进制语言形式存在，可以作为多种低级语言 (如：C++ 和 Rust) 的编译目标。WebAssembly 代码在浏览器的一个与 JavaScript完全独立的虚拟机中运行，与各种浏览器 API 交互的能力极为有限。它可以与 JavaScript 和 DOM 以间接、受限的方式交互，但其更大的目标是创造一门可以在 Web 浏览器中（以及在任何地方） 运行的速度极快的语言，并提供接近原生的性能和硬件加速。WebAssembly 系列规范在 2019 年 12 月 5 日已成为 W3C 的正式推荐标准，是浏览器技术中非常值得期待的领域</samp>

#### <samp>asm.js</samp>

<samp>asm.js 的理论基础是 JavaScript 编译后比硬编码 JavaScript 运行得更快。asm.js 是 JavaScript 的子集， 可以作为低级语言的编译目标，并在常规浏览器或 Node.js 引擎中执行。现代 JavaScript 引擎在运行时推断类型，而 asm.js 代码通过使用词法提示将这些类型推断(及其相关操作)的计算大大降低。asm.js 广泛使用了定型数组(TypedArray)，相比常规的 JavaScript 数组能够显著提升性能。asm.js 没有 WebAssembly 快，但通过编译显著提升了性能</samp>

#### <samp>Emscripten 与 LLVM</samp>

<samp>虽然 Emscripten 从未在浏览器中执行，但它是重要的工具包，可以将低级代码编译为 WebAssembly 和 asm.js。Emscripten 使用 LLVM 编译器将 C、C++ 和 Rust 代码编译为可以直接在浏览器中运行的代码(asm.js)，或者可以在浏览器虚拟机中执行的代码(WebAssembly)</samp>

### <samp>编辑器</samp>

<samp>VIM、Emacs 及其同类的文本编辑器非常优秀，但随着构建环境和项目规模逐渐复杂，编辑器最好能够自动化常见任务，如代码自动完成、文件自动格式化、自动检查代码错误、自动补足项目目录</samp>

#### <samp>Sublime Text</samp>

<samp>Sublime Text 是比较流行的闭源文本编辑器。它可用于开发各种语言，还提供了大量可扩展的插件，由社区来维护。Sublime Text 的性能非常突出</samp>

#### <samp>Atom</samp>

<samp>Atom 是 GitHub 的开源编辑器，与 Sublime Text 有很多相同的特性，如社区在蓬勃发展且拥有第三方扩展包。Atom 的性能稍差，但它在不断地提升</samp>

#### <samp>Brackets</samp>

<samp>Brackets 是 Adobe 的开源编辑器，与 Atom 类似。但 Brackets 是专门为 Web 开发者设计的，提供了许多非常令人印象深刻的、面向前端编码的独特功能。该编辑器还有丰富的插件</samp>

#### <samp>Visual Studio Code</samp>

<samp>微软的 Visual Studio Code 是基于 Electron 框架的开源代码编辑器。与其他主流编辑器一样，Visual Studio Code 是高度可扩展的</samp>

#### <samp>WebStorm</samp>

<samp>WebStorm 是 JetBrains 的高性能 IDE，号称终极项目开发工具包，集成了前沿的前端框架，也集成了大多数构建工具和版本控制系统</samp>

### <samp>构建工具、自动化系统和任务运行器</samp>

<samp>把本地开发的项目目录转换为线上应用程序需要一系列步骤。每个步骤都需要细分为很多子任务， 如构建和部署应用程序要涉及模块打包、编译、压缩和发布静态资源，等等。运行单元和集成测试也涉及初始化测试套件和控制无头浏览器。为了让管理和使用这些任务更容易，也出现了很多工具可以用来更高效地组织和拼接这些任务</samp>

#### <samp>Grunt</samp>

<samp>Grunt 是在 Node.js 环境下运行的任务运行器，使用配置对象声明如何执行任务</samp>

#### <samp>Gulp</samp>

<samp>Brunch 也是 Node.js 构建工具，旨在简化配置，方便使用。Brunch 虽然比 Gulp 和 Grunt 出现得晚，但仍有很多插件可以选择</samp>

#### <samp>npm</samp>

<samp>npm 严格来讲不是构建工具，但它提供了脚本功能，很多项目会利用这个功能融合任务运行器。脚本是在 `package.json` 中定义的</samp>

### <samp>代码检查和格式化</samp>

<samp>代码检查器 (linter) 可以检查基本的语法并提供关于风格的警告</samp>

<samp>格式化器 (formatter) 可以分析语法规则并实现自动缩进、加空格和对齐代码等操作， 也可以自定义完成对文件内容的其他操作。格式化器不会破坏或修改代码或者代码的语义，因为它们可以避免做出影响代码执行的修改</samp>

#### <samp>ESLint</samp>

<samp>ESLint 是开源的 JavaScript 代码检查器，以常识化规则作为默认规则，支持配置；有大型可修改和可切换的规则库，可以用来调试工具的行为</samp>

#### <samp>Google Closure Compiler</samp>

<samp>Google Closure Compiler 内置了一个代码检查工具，可以通过命令行参数激活。这个代码检查器基于代码的抽象语法树工作，因此不会检查空格、缩进或其他不影响代码执行代码组织问题</samp>

#### <samp>JSLint</samp>

<samp>JSLint 是 Douglas Crockford 开发的 JavaScript 验证器。JSLint 从核心层面检查语法错误，以最大限 度保证跨浏览器兼容作为最低要求 (JSLint 遵循最严格的规则以确保代码最大的兼容性) 。可以启动 Crockford 关于代码风格的警告，包括代码格式、使用未声明的变量，等等。JSLint 虽然是使用 JavaScript 写的，但可以通过基于 Java 的 Rhino 解释器在命令行执行，也可以通过 WScript 或其他 JavaScript 解释器执行。它的网站提供了针对每个命令行解释器的自定义版</samp>

#### <samp>JSHint</samp>

<samp>JSHint 是 JSLint 的分支，支持对检查规则更宽泛的自定义。与 JSLint 类似，JSHint 也先检查语法错误，然后再检查有问题的代码模式。JSLint 的每项检查 JSHint 中也都有，但开发者可以更好地控制应用哪些规则。同样与 JSLint 类似，JSHint 可以使用 Rhino 在命令行中执行</samp>

#### <samp>ClangFormat</samp>

<samp>ClangFormat 是构建在 Clang 项目的 LibFormat 库基础上的格式化工具。它使用了 Clang 格式化规则自动重新组织代码(不会改变语义结构)。ClangFormat 可以在命令行中使用，也可以集成到编辑器里</samp>

### <samp>压缩工具</samp>

#### <samp>Uglify</samp>

<samp>Uglify 可以压缩、美化和最小化 JavaScript 代码的工具包。它可以在命令行运行，可以接收极为丰富的配置选项，实现满足需求的自定义压缩</samp>

#### <samp>Google Closure Compiler</samp>

<samp>虽然严格来讲并不是压缩工具，但 Google Closure Compiler 也在其优化工具中提供了不同级别的优化，能够缩小代码体积</samp>

#### <samp>JSMin</samp>

<samp>JSMin 是 Douglas Crockford 用 C 语言写的一个代码压缩程序，能对 JavaScript 进行基本的压缩。它主要用于删除空格和注释，确保结果可以正确运行。JSMin 也提供了 Window 可执行文件，有 C 语言和其他语言的源代码</samp>

#### <samp>Dojo ShrinkSaf</samp>

<samp>Dojo Toolkit 团队开发的 ShrinkSafe 会使用 Rhino 先把 JavaScript 代码解析为符号流，然后再安全地压缩代码。与 JSMin 一样，ShrinkSafe 也会删除多余的空格(但不删除换行和注释)，且会更进一步将局部变量名替换为两个字符的变量名。因此结果比 JSMin 压缩后的更小，不会引入语法错误</samp>

### <samp>单元测试</samp>

<samp>大多数 JavaScript 库会使用某种形式的单元测试来测试自己的代码，有的还会将自己的单元测试框架公之于众，供他人使用。测试驱动开发(TDD，Test Driven Development)是以单元测试为中心的软件开发过程</samp>

#### <samp>Mocha</samp>

<samp>Mocha 是目前非常流行的单元测试框架，为开发单元测试提供了优秀的配置能力和可扩展性。Mocha 的测试非常灵活，顺序执行可以保证生成准确的报告且更容易调试</samp>

#### <samp>Jasmine</samp>

<samp>Jasmine 虽然是比较老的单元测试框架，但仍非常流行。它内置了单元测试所需的一切，没有外部依赖，而且语法简单易读</samp>

#### <samp>qUnit</samp>

<samp>qUnit 是为 jQuery 设计的单元测试框架。事实上，jQuery 本身在所有测试中都使用 qUnit。除此之外， qUnit 对 jQuery 没有依赖，可用于测试任何 JavaScript 代码。qUnit 非常简单，容易上手</samp>

#### <samp>JsUnit</samp>

<samp>JsUnit是早期的JavaScript单元测试库，不依赖任何 JavaScript 库。JsUnit 是流行的 Java 测试框架 JUnit 的端口。测试在页面中运行，可以设置为自动测试并将结果提交给服务器。JsUnit 的网站上包含示例和文档</samp>

#### <samp>Dojo Object Harness</samp>

<samp>Dojo Object Harness(DOH) 最初是 Dojo 内部的单元测试工具，后来开放给所有人使用。与其他框架一样，DOH 的测试也是在浏览器中运行的</samp>

### <samp>文档生成器</samp>

<samp>大多数 IDE 包含主语言的文档生成器。因为 JavaScript 没有官方 IDE，所以过去文档要么手动生成，要么借用其他语言的文档生成器生成</samp>

#### <samp>ESDoc</samp>

<samp>ESDoc 能够为 JavaScript 代码生成非常高级的文档页面，包括从文档页面链接到源代码的功能。 ESDoc 还有一个插件库可以扩展其功能。不过，ESDoc 要求代码必须使用 ES6 模块</samp>

#### <samp>documentation.js</samp>

<samp>documentation.js 可以处理代码中的 JSDoc 注释，自动生成 HTML、Markdown 或 JSON 格式的文档。它兼容最新版本的 ECMAScript 和所有主流构建工具，也支持 Flow 的注解</samp>

#### <samp>Docco</samp>

<samp>Docco 是"简单快捷"的文档生成器。这个工具的理念是以简单的方式生成描述代码的 HTML 页面。Docco 在某些情况下会出问题，但它确实是生成代码文档的极简方法</samp>

#### <samp>JsDoc Toolkit</samp>

<samp>JsDoc Toolkit 是早期的 JavaScript 文档生成器。它要求代码中包含 Javadoc 风格的注释，然后可以基于这些注释生成 HTML 文件。可以使用预置的 JsDoc 模板或自己创建的模式来自定义生成的 HTML 页 面格式。JsDoc Toolkit 是个 Java 包</samp>

#### <samp>YUI Doc</samp>

<samp>YUI Doc 是 YUI 的文档生成器。该生成器是用 Python 写的，因此要求安装 Python 运行时。YUI Doc 输出的 HTML 文件中集成了基于 YUI 的自动完成部件的属性和方法搜索功能。与 JsDoc 一样，YUI Doc 要求代码中包含 Javadoc 风格的注释。可以通过修改默认 HTML 模板和关联的样式表来修改默认的 HTML 输出。</samp>

#### <samp>AjaxDoc</samp>

<samp>AjaxDoc 的目标与前面的文档生成器稍有不同。它不会为 JavaScript 代码创建 HTML 文件，而是会创建与 .NET 语言(如 C#、Visual Basic)兼容的 XML 格式。这样就可以使用标准 .NET 文档生成器来创建 HTML 文档。AjaxDoc 要求所有文档注释的格式与 .NET 语言的文档注释格式类似。AjaxDoc 是为 ASP.NET Ajax 解决方案而创建的，但也可以用于独立的项目</samp>
