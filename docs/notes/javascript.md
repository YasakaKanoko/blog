# <samp>JavaScript</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

<samp>API 可以分成三大类</samp>

- <samp>浏览器控制类：操作浏览器</samp>
- <samp>DOM 类：操作网页的各种元素</samp>
- <samp>Web 类：实现互联网的各种功能</samp>

<samp>如果宿主环境是 Node，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API 等等</samp>

## <samp>BOM</samp>

<samp>BOM(Browser Object Model，浏览器对象模型)，处理浏览器窗口(`window`)和框架(`iframe`)，描述了与浏览器进行交互的方法和接口</samp>

- <samp>弹出新的浏览器窗口</samp>
- <samp>移动、关闭浏览器窗口以及调整窗口大小</samp>
- <samp>提供 Web 浏览器详细信息的定位对象</samp>
- <samp>提供用户屏幕分辨率详细信息的屏幕对象</samp>
- <samp>对 `cookie` 的支持</samp>
- <samp>加入 `ActiveXObject` 类，通过 js 实例化 `ActiveX` 对象</samp>

<samp>`window` 对象具有双重角色，既是 js 访问浏览器窗口的接口，又是全局对象</samp>

### <samp>window</samp>

- <samp>`closed`：返回窗口是否关闭</samp>

- <samp>`document`：返回对 `document` 对象的只读引用</samp>

- <samp>`history`：返回对 `history` 对象的只读引用</samp>:star:

- <samp>`innerHeight`：返回窗口内部高度(包括水平滚动条的高度)</samp>:star:

- <samp>`innerWidth`：返回窗口内部宽度(包括垂直滚动条的宽度)</samp>:star:

- <samp>`length`：返回 `window` 框架数量(`<frame>` 或 `<iframe>`元素)</samp>

- <samp>`location`：返回 `Location` 对象的只读引用</samp>:star:
- <samp>`localStorage`：返回 `Storage` 对象的只读引用，存储的数据跨浏览器会话保存</samp>:star:

- <samp>`name`：设置或返回窗口名称</samp>

- <samp>`navigator`：返回对 `Navigator` 对象的只读引用</samp>:star:

- <samp>`opener`：返回对打开该窗口的窗口引用；如果 A 打开了 B，那么 B.opener 返回 A</samp>

- <samp>`outerHeight`：返回整个浏览器的高度</samp>

- <samp>`outerWidth`：返回整个浏览器的宽度</samp>

- <samp>`parent`：返回当前窗口或子框架的父窗口</samp>

- <samp>`scrollX`：返回文档/页面水平方向滚动的像素值；`pageXOffset` 是 `scrollX` 的别名</samp>:star:

- <samp>`scrollY`：返回文档在垂直方向已滚动的像素值；`pageYOffset` 是 `scrollY` 的别名</samp>:star:

  ```js
  if (oDiv.offsetTop <= window.pageYOffset + window.innerHeight) {
    // ...
  }
  ```

- <samp>`screen`：返回 `Screen` 对象</samp>:star:

- <samp>`screenLeft`、`screenX`：获取一个元素相对于屏幕左上角的 x 坐标的属性</samp>:star:

- <samp>`screenTop`、`screenY`：获取一个元素相对于屏幕左上角的 y 坐标的属性</samp>:star:

- <samp>`self`：返回指向当前窗口的引用；等价于 `window`</samp>

- <samp>`top`：返回 `window` 层次最顶层的窗口的引用</samp>

- <samp>`window`：`window.window` 指向 `window` 对象本身，等价于 `self`</samp>

#### <samp>Instance methods</samp>

- <samp>`alert()`：指示浏览器显示一个带有可选消息的对话框，并等待用户关闭该对话框</samp>:star:

- <samp>`clearInterval()`：取消 `setInterval()` 定时器</samp>:star:

- <samp>`clearTimeout()`：取消 `setTimeout()` 定时器</samp>:star:

- <samp>`close()`：关闭当前窗口或调用窗口</samp>:star:

- <samp>`confirm()`：指示浏览器显示带有可选消息的对话框，并等待用户确认或取消对话框</samp>:star:

- <samp>`focus()`：请求将窗口置于最前面</samp>

- <samp>`moveBy()`：将当前窗口坐标移动指定像素</samp>
- <samp>`moveTo()`：将当前窗口移动到指定坐标</samp>

- <samp>`open()`：以指定名加载指定资源到新的或现有的上下文(选项卡、窗口或 `iframe`)</samp>:star:

