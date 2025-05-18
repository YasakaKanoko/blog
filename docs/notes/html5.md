# <samp>HTML5</samp>

<samp>HTML5 不仅仅只是做为 HTML 标记语言的一个最新版本，它制定了 Web 应用开发的一系列标准，成为第一个**将 Web 作为应用开发平台**的 HTML 语言</samp>

- <samp>新元素：新语义标签、智能表单、多媒体标签等；</samp>

- <samp>提供一系列 JavaScript API，如地理定位、重力感应、硬件访问等</samp>

- <samp>结合 Canvas 开发网页版游戏</samp>

<samp>HTML5 广义概念：HTML5 代表浏览器端技术的一个发展阶段。在这个阶段，浏览器的呈现技术得到了飞跃发展和广泛支持，它包括：HTML5、CSS3、JavaScript API 在内的一套技术组合。因此 HTML5 不等于 HTML next version</samp>

<samp>HTML5 是新一代开发**Web富客户端应用程序**整体解决方案。富客户端即具有很强的交互性和体验的客户端程序。比如说，浏览博客、在线听歌的网站、即时聊天网站</samp>

> <samp>单纯地从技术的角度讲，兼容性问题只会让开发者徒增烦恼。如果网页端的程序能做到PC客户端的体验，就会对后者构成威胁</samp>

---

>[!Note]
>
> <samp><b>应用场景</b></samp>
>
> - <samp>极具表现力的网页</samp>
> - <samp>网页应用程序</samp>
>   - <samp>代替 PC 端的软件：iCloud、百度脑图、Office 365 等</samp>
>   - <samp>APP 端的网页：淘宝、京东、美团等</samp>
> - <samp>微信端：公众号、小程序等</samp>
> - <samp>混合式本地应用</samp>
> - <samp>简单的游戏</samp>

<samp><b>HTML5 新增内容</b></samp>

- <samp>标签：更语义化的标签、应用程序标签</samp>
- <samp>属性：链接关系描述、结构数据标记、ARIA、自定义属性</samp>
- <samp>智能表单：新的表单类型、虚拟键盘适配</samp>
- <samp>网页多媒体：音频、视频、字幕</samp>
- <samp>Canvas：2D、3D ( WebGL )</samp>
- <samp>SVG</samp>

## <samp>新语义标签</samp>

<samp>新标签</samp>

- <samp>`<section>`：区块</samp>
- <samp>`<article>`：文章。如文章、评论、帖子、博客</samp>
- <samp>`<header>`：页眉</samp>
- <samp>`<footer>`：页脚</samp>
- <samp>`<nav>`：导航</samp>
- <samp>`<aside>`：侧边栏</samp>
- <samp>`<figure>`：媒介内容分组</samp>
- <samp>`<mark>`：标记 ( 不常用 )</samp>
- <samp>`<progress>`：进度 ( 不常用 )</samp>
- <samp>`<time>`：日期</samp>

> [!Note]
>
> <samp>本质上，新语义标签与 `<div>`、`<span>`没有区别，只是其具有**表意性**，使用时除了在 HTML 结构上需要注意外，其它和普通标签的使用无任何差别，可以理解成 `<div class="nav">` 相当于 `<nav>`</samp>
>
> <samp>HTML5 中单标签不需要写关闭符号了</samp>

## <samp>兼容性</samp>

<samp>新标签在不支持 HTML5 的浏览器中可能出现兼容性问题，解决方式是通过条件语句判断 IE 版本，然后引入 `html5shiv.js` 文件</samp>

```html
<!--  条件注释: 只有ie能够识别-->
<!--[if lt IE 9]>
	<script src="bower_components/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

## <samp>表单</samp>

<samp>HTML5 在 Web 表单方向做了很大的改进，如拾色器、日期/时间组件等</samp>

- <samp>`email`：只能输入 email 格式。自带验证功能</samp>
- <samp>`tel`：手机号码</samp>
- <samp>`url`：只能输入 url 格式</samp>
- <samp>`number`：只能输入数字</samp>
- <samp>`search`：搜索框</samp>
- <samp>`range`：滑动条</samp>
- <samp>`color`：拾色器</samp>
- <samp>`time`：时间</samp>
- <samp>`date`：日期</samp>
- <samp>`datetime`：时间日期</samp>
- <samp>`month`：月份</samp>
- <samp>`week`：星期</samp>

> [!Note]
>
> <samp>上面的部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用</samp>

### <samp>数据列表</samp>

<samp>`<datalist>`：数据列表</samp>

> <samp>将输入框 `input` 的 `list` 属性与数据列表的 `id` 绑定，可以给输入框加入下拉菜单提供一些提示值</samp>

```html
<label
  >Choose a browser from this list: <input list="browsers" name="myBrowser"
/></label>
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

<samp>效果</samp>

<label>Choose a browser from this list: <input list="browsers" name="myBrowser"/></label>

<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>

### <samp>度量器</samp>

<samp>`<meter>`：进度条，可以用来表示表单填写进度</samp>

- <samp>`value`：当前值</samp>

- <samp>`min`：最小值，也是左端点</samp>

- <samp>`max`：最大值，也是右端点</samp>

- <samp>`low`：低于该值时警告</samp>

- <samp>`high`：高于该值时警告</samp>

```html
<meter value="81" min="0" max="100" low="60" high="80"/>
```

<samp>效果</samp>

<meter value="81" min="0" max="100" low="60" high="80"/>

### <samp>新增表单属性</samp>

<samp>HTML5 新增表单属性</samp>

- <samp>`placeholder`：占位符</samp>

- <samp>`autofocus`：自动获取焦点。不需要值的属性</samp>

- <samp>`multiple`：文件上传多选或多个邮箱地址。不需要值的属性</samp>

- <samp>`autocomplete`：自动完成</samp>

  > - <samp>`on` 开启 ( 默认 )，`off` 取消。用于表单元素，也可用于表单自身</samp>
  > - <samp>自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。</samp>

- <samp>`form`：指定表单项属于哪个 `form`，处理复杂表单时会需要</samp>

- <samp>`novalidate`：关闭默认的验证功能 ( 只能加给 `form` )</samp>

- <samp>`required`：必填项</samp>

- <samp>`pattern`：自定义正则，验证表单</samp>

- <samp>`oninput`：事件，用户输入内容时触发，可用于输入字数统计</samp>

- <samp>`oninvalid`：事件，验证不通过时触发</samp>

  > <samp>比如，如果验证不通过时，想弹出一段提示文字，就可以用到它</samp>

## <samp>多媒体</samp>

<samp>在 HTML5 之前，在网页上播放音频/视频的通用方法是利用 Flash 来播放</samp>

<samp>大多情况下，并非所有用户的浏览器都安装了 Flash 插件，由此使得音频、视频播放的处理变得非常复杂；并且移动设备的浏览器并不支持 Flash 插件</samp>

<samp>H5 里面提供了视频和音频的标签</samp>

### <samp>音频</samp>

<samp>`<audio>`：解决音频播放问题</samp>

- <samp>`autoplay`：自动播放。写作`autoplay` 或  `autoplay = ""`</samp>
- <samp>`controls`：控制条</samp>
- <samp>`loop`：循环播放</samp>
- <samp>`preload`：预加载。同时设置 `autoplay` 时，此属性将失效</samp>

```html
<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="/shared-assets/audio/t-rex-roar.mp3"></audio>
  <a href="/shared-assets/audio/t-rex-roar.mp3"> Download audio </a>
</figure>
```

<samp>兼容性</samp>

```html
<audio controls loop>
  <source src="music/yinyue.mp3"/>
  <source src="music/yinyue.ogg"/>
  <source src="music/yinyue.wav"/>
  抱歉, 你的浏览器暂不支持此音频格式
</audio>
```

### <samp>视频</samp>

<samp>`<video>`：解决视频播放的问题</samp>

```html
<video controls width="250">
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
</video>
```

- <samp>`autoplay`：自动播放。写作`autoplay` 或  `autoplay = ""`</samp>
- <samp>`controls`：控制条</samp>
- <samp>`loop`：循环播放</samp>
- <samp>`preload`：预加载。同时设置 `autoplay` 时，此属性将失效</samp>
- <samp>`width`：播放窗口宽度</samp>
- <samp>`height`：播放窗口的高度</samp>

<samp>兼容性</samp>

```html
<video controls width="250">
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  抱歉, 暂不支持此视频
</video>
```

## <samp>新增功能</samp>

### <samp>拖拽</samp>

<samp>`draggable="true"` ：设置此元素是否可以进行拖拽操作</samp>

> <samp>**图片**、**链接**默认是开启拖拽的</samp>

<samp>事件监听</samp>