- <samp>`print()`：打印当前窗口的内容</samp>

- <samp>`prompt()`：显示可能提示用户输入的对话框，并等待用户提交文本或取消对话框</samp>:star:

- <samp>`resizeBy()`：将当前窗口的大小调整为指定的量</samp>
- <samp>`resizeTo()`：动态调整窗口大小</samp>

- <samp>`srollBy()`：按照指定像素滚动内容</samp>:star:

- <samp>`scrollTo()`：将内容滚动到指定坐标</samp>:star:

- <samp>`setInterval()`：指定的周期调用函数或表达式</samp>:star:

- <samp>`setTimeout()`：指定毫秒数后调用函数或表达式</samp>:star:

### <samp>Navigator</samp>

- <samp>`appCodeName`：返回浏览器的代码名；以 Netscape 代码为基础的浏览器，返回值是 `'Mozila'`</samp>
- <samp>`appName`：返回浏览器名称</samp>
- <samp>`appVersion`：返回浏览器平台和版本信息</samp>

- <samp>`cookieEnabled`：返回指明浏览器是否启用 `cookie`</samp>:star:

- <samp>`onLine`：返回指明系统是否处于脱机模式的布尔值</samp>:star:

- <samp>`platform`：返回运行浏览器的操作系统平台</samp>

- <samp>`userAgent`：返回客户端发送给服务器的 `user-agent` 值</samp>:star:

- <samp>`plugins`：返回包含客户端所有插件的数组</samp>

#### <samp>Instance methods</samp>

- <samp>`javaEnabled()`：规定浏览器是否支持并启用了 Java</samp>
- <samp>`taintEnabled()`：规定浏览器是否启用了数据污点(data tainting)</samp>

### <samp>History</samp>

- <samp>`length`：返回浏览器历史列表的 URL 数量</samp>:star:

#### <samp>Instance methods</samp>

- <samp>`back()`：加载 `history` 列表的前一个 URL</samp>:star:
- <samp>`forward()`：加载 `history` 列表的下一个 URL</samp>:star:
- <samp>`go()`：加载 `history` 列表的某个具体页面</samp>:star:

### <samp>Location</samp>

- <samp>`hash`：设置或返回从井号(`#`)开始的 URL(锚点)</samp>:star:
- <samp>`host`：设置或返回主机名和当前 URL 的端口号</samp>:star:
- <samp>`hostname`：设置或返回当前 URL 的主机名</samp>
- <samp>`href`：设置或返回完整的 URL</samp>:star:
- <samp>`pathname`：设置或返回当前 URL 的路径部分</samp>:star:
- <samp>`port`：设置或返回当前 URL 的端口号</samp>
- <samp>`protocol`：设置或返回当前 URL 的协议</samp>:star:
- <samp>`search`：设置或返回查询部分(`?` 开始的 URL 部分)</samp>:star:

#### <samp>Instance methods</samp>

- <samp>`assign()`：加载新的文档</samp>:star:
- <samp>`reload('force')`：重新加载当前文档</samp>:star:
- <samp>`replace()`：用新文档替换当前文档</samp>:star:

### <samp>Screen</samp>

- <samp>`availHeight`：返回浏览器窗口在屏幕上可占用的垂直空间(不包括任务栏)</samp>
- <samp>`availWidth`：返回浏览器窗口可占用的水平宽度(不包括任务栏)</samp>
- <samp>`colorDepth`：返回屏幕的颜色深度</samp>
- <samp>`height`：返回屏幕的高度</samp>
- <samp>`pixelDepth`：返回屏幕的位深度/色彩深度</samp>
- <samp>`width`：返回屏幕的宽度</samp>

## <samp>DOM</samp>

<samp>文档对象模型 ( Document Object Model, 简称 DOM )，是实现网站交互的关键要素。它是一种接口，允许编程语言操作网站的内容、结构和样式</samp>

<samp>`document` 是一个内置对象，提供的属性和方法，可用于访问和修改网站</samp>

- <samp>在浏览器控制台中，输入 `document`，将输出与 Elements 选项卡相同的内容</samp>

- <samp>`document` 是一个对象，修改 DOM ，就是修改 `document` 的属性</samp>

  ::: code-group

  ```js
  document.body.style.backgroundColor = 'fuchsia';
  ```

  ```html
  <body style="background-color: fuchsia;">
    <h1>Document Object Model</h1>
  </body>
  ```

  :::