- <samp>`ondragstart`：当拖拽开始时调用</samp>
- <samp>`ondragleave`：当鼠标离开拖拽元素时调用</samp>
- <samp>`ondragend`：当拖拽结束时调用</samp>
- <samp>`ondrag`：整个拖拽过程都会调用</samp>

<samp>如果你想把元素 A 拖拽到元素 B 里，那么元素 B 就是目标元素</samp>

<samp>对目标元素设置事件监听</samp>

- <samp>`ondragenter`：当拖拽元素进入时调用</samp>
- <samp>`ondragover`：当拖拽元素停留在目标元素上时，就会连续一直触发，不管拖拽元素此时是移动还是不动的状态</samp>
- <samp>`ondrop`：当在目标元素上松开鼠标时调用</samp>
- <samp>`ondragleave`：当鼠标离开目标元素时调用</samp>

> [!Note]
>
> <samp>在编写 `ondragover` 事件监听时，一定要**阻止拖拽事件的默认行为**，否则，`ondrop` 事件将无法触发</samp>

```js
// 当拖拽元素在目标元素上时，连续触发
tar.ondragover = function (e) {
    // 阻止拖拽事件的默认行为
    e.preventDefault();
    // ……
}
```

### <samp>历史记录</samp>

<samp>界面上的所有 JS 操作不会被浏览器记住，就无法回到之前的状态</samp>

<samp>在 HTML5 中通过 `window.history` 操作访问历史状态，让一个页面可以有多个历史状态。`window.history` 对象可以管理历史记录，可用于单页面应用，以实现无刷新改变网页内容</samp>

```js
// 前进
window.history.forward(); 

// 后退
window.history.back();

// 刷新
window.history.go(); 

// n=1 前进; n=-1 后退; n=0 刷新
window.history.go(n); // 如果移动的位置超出了访问历史的边界, 会静默失败, 但不会报错

// 向浏览器的会话历史栈增加了一个条目
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);
```

### <samp>获取地理位置</samp>

<samp>JS 获取地理位置的方式</samp>

- <samp>`navigator.getCurrentPosition(successCallback, errorCallback, options)`：获取当前地理信息</samp>
- <samp>`navigator.watchPosition(successCallback, errorCallback, options)`：重复获取当前地理信息</samp>

<samp>当成功获取地理信息后，会调用 `succssCallback`，并返回一个包含位置信息的对象 `position`</samp>

- <samp>`position.coords.latitude`：纬度</samp>
- <samp>`position.coords.longitude`：经度</samp>

<samp>`coords` 即坐标。可选参数 `options` 对象可以调整位置信息数据收集方式</samp>

<samp>当获取地理信息失败后，会调用 `errorCallback`，并返回错误信息 `error`</samp>

### <samp>全屏</samp>

<samp>HTML5 规范允许用户自定义网页上任一元素全屏显示</samp>

<samp>开启/关闭全屏显示</samp>

```js
//让元素开启全屏显示
dom.requestFullscreen()  

//让元素关闭全屏显示
dom.cancleFullscreen()    
```

<samp>为考虑兼容性问题，不同的浏览器可能需要在此基础之上，添加私有前缀</samp>

<samp>如：`webkitRequestFullScreen`、`webkitCancleFullScreen`、`mozRequestFullScreen`、`mozCancleFullScreen` 等。( 有无前缀时 `screen`中的 `s` 的大小写不一样）</samp>

<samp>检测当前是否处于全屏状态：`document.fullScreen`。同样可能需要私有前缀</samp>

<samp>全屏伪类：用于 CSS 中，当元素处于全屏状态时，改变它的样式</samp>

- `:full-screen {}`
- `:-webkit-full-screen {}`
- `:moz-full-screen {}`

## <samp>Web存储</samp>

<samp>传统方式以 `document.cookie` 进行存储，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便</samp>

<samp>HTML5 规范提出了两种解决方案</samp>

- <samp>`window.sessionStorage`：会话存储</samp>

  - <samp>保存在内存中</samp>

  - <samp>生命周期为关闭浏览器窗口。当窗口关闭时数据销毁</samp>

  - <samp>在同一个窗口下数据可以共享</samp>


- <samp>`window.localStorage`：本地存储</samp>

  - <samp>可能保存在浏览器内存里，也可能在硬盘里</samp>

  - <samp>永久生效，除非手动删除 ( 比如：清理垃圾的时候 )</samp>  

  - <samp>可以多窗口共享</samp>


<samp>Web 存储的特性</samp>

- <samp>设置、读取方便</samp>
- <samp>容量较大，`sessionStorage` 约 5M、`localStorage`  约 20M</samp>
- <samp>只能存储字符串，可以将对象  `JSON.stringify()`  编码后存储</samp>

<samp>使用方法</samp>

```js
// 设置存储内容
setItem(key, value);

// 读取存储内容
getItem(key);   

// 根据键，删除存储内容
removeItem(key);

// 清空所有存储内容
clear(); 

// 根据索引值来获取存储内容
key(n);            
```

<samp>使用时需要指明调用的是哪一种存储的方法</samp>

```js
window.sessionStorage.setItem('userName', txt.value);
```

## <samp>网络状态</samp>

<samp>检测用户当前的网络状况，通过事件监听来实现，事件返回一个布尔值</samp>

- <samp>`window.online`：网络连接时被调用</samp>
- <samp>`window.offline`：网络断开时被调用 ( 拔掉网线或者禁用以太网 )</samp>

<samp>使用方法</samp>

```js
window.addEventListener('online', function () {
  alert('网络连接建立！');
});
window.addEventListener('offline', function () {
  alert('网络连接断开！');
})
```

## <samp>应用缓存</samp>

<samp>HTML5 中可以轻松的构建一个离线应用，只需要创建一个 **cache manifest 缓存清单文件**</samp>

### <samp>缓存清单文件的格式</samp>

<samp>缓存清单文件中列出了浏览器应缓存，以供离线访问的资源。推荐使用 `.appcache` 作为后缀名，另外还要添加 MIME 类型</samp>

<samp>缓存清单文件里的内容格式</samp>

- <samp>顶行写 `CACHE MANIFEST`</samp>
- <samp>`CACHE`：指定我们需要缓存的静态资源，如：CSS、image、js 等</samp>
- <samp>`NETWORK`： 指定需要在线访问的资源，可使用通配符 ( 也就是不需要缓存的、必须在网络下面才能访问的资源 )</samp>
- <samp>`FALLBACK`： 当被缓存的文件找不到时的备用资源 ( 当访问不到某个资源时，自动由另外一个资源替换)</samp>

<samp>如下</samp>

```sh
CACHE MANIFEST
# 要缓存的文件
CACHE:
    images/img1.jpg
    images/img2.jpg
# 指定必须联网才能访问的文件
NETWORK:
     images/img3.jpg
     images/img4.jpg
# 当前页面无法访问是回退的页面
FALLBACK:
    404.html
```

### <samp>缓存清单文件的使用</samp>

<samp>假如我们创建一个缓存清单文件叫做 `demo.appcache`，在需要应用缓存的页面根元素 ( 即 HTML 标签 ) 里，添加属性：`manifest="demo.appcache"`，路径要保证正确。如：</samp>

```html
<html manifest="01.appcache"> </html>
```

### <samp>优势</samp>

<samp>使用缓存的优势</samp>

- <samp>可配置需要缓存的资源</samp>
- <samp>网络无连接应用仍可用</samp>
- <samp>本地读取缓存资源，提升访问速度，增强用户体验</samp>
- <samp>减少请求，缓解服务器负担</samp>

## <samp>元素的嵌套关系</samp>

<samp>HTML5 的嵌套关系</samp>

- <samp>块级元素可以包含行内元素</samp>
- <samp>块级元素不一定能包含块级元素。比如：`div` 中可以包含 `div`，但 `p` 标签中不能包含 `div`</samp>
- <samp>行内元素一般不能包含块级元素。比如：`span` 中不能包含 `div`。特例：在 HTML5 中，`a` 标签中可以包含 `div`</samp>

> [!Note]
>
> <samp>在 HTML5 中 `a > div` 是合法的， `div > a > div` 是不合法的 </samp>
>
> <samp>在 HTML 4.0.1 中， `a > div` 是不合法的。</samp>

## <samp>CSS Reset</samp>

<samp>默认样式会带来一些问题：比如，有些默认样式我们是不需要的；有些默认样式甚至无法去掉</samp>

<samp>如果不需要默认样式，这里就需要使用CSS Reset</samp>

<samp>常见的 CSS Reset 方案</samp>

- <samp>方案一：[CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/)</samp>
- <samp>方案二：[雅虎的 CSS Reset](https://yuilibrary.com/yui/docs/cssreset/)</samp>

<samp>通过 CDN 引入</samp>

```html
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
```