> [!NOTE]
>
> <samp>任何连字符的 CSS 属性在 JavaScript 中都将以驼峰命名法(camelCase)形式书写</samp>

## <samp>AJAX</samp>

<samp>AJAX (Asynchronous JavaScript And XML)是指浏览器和服务器之间异步数据传输</samp>

- <samp>XHR(XMLHTTPRequest)：IE 通过 XHR API 完成请求的发送，通过一个构造函数完成</samp>

- <samp>Fetch API：由于 XHR API 的诸多缺陷，在 HTML5 和 ES6 发布后，产生一套更完善的 API 来发送请求，这个函数是 `fetch`，返回一个 Promise，当接受完服务器的响应头，Promise 完成</samp>

::: code-group

```js[XHR API]
// 创建发送请求的对象
var xhr = new XMLHttpRequest();

// 事件
xhr.onreadystatechange = () => {
  // 事件处理函数: 当请求的状态发生变化时运行的函数
  // readyState属性: 0-4之间的整数, 表示请求/响应的状态, 如下
  // 1. open()被调用
  // 2. send()被调用
  // 3. 接收到响应信息
  // 4. 请求完成

  // xhr.responseText // 获取服务器响应的消息体文本
  if (xhr.readyState === 4) {
    console.log('服务器已完成响应');
    console.log(JSON.stringify(xhr.responseText));
  }
  // xhr.getResponseHeader('Content-Type'); // 获取响应头Content-Type的值
}
// 配置请求: 请求方法, 地址
xhr.open('GET', 'http://localhost:3000/');
// 设置请求头
xhr.setRequestHeader('Content-Type', 'application/json');
// 构建请求体，如果没有请求体则直接传递null
xhr.send(null);
```

```js[Fetch API]
fetch('http://localhost:3000/').then((res) => {
  // 返回response属性和方法
  // console.log(res);
  // 响应头类型
  // console.log(res.headers.get('Content-Type'))
  // text(): 使用文本格式返回响应体内容
  // json(): 使用json格式返回响应体内容
  return res.text();
}).then((res) => {
  // 输出响应体的内容
  console.log(res)
});


async function fetchData() {
  const headers = await fetch('http://localhost:3000/');
  const body = await headers.text();
  return body;
}
```

:::

## <samp>ES6</samp>

### <samp>变量声明</samp>

- <samp>`var`</samp>

  - <samp>**全局作用域**：污染全局变量</samp>

  - <samp>**重复声明**：导致数据被覆盖</samp>

  - <samp>**变量提升**：闭包问题</samp>

    ::: code-group

    ```js[closure]
    var div = document.getElementById('divButtons');
    
    for (var i = 1; i <= 10; i++) {
    	var btn = document.createElement('button');
    	btn.innerHTML = '按钮' + i;
    	div.appendChild(btn);
    	btn.onclick = () => {
    	console.log(i);
    	}
    }
    ```

    ```js[IIFE]
    var div = document.getElementById('divButtons');
    
    for (var i = 1; i <= 10; i++) {
      var btn = document.createElement('button');
      btn.innerHTML = '按钮' + i;
      div.appendChild(btn);
      (function (i) {
        btn.onclick = () => {
          console.log(i);
        }
      })(i);
    }
    ```

    :::

- <samp>`let` 与 `const`</samp>

  - <samp>**块级作用域**</samp>
  - <samp>**暂时性死区**：不允许重复声明</samp>

### <samp>模板字符串</samp>

<samp>使用反引号 <code>`</code> 表示，使用 <code>${}</code> 实现文本插值</samp>

- <samp>多行字符串</samp>

- <samp>字符串拼接</samp>

<samp>**标记函数**：允许自定义模板字符串的处理方式</samp>

```js
let name = 'John';
let age = 18;

let html = highlight`<p>My name is ${name}, and I am ${age} years old.</p>`;
```

### <samp>Promise</samp>

#### <samp>What's Asynchronous JavaScript?</samp>

<samp>Asynchronous JavaScript allows you to break down bigger projects into smaller tasks.</samp>

- <samp>Callbacks</samp>
- <samp>Promises</samp>
- <samp>Async/Await</samp>

## <samp>函数式编程</samp>

### <samp>柯里化</samp>

<samp>柯里化主要用于简化代码结构，提高系统的维护性。一个方法只有一个参数，强制功能的单一性，自然做到功能内聚，降低耦合</samp>

<samp>优点：降低代码的重复，提高代码的适应性</samp>

