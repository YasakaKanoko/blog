# <samp> HTML </samp>

::: details <samp> 目录 </samp>

[[TOC]]

:::

<samp> 超文本标记语言(HyperText Markup Language)，定义了网页的结构和内容；浏览器访问网站时，其实就是从服务器下载 HTML 代码，然后渲染出网页 </samp>

<samp> 1999 年，HTML 4.01 发布 </samp>

<samp> 2014 年，HTML 5 发布 </samp>

<samp> `Ctrl` + `Shift` + `J`：Chrome 浏览器打开控制台 </samp>

<samp> **标签** </samp>

<samp> 网页的 HTML 代码由许许多多不同的标签(tag)构成 </samp>

- <samp> 标签分为单标签和双标签 </samp>
- <samp> 标签可以嵌套，必须正确闭合 </samp>

- <samp> HTML 语言忽略缩进和换行 </samp>

  > [!NOTE]
  >
  > <samp> `img` 标签会将换行视作一条线，不利于优化 </samp>
  >
  > <samp> 这是因为多个连续的空格，浏览器会将它们合并成一个，渲染时只渲染一个 </samp>
  >
  > <img src="../img/img_tag.png" style="margin:0" alt="img标签"/>

<samp> 浏览器在渲染网页时，会把 HTML 源码解析成一颗标签树，**标签** 就是树的 **节点**(node)，这种节点也称为 "**元素**" </samp>

<samp> **元素** 分为 **块级元素**(block)、**行内元素**(inline)</samp>

<samp> **属性** </samp>

<samp> 属性(attribute)是标签的信息，空格与标签名和其他属性分隔 </samp>

- <samp> 属性值放在双引号内 </samp>

- <samp> 属性名大小写不敏感。如：`onclick` 和 `onClick` 是同一个属性 </samp>

## <samp> 网页的基本结构 </samp>

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  </body>
</html>
```

- <samp> `<!doctype>`：表示文档类型，告知浏览器浏览器按照 HTML5 的规则处理网页 </samp>

- <samp> `<html>`：网页的顶层容器，也称为根元素(root element)，其他元素都是它的子元素。一个网页只能有一个 `<html>` 标签 </samp>
  - <samp> `lang`：表示网页内容默认的语言 </samp>
- <samp> `<head>`：放置网页的元信息，为网页渲染提供额外信息 </samp>
  - <samp> `<meta>`：设置网页的元数据 </samp>
  - <samp> `<link>`：连接外部样式表 </samp>
  - <samp> `<title>`：设置网页标题；显示在浏览器的标题栏，内部只能放置无格式的纯文本 </samp>
  - <samp> `<style>`：放置内嵌的样式表 </samp>
  - <samp> `<script>`：引入脚本 </samp>
  - <samp> `<noscript>`：浏览器不支持脚本时，所要显示的内容 </samp>
  - <samp> `<base>`：设置网页内部相对 URL 的计算基准 </samp>
- <samp> `<body>`：网页的主体内容 </samp>
- <samp> 注释：以 `<!--` 开头，以 `-->` 结尾 </samp>

### <samp> meta </samp>

<samp> `<meta>`：设置或说明网页的元数据，必须放在 `<head>` 里面 </samp>

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

- <samp> `charset`：指定网页的编码方式；如果指定为 utf-8，实际采用其他编码，会导致网页乱码 </samp>

- <samp> `name`：表示元数据的名字；`content`：表示元数据的值 </samp>

  ```html
  <head>
    <!-- 网页在手机端可以自动缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Hello World">
    <meta name="keywords" content="抽烟,喝酒,烫头">
    <meta name="author" content="于谦">
    <meta name="application-name" content="Application Name">
    <meta name="generator" content="program">
    <meta name="subject" content="your document's subject">
    <meta name="referrer" content="no-referrer">
  </head>
  ```

- <samp> `http-equiv`：补充 HTTP 回应的头信息字段，如果服务器发回的 HTTP 回应缺少某个字段 </samp>

  <samp> `content`：对应的字段内容 </samp>

  ```html
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
    <meta http-equiv="Content-Type" content="Type=text/html; charset=utf-8">
    <meta http-equiv="refresh" content="30">
    <meta http-equiv="refresh" content="30;URL='http://website.com'">
  </head>
  ```

### <samp> base </samp>

<samp> `<base>`：指定网页内部的所有相对 URL 的计算基准，只能放在 `<head>` 里面，没有闭合标签 </samp>

<samp> `<base>` 标签必须至少具有 `href` 属性或 `target` 属性之一 </samp>

```html
<head>
  <base href="https://www.example.com/files/" target="_blank">
</head>
```

- <samp> `href`：给出计算的基准网址 </samp>
- <samp> `target`：给出如何打开链接的说明 </samp>

## <samp> URL </samp>

<samp> URL：统一资源定位符(Uniform Resource Locator)的缩写，"网址"，表示各种资源的互联网地址 </samp>

- <samp> 协议(scheme)：浏览器请求服务器资源的方法 </samp>

  <samp> 默认是 HTTP 协议；HTTPS 是 HTTP 的加密版本，出于安全考虑 </samp>

- <samp> 主机(host)：资源所在的网站名或服务器的名字，又称为域名 </samp>

- <samp> 端口(port)：同一个域名下面可能同时包含多个网站，通过端口区分；HTTP 协议的默认端口是 80 </samp>

- <samp> 路径(path)：是资源在网站的位置；路径只包含目录名，不包含文件名，默认指向目录里的 `index.html` </samp>

- <samp> 查询参数(query parameter)：提供给服务器的额外信息 </samp>

  <samp> 参数位置在路径后面，使用 `?` 分隔 </samp>

  <samp> 多组参数之间使用 `&` 连接 </samp>

- <samp> 锚点(anchor)：网页内部的定位点，使用 `#` 加上锚点名称，放在网址的最后 </samp>

  <samp> 锚点名称通常是网页元素的 `id` 值 </samp>

<samp> URL 的组成部分，只能使用以下这些字符 </samp>

- <samp> 26 个英语字母 </samp>
- <samp> 10 个阿拉伯数字 </samp>

- <samp> 连词号(`-`)</samp>

- <samp> 句点(`.`)</samp>

- <samp> 下划线(`_`)</samp>

<samp> 18 个字符属于 URL 的保留字，转义字符：</samp>

- <samp> 空格：%20 </samp>

- <samp> `!`：%21 </samp>
- <samp> `#`：%23 </samp>
- <samp> `$`：%24 </samp>
- <samp> `&`：%26 </samp>
- <samp> `'`：%27 </samp>
- <samp> `(`：%28 </samp>
- <samp> `)`：%29 </samp>
- <samp> `*`：%2A </samp>
- <samp> `+`：%2B </samp>
- <samp> `,`：%2C </samp>
- <samp> `/`：%2F </samp>
- <samp> `:`：%3A </samp>
- <samp> `;`：%3B </samp>
- <samp> `=`：%3D </samp>
- <samp> `?`：%3F </samp>
- <samp> `@`：%40 </samp>
- <samp> `[`：%5B </samp>
- <samp> `]`：%5D </samp>

## <samp> 属性 </samp>

<samp> **属性**(attribute)：定制元素的行为，不同的属性会导致元素有不同的行为 </samp>

- <samp> 属性名与标签名一样，不区分大小写 </samp>

- <samp> 属性名与属性值之间，通过等号 `=` 连接 </samp>

- <samp> 如果属性是布尔属性，即属性值是一个布尔值，可以省略属性值，表示打开该属性 </samp>

<samp> **全局属性**(global attributes)：所有元素都可以使用的属性 </samp>

- <samp> `id`：表示元素的唯一标识符 </samp>

  <samp> `id` 的属性值可以在前加上 `#`，表示作为锚点使用 </samp>

  <samp> <a href="#"> 回到顶部 </a> </samp>

- <samp> `class`：对网页元素进行分类；用 `.` 表示 </samp>

- <samp> `title`：为元素添加附加说明；鼠标悬浮在元素上面时，`title` 属性值作为浮动提示 </samp>

  <p title="喜欢的少年是你"> <samp> 你是年少的欢喜 </samp> </p>

- <samp> `tabindex`： Tab 的顺序(index)</samp>

  - <samp> 负整数：获取焦点(如：JavaScript 的 `focus()`)，不参与 Tab 键对网页元素遍历，通常为 `-1` </samp>

  - <samp> `0`：参与 Tab 键的遍历，通常是按照在网页里出现的位置(建议设置为 `0`，按照自然顺序排列)</samp>

    ```html
    <p tabindex="0">获取焦点</p>
    ```

  - <samp> 正整数：按照从小到大的顺序，参与 Tab 键的遍历，如果多个元素 `tabindex` 属性相同，则按照源码顺序遍历 </samp>

- <samp> `accesskey`：指定网页元素获得焦点的快捷键 </samp>

  > - <samp> 必须配合功能键按下生效 </samp>
  >
  >   <samp> Windows 与 Linux：`Alt` + `字符` </samp>
  >
  >   <samp> Mac：`Ctrl` + `Alt` + `字符` </samp>
  >
  > - <samp> 如果与操作系统或浏览器级别的快捷键有冲突，不会生效 </samp>

  ```html
  <button accesskey="s">提交</button>
  ```

- <samp> `style`：指定元素的 CSS 样式 </samp>

- <samp> `hidden`：是一个布尔属性，表示当前网页元素不再与网页相关，浏览器将不再渲染该元素 </samp>

  ```html
  <p hidden>这段将不会显示在页面上。</p>
  ```

  > <samp> CSS 可见性要高于 `hidden` 属性，当 CSS 设置为可见时，`hidden` 属性将无效 </samp>

- <samp> `lang`：指定网页元素使用的语言 </samp>

  ```html
  <p lang="en">hello</p>
  <p lang="zh">你好</p>
  ```

  <samp> `lang` 必须符合 BCP47 标准 </samp>

  - <samp> `zh`：中文 </samp>
  - <samp> `zh-Hans`：简体中文 </samp>
  - <samp> `zh-Hant`：繁体中文 </samp>
  - <samp> `en`：英语 </samp>
  - <samp> `en-US`：美国英语 </samp>
  - <samp> `en-GB`：英国英语 </samp>
  - <samp> `es`：西班牙语 </samp>
  - <samp> `fr`：法语 </samp>

- <samp> `dir`：文字的阅读方向 </samp>
  - <samp> `ltr`：从左向右 </samp>
  - <samp> `rtl`：从右向左 </samp>
  - <samp> `auto`：由浏览器根据内容自行决定 </samp>

- <samp> `translate`：用于文本元素，指示翻译软件是否需要翻译该文本 </samp>

  <samp> `no` 表示不需要；`yes` 表示需要 </samp>

- <samp> `contenteditable`：允许用户修改内容 </samp>

  <samp> `true` 或空字符串，表示内容可编辑；`false` 表示不可编辑 </samp>

  ```html
  <p contenteditable="true">
    <samp>本句内容可修改</samp>
  </p>
  ```

  <p contenteditable="true">
    <samp> 本句内容可修改 </samp>
  </p>

- <samp> `spellcheck`：是否打开拼写检查；需要配合可编辑元素使用(如：`conteneditable`)才生效 </samp>

  ```html
  <p contenteditable="true" spellcheck="true">
    separate 与 seperate
  </p>
  ```

- <samp> `data-`：自定义数据，如果没有其他属性或元素合适放置数据时，可以放置在 `data-` 属性中 </samp>

  <samp> 通常配合 CSS 一起使用 </samp>

  ```html
  <div data-role="mobile">
    Mobile only
  </div>
  
  <style>
    div[data-role="mobile"] {
      display: none;
    }
  </style>
  ```

- <samp> 事件处理属性 </samp>

  <samp> 事件处理属性 (event handler)：响应用户的动作 </samp>

  > <samp> `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragexit`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting` </samp>

## <samp> 字符编码 </samp>

<samp> 服务器向浏览器发送 HTML 网页文件时，会通过 HTTP 头信息，声明网页的编码方式 </samp>

<samp> `Content-Type`：服务器发送的数据类型是 `text/html` (HTML 网页)，网页的文字编码是 `UTF-8` </samp>

```xml
Content-Type: text/html; charset=UTF-8
```

<samp> UTF-8 是 Unicode 字符集的一种表达方式，设计目的是包含世界上所有字符 </samp>

<samp> 每个字符的 Unicode 称为码点(code point)</samp>

- <samp> 不是每个 Unicode 字符都可以被打印，比如换行符的码点是十进制 10 (十六进制的 A)，没有对应的字面形式 </samp>

- <samp> 网页不允许混合使用多种编码，比如：使用了 UTF-8 就不能再插入其他编码字符 </samp>

<samp> 字符的码点的用 `N` 表示 </samp>

- <samp> 十进制：`&#N;` </samp>

- <samp> 十六进制：`&#xN;` </samp>

```html
<p>hello</p>

<p>&#104;&#101;&#108;&#108;&#111;</p>

<p>&#x68;&#x65;&#x6c;&#x6c;&#x6f;</p>
```

<samp> 字符实体(entity)：也叫转义字符 </samp>

- <samp> `<`：`&lt;` </samp>
- <samp> `>`：`&gt;` </samp>
- <samp> `"`：`&quot;` </samp>
- <samp> `'`：`&apos;` </samp>
- <samp> `&`：`&amp;` </samp>
- <samp> `©`：`&copy;` </samp>
- <samp> `#`：`&num;` </samp>
- <samp> `§`：`&sect;` </samp>
- <samp> `¥`：`&yen;` </samp>
- <samp> `$`：`&dollar;` </samp>
- <samp> `£`：`&pound;` </samp>
- <samp> `¢`：`&cent;` </samp>
- <samp> `%`：`&percnt;` </samp>
- <samp> `*`：`&ast;` </samp>
- <samp> `@`：`&commat;` </samp>
- <samp> `^`：`&Hat;` </samp>
- <samp> `±`：`&plusmn;` </samp>
- <samp> 空格：`&nbsp;` </samp>

## <samp> 语义(semantic)</samp>

```html
<header>页眉</header>
<main>
  <article>
    <h1>文章标题</h1>
    <p>文章内容</p>
  </article>
</main>
<footer>页尾</footer>
```

- <samp> `header`：既可以表示网页头部，也可表示文章或区块头部 </samp>
  - <samp> 当作为网页头部时，称为 "页眉"，放置导航和搜索栏 </samp>
  - <samp> 当作为文章头部时，放置文章标题、作者信息 </samp>
  - <samp> `header` 只能包含一个，不能嵌套 `footer` </samp>

- <samp> `footer`：页尾，包含版权信息和其他相关信息 </samp>
  - <samp> 也可放在文章末尾 </samp>
  - <samp> `footer` 不能嵌套 `header` 和 `footer` </samp>

- <samp> `main`：表示文章主题内容，一个页面只有一个 `main` </samp>
  - <samp> `main` 是顶层的标签，不能放置在 `header`、`footer`、`article`、`aside`、`nav` 等 </samp>
  - <samp> 功能性相关(如：搜索栏)不适合放入 `main` </samp>
- <samp> `article`：表示一段完整内容；如：一篇文章或一个帖子；包含标题等 </samp>
  - <samp> 一个网页可以包含一个或多个 `article` </samp>

- <samp> `aside`：放置与网页或文章主要内容间接相关部分；侧边栏、补充信息、评论等 </samp>

- <samp> `section`：表示一个包含主题的独立部分，通常表示一个章节 </samp>

- <samp> `nav`：放置页面或文档的导航信息 </samp>
  - <samp> `nav` 往往放置在 `header`，不适合在 `footer` </samp>
  - <samp> `nav` 通常是列表 </samp>

- <samp> `hgroup`：主标题包含多级标题 </samp>
  - <samp> `hgroup` 只能包含 `h1`~`h6`，不能包含其他标签 </samp>

## <samp> 文本标签 </samp>

- <samp> `div`：块级元素容器的通用标签；表示一个区块(division)</samp>

- <samp> `p`：块级元素，表示一个段落(paragraph)；可以是文本、图片、表单 </samp>

- <samp> `span`：通用的行内元素标签 </samp>

- <samp> `br`：换行 </samp>

  > <samp> 块级元素的间隔，不要使用 `br`，而是通过 CSS 样式调节 </samp>

- <samp> `wbr`：表示可选的断行；通常是在外语一些单词很长的语言或 URL 的断行 </samp>

  > <samp> 如果一行的宽度足够，就不断行 </samp>
  >
  > <samp> 如果一行的宽度不够，就断行 </samp>

- <samp> `hr`：表示文章中分隔不同的主题，会被浏览器渲染成一个水平线 </samp>

  > [!TIP]
  >
  > <samp> 这是一个历史遗留的标签，建议尽量避免使用，分割主题建议使用 `section` </samp>

- <samp> `pre`：块级元素，保留原来的格式(preformatted)，保留原始的换行和空格 </samp>

- <samp> `strong`：行内元素。表示内容具有很强的重要性，以粗体显示 </samp>

- <samp> `b`：表示内容需要引起注意的，以粗体显示(Boldface)</samp>

  > <samp> 它没有语义，违反了语义和样式分离的原则，建议优先使用 `strong` </samp>

- <samp> `em`：行内元素；表示强调(emphasize)；以斜体表示 </samp>

- <samp> `i`：(Italic) 表示与其他地方有所区别，以斜体表示 </samp>

  > <samp> 语义不强，建议优先使用 `em` </samp>

- <samp> `sub`：下标 </samp>

- <samp> `sup`：上标 </samp>

- <samp> `var`：表示代码或数学公式的变量 </samp>

- <samp> `u`：表示对内容提供某种注释；表示拼写错误。下划线表示 </samp>

  > <samp> `u` 会产生下划线，容易被误认为超链接，因此建议 CSS 清除样式 </samp>

- <samp> `s`：删除线 </samp>

- <samp> `blockquote`：块级标签；表示引用他人的话 </samp>

  <samp> `cite` 属性：值为网址，表示引言的来源，不会显示在网页 </samp>

  ```html
  <blockquote cite="https://quote.example.com">
    <p>天才就是 1% 的天赋和99%的汗水。</p>
  </blockquote>
  ```

- <samp> `cite`：文章资料来源 </samp>

  ```html
  <p>更多资料请看<cite>维基百科</cite>。</p>
  ```

- <samp> `q`：行内标签；引言 </samp>

  > <samp> 浏览器默认会斜体显示，并且会自动添加半角的双引号 </samp>

  ```html
  <p>
    莎士比亚的《哈姆雷特》有一句著名的台词：
    <q cite="https://quote.example.com">活着还是死亡，这是一个问题。</q>
  </p>
  ```

- <samp> `code`：行内元素；表示计算机代码 </samp>

  > <samp> 如果需要显示多行代码，需要放置在 `pre` 内部 </samp>

- <samp> `kbd`：行内元素；表示输入的内容，包含语音输入；以等宽字体显示，可以嵌套 </samp>
- <samp> `samp`：行内元素；表示计算机程序输出内容的一个例子，以等宽字体显示 </samp>

- <samp> `mark`：行内元素；表示突出显示的内容；以亮黄色背景显示 </samp>

- <samp> `small`：行内元素；常用于文章附带的版权信息或法律信息；以小一号字体显示 </samp>

- <samp> `time`：行内标签；为跟时间相关的内容提供机器可读格式 </samp>

  <samp> `datetime` 属性：指定机器可读的日期的格式 </samp>

  ```html
  <p>音乐会在<time datetime="20:00">晚上八点</time>开始</p>
  ```

  - <samp> 年份：`2011` </samp>
  - <samp> 年月：`2011-11` </samp>
  - <samp> 年月日：`2011-11-18` </samp>
  - <samp> 日期：`11-18` </samp>
  - <samp> 第几周：`2011-W47` </samp>
  - <samp> 有效时间：`14:54`、`14:54:39`、`14:54:39.929` </samp>
  - <samp> 日期和时间：`2011-11-18T14:54:39.929` </samp>

- <samp> `data`：提供机器可读内容 </samp>

  <samp> `value` 属性：表示内容 </samp>

  ```html
  <p>本次马拉松比赛第一名是<data value="39">张三</data></p>
  ```

- <samp> `address`：块级元素；表示某人或某个组织的联系方式 </samp>

  - <samp> 内容不能包含非联系信息，如：地址、日期 </samp>
  - <samp> 不能嵌套，内部不能包含标题等标签 </samp>
  - <samp> `address` 通常放在 `footer` 标签内 </samp>

- <samp> `abbr`：行内元素；表示标签内容的缩写 </samp>

  <samp> `title` 属性：鼠标悬停时给出完整提示；某些浏览器提供圆点下划线显示 </samp>

- <samp> `ins`：行内元素；表示给原始文档添加(insert)内容 </samp>

- <samp> `del`：表示删除(delete)的内容 </samp>

  <samp> 添加和删除都具有 `cite` 和 `datetime` 属性 </samp>

  <samp> `cite`：值为 URL，表示该网址可解释本次删改 </samp>

  <samp> `datetime`：表示删改的时间 </samp>

- <samp> `dfn`：行内元素；表示标签内容是一个术语(definition)</samp>
  - <samp> 和 `title` 结合使用，表示提示内容 </samp>
  - <samp> `dfn` 本身也是缩写，可以和 `abbr` 结合使用 </samp>

- <samp> `ruby`：表示文字的语音注释；主要用于东亚，如：汉语拼音、日语片假名，默认将语音注释，以小字体显示在文字上方 </samp>

  - <samp> `rp`：为不支持语音注释的浏览器，提供一个兼容的方案 </samp>

    ```html
    <ruby>
    汉<rp>(</rp><rt>han</rt><rp>)</rp>
    字<rp>(</rp><rt>zi</rt><rp>)</rp>
    </ruby>
    ```

    <samp> <ruby>
    汉 <rp>(</rp> <rt> han </rt> <rp>)</rp>
    字 <rp>(</rp> <rt> zi </rt> <rp>)</rp>
    </ruby> </samp>

  - <samp> `rt`：放置语音注释 </samp>

  - <samp> `rb`：划分文字单位，与语音注释一一对应(Chrome 不支持)</samp>

    ```html
    <ruby>
      <rb>汉</rb><rb>字</rb>
      <rp>(</rp>
      <rt>han</rt>
      <rt>zi</rt>
      <rp>)</rp>
    </ruby>
    ```

  - <samp> `rbc`：表示一组文字，通常包含多个 `rb` 元素 </samp>

  - <samp> `rtc`：表示一组语音注释，跟 `rbc` 对应 </samp>

    > <samp> Chrome 不支持 </samp>

    ```html
    <ruby style="ruby-position: under;">
      <rbc>
        <rb>汉</rb><rp>(</rp><rt>han</rt><rp>)</rp>
        <rb>字</rb><rp>(</rp><rt>zi</rt><rp>)</rp>
      </rbc>
      <rtc style="ruby-position: over;">
        <rp>(</rp><rt>Chinese</rt><rp>)</rp>
      </rtc>
    </ruby>
    ```

- <samp> `bdo`：行内元素；表示文字方向和网页主题内容方向不一致 </samp>

  ```html
  <p>床前明月光，<bdo dir="rtl">霜上地是疑</bdo>。</p>
  ```

- <samp> `bdi`：表示不确定文字方向，让浏览器自己决定 </samp>

  ```html
  <p><bdi>床前明月光，疑是地上霜。</bdi></p>
  ```

## <samp> 列表 </samp>

- <samp> `ol`：有序列表容器(ordered list)</samp>

  > <samp> 可以嵌套 `ol` 或 `ul` 标签，形成多级列表 </samp>

  - <samp> `reversed`：倒序的数字列表 </samp>

  - <samp> `start`：值是一个整数，表示数字列表的起始编号 </samp>

  - <samp> `type`：指定数字编号的样式 </samp>

    - <samp> `1`：整数(默认值)</samp>
    - <samp> `a`：小写字母 </samp>
    - <samp> `A`：大写字母 </samp>
    - <samp> `i`：小写罗马数字 </samp>
    - <samp> `I`：大写罗马数字 </samp>

    > [!NOTE]
    >
    > <samp> `type` 使用了字母，`start` 的属性值依然使用数字，例如：`start="3"` 表示从 `c` 开始 </samp>

- <samp> `ul`：一个无序列表容器(unordered list)</samp>

  <samp> `ul` 标签内部可以嵌套 `ul` 或 `ol`，形成多级列表 </samp>

- <samp> `li`：表示列表项，用在 `ol` 或 `ul` 容器之中 </samp>

  <samp> `value` 属性：定义当前列表项的编号，后面列表项会从这个值开始编号 </samp>

- <samp> `dl`：块级元素，表示一组术语的列表(description list)</samp>
  - <samp> `dt` (description term)：术语 </samp>
  - <samp> `dd` (description detail)：解释 </samp>

## <samp> img </samp>

<samp> `img`：行内元素。用于插入图片 </samp>

> - <samp> 它会将行高撑高，与文字在同一水平线位置 </samp>
>
> - <samp> 与 `a` 标签一起使用，将图片变成一个超链接 </samp>

- <samp> `alt`：图片的文字说明，在无法显示时(下载失败、关闭图片加载等)显示文本 </samp>

- <samp> `width`：宽度；单位：像素或百分比 </samp>

- <samp> `height`：高度；单位：像素或百分比 </samp>

  > <samp> 当宽度和高度只设置一个时，会自适应调整比例 </samp>

- <samp> `referrerpolicy`：图片加载的 HTTP 请求，默认会带有 `Referer` 头信息。对该行为进行设置 </samp>

- <samp> `crossorigin`：图片和网页属于不同的网站，网页加载图片就会导致跨域请求，对方服务器可能要求跨域认证。用来告诉浏览器，是否采用跨域的形式下载图片，默认是不采用 </samp>

  - <samp> `anonymous`：跨域请求不带有用户凭证(通常是 Cookie)</samp>

    ```html
    <!-- anonymous可省略 -->
    <img src="foo.jpg" crossorigin="anonymous">
    ```

  - <samp> `use-credentials`：跨域请求带有用户凭证 </samp>

- <samp> `loading`：只要解析到 HTML，就开始加载图片；对于很长的网页，这样做很浪费带宽，因为用户不一定会往下滚动，一直看到网页结束。用户很可能是点开网页，看了一会就关掉了，那些不在视口的图片加载的流量，就都浪费了 </samp>

  - <samp> `auto`：浏览器默认行为，等同于不使用 `loading` 属性 </samp>
  - <samp> `lazy`：启用懒加载 </samp>
  - <samp> `eager`：立即加载资源，无论它在页面上的哪个位置 </samp>

### <samp> figure </samp>

<samp> `figure`：图像区块；将图像和相关信息放在一起 </samp>

> <samp> `figure` 可以封装引言、代码、诗歌等。将主体内容与附加信息，封装在一起的语义容器 </samp>

<samp> `figcaption`：`figure` 的可选子元素；图像文本描述；通常用于放置标题 </samp>

```html
<figure>
  <img src="https://example.com/foo.jpg">
  <figcaption>示例图片</figcaption>
</figure>
```

### <samp> 响应式 </samp>

<samp> **响应式设计**(responsive web design)：根据不同尺寸的设备，产生良好的显示效果；响应式设计的图像，就是 **响应式图像**(responsive image)</samp>

<samp> 处理起来会产生三个问题 </samp>

- <samp> **体积**：桌面端显示的是大尺寸图像，文件较大；手机端屏幕小，需要显示小尺寸，节省带宽和流量 </samp>
- <samp> **像素密度**：桌面显示器是单倍像素密度，手机端是多倍像素密度，即显示时多个像素合并为一个像素，称为 Retina 屏幕；桌面端的图片没有足够高的像素精度，所以移到手机端会导致图像的锐利度有所下降 </samp>
- <samp> **视觉风格**：在桌面上，面积较大可以容纳更多细节；手机屏幕小，只需突出重点即可 </samp>

<samp> 响应式图像属性 </samp>

- <samp> `srcset`：指定多张图像，适应不同像素密度的屏幕，值采用逗号分隔 </samp>

  <samp> 如果 `srcset` 不满足条件，就加载 `src` 默认图像 </samp>

  ```html
  <!-- 1x表示单倍像素密度 -->
  <img srcset="foo-320w.jpg,
               foo-480w.jpg 1.5x,
               foo-640w.jpg 2x"
       src="foo-640w.jpg">
  ```

- <samp> `sizes`：像素密度的适配，只适合显示区域一样大小的图像。如果希望不同尺寸的屏幕，显示不同大小的图像 </samp>

  > <samp> `sizes` 必须和 `srcset` 搭配使用，否则无效 </samp>

  ```html
  <!-- 原始宽度分别为 160像素, 320像素, 640像素, 1280像素 -->
  <img srcset="foo-160.jpg 160w,
               foo-320.jpg 320w,
               foo-640.jpg 640w,
               foo-1280.jpg 1280w"
       src="foo-1280.jpg">
  ```

  <samp> `sizes` 可以列出不同设备的图像显示宽度；将每个部分都放在括号里面的媒体查询表达式 </samp>

  ```html
  <img srcset="foo-160.jpg 160w,
               foo-320.jpg 320w,
               foo-640.jpg 640w,
               foo-1280.jpg 1280w"
       sizes="(max-width: 440px) 100vw,
              (max-width: 900px) 33vw,
              254px"
       src="foo-1280.jpg">
  ```

  <samp> 根据设备宽度，在 `srcset` 中选出最接近的图像进行加载 </samp>

### <samp> picture </samp>

<samp> `picture`：内部使用 `source` 和 `img`。根据不同的情况加载图像 </samp>

> <samp> `srcset` 和 `sizes` 分别解决了像素密度和屏幕大小的适配 </samp>
>
> <samp> `picture` 同时适配不同像素密度和不同大小的屏幕 </samp>

```html
<picture>
  <source media="(max-width: 500px)" srcset="cat-vertical.jpg">
  <source media="(min-width: 501px)" srcset="cat-horizontal.jpg">
  <img src="cat.jpg" alt="cat">
</picture>
```

> <samp> 设置了 `media` 属性，就没有必要设置 `sizes` 属性了 </samp>

<samp> 同时考虑像素密度和屏幕尺寸的适配 </samp>

```html
<picture>
  <source srcset="homepage-person@desktop.png,
                  homepage-person@desktop-2x.png 2x"
          media="(min-width: 990px)">
  <source srcset="homepage-person@tablet.png,
                  homepage-person@tablet-2x.png 2x"
          media="(min-width: 750px)">
  <img srcset="homepage-person@mobile.png,
               homepage-person@mobile-2x.png 2x"
       alt="Shopify Merchant, Corrine Anestopoulos">
</picture>
```

### <samp> 图像格式 </samp>

<samp> `picture` 可以用于选择不同格式的图像 </samp>

```html
<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>
```

<samp> 浏览器将按照 `source` 出现的顺序，依次检查格式是否支持，按照先后顺序加载；如果支持将不再检查后续图像格式 </samp>

## <samp> a </samp>

<samp> 超链接(hyperlink)是互联网的核心，允许用户在页面从一个网址跳转到另一个，从而将所有资源联系起来 </samp>

<samp> `a` 标签内部不仅可以放文字，也可以放置其他元素，比如：图像、段落、多媒体等 </samp>

- <samp> `href`：值指向 URL 或锚点 </samp>

- <samp> `hreflang`：指向的网址所使用的语言；`x-default` 表示多个超链接中当前链接是默认语言，没有实际功能，主要提供搜索引擎使用 </samp>

- <samp> `title`：给出链接的说明信息 </samp>

- <samp> `target`：指定打开链接的方式 </samp>

  > <samp> 使用 `target` 属性的时候，最好跟 `rel="noreferrer"` 一起使用，这样可以避免安全风险 </samp>

  - <samp> `_self`：(默认值)当前窗口打开 </samp>
  - <samp> `_blank`：新窗口打开 </samp>
  - <samp> `_parent`：上层窗口打开，通常用于父窗口打开子窗口或 iframe 的链接，如果没有上层窗口，则等于 `_self` </samp>
  - <samp> `_top`：顶层窗口打开；如果当前窗口就是顶层窗口，则等于 `_self` </samp>

- <samp> `rel`：说明链接与当前页面的关系 </samp>
  - <samp> `alternate`：当前文档的另一种形式，比如翻译 </samp>
  - <samp> `author`：作者链接 </samp>
  - <samp> `bookmark`：用作书签的永久地址 </samp>
  - <samp> `external`：当前文档的外部参考文档 </samp>
  - <samp> `help`：帮助链接 </samp>
  - <samp> `license`：许可证链接 </samp>
  - <samp> `next`：系列文档的下一篇 </samp>
  - <samp> `nofollow`：告诉搜索引擎忽略该链接，主要用于用户提交的内容，防止有人企图通过添加链接，提高该链接的搜索排名 </samp>
  - <samp> `noreferrer`：告诉浏览器打开链接时，不要将当前网址作为 HTTP 头信息的 `Referer` 字段发送出去，这样可以隐藏点击的来源 </samp>
  - <samp> `noopener`：告诉浏览器打开链接时，不让链接窗口通过 JavaScript 的 `window.opener` 属性引用原始窗口，这样就提高了安全性 </samp>
  - <samp> `prev`：系列文档的上一篇 </samp>
  - <samp> `search`：文档的搜索链接 </samp>
  - <samp> `tag`：文档的标签链接 </samp>
  
- <samp> `referrerpolicy`：精确设定点击链接时，浏览器发送 HTTP 头信息的 `Referer` 字段的行为 </samp>

  > <samp> 该属性可取八个值：`no-referrer`、`no-referrer-when-downgrade`、`origin`、`origin-when-cross-origin`、`unsafe-url`、`same-origin`、`strict-origin`、`strict-origin-when-cross-origin` </samp>
  >
  > <samp> `no-referrer` 表示不发送 `Referer` 字段；`same-origin` 表示同源时发送 `Referer` 字段；`origin` 表示只发送源信息(协议+域名+端口)</samp>

- <samp> `ping`：指定一个网址，当用户点击时，向网址发送一个 POST 请求，常用于跟踪用户行为 </samp>

  ::: code-group

  ```html[index.html]
  <a href="http://localhost:3000/other" ping="http://localhost:3000/log">
  	Go to Other Page
  </a>
  ```

  ```js[log]
  headers: {
    'ping-form': 'http://localhost:3000/',
    'ping-to': 'http://localhost:3000/other',
    'content-type': 'text/ping'
  }
  ```

  :::

  <samp> 这个请求的 HTTP 标头，包含了 `ping-form`：点击行为发生的页面，`ping-to`：`href` 指向的页面 </samp>

  > <samp> `ping` 行为只对链接有效，对其他交互行为无效，如：按钮点击、表单提交 </samp>

- <samp> `type`：给出链接 URL 的 MIME 类型，比如：网页、图像或文件，表示提示性的属性，没有实际功能 </samp>

- <samp> `download`：用于下载 </samp>

  - <samp> `download` 只有链接与网址同源时生效 </samp>

  - <samp> `download` 设置了值，值就是下载的文件名 </samp>

  - <samp> 如果网址是数据网址，点击时打开虚拟网页，可以将数据内容下载到指定文件名 </samp>

    ```html
    <a
      href="data:,Hello%2C%20World!"
      download="hello.txt"
    >点击</a>
    ```

- <samp> 邮件：链接指向邮件地址时，使用 `mailto` 协议 </samp>

  <samp> 指定邮件几个要素：需要转义 </samp>

  - <samp> `subject`：主题 </samp>

  - <samp> `cc`：抄送 </samp>

  - <samp> `bcc`：密送 </samp>

  - <samp> `body`：邮件内容 </samp>

    ```html
    <a
      href="mailto:foo@bar.com?cc=test@test.com&subject=The%20subject&body=The%20body"
    >发送邮件</a>
    ```

- <samp> 电话：如果是手机浏览的页面，使用 `tel` 协议，创建电话链接，当用户点击该链接，会唤起电话进行拨号 </samp>

  ```html
  <a href="tel:13312345678">13312345678</a>
  ```

## <samp> link </samp>

<samp> `link`：主要用于将当前网页与相关的外部资源联系起来，通常放在 `head` 内；最常见的是加载 CSS 样式表 </samp>

- <samp> 加载替代样式表，即默认不生效，用户手动切换时生效 </samp>

  ```html
  <link href="default.css" rel="stylesheet" title="Default Style">
  <link href="fancy.css" rel="alternate stylesheet" title="Fancy">
  <link href="basic.css" rel="alternate stylesheet" title="Basic">
  ```

- <samp> 手机访问时，网站通常需要提供不同分辨率的图标文件 </samp>

  ```html
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
  ```

- <samp> `<link>` 也可用于提供文档的相关链接，比如：给出文档的 RSS Feed 地址 </samp>

  ```html
  <link rel="alternate" type="application/atom+xml" href="/blog/news/atom">
  ```

- <samp> `href`：外部资源的网址 </samp>

- <samp> `rel`：表示外部资源与当前文档的关系，对 `href` 属性的说明 </samp>
  - <samp> `alternate`：文档的另一种表现形式的链接，比如打印版 </samp>

    ```html
    <!-- 另一个语言的版本 -->
    <link rel="alternate" href="https://es.example.com/" hreflang="es">
    ```

  - <samp> `author`：文档作者的链接 </samp>

    ```html
    <link rel="author" href="humans.txt">
    ```

  - <samp> `dns-prefetch`：要求浏览器提前执行某个域名的 DNS 解析 </samp>

    ```html
    <link rel="dns-prefetch" href="//example.com/">
    ```

  - <samp> `help`：帮助文档的链接 </samp>

  - <samp> `icon`：加载文档的图标文件 </samp>

    ```html
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    ```

  - <samp> `license`：许可证链接 </samp>

    ```html
    <link rel="license" href="copyright.html">
    ```

  - <samp> `next`：系列文档下一篇的链接 </samp>

  - <samp> `pingback`：接收当前文档 pingback 请求的网址 </samp>

  - <samp> `preconnect`：要求浏览器提前与某个域名建立 TCP 连接 </samp>

    ```html
    <link rel="preconnect" href="https://www.example.com/">
    ```

  - <samp> `prefetch`：后续的页面需要某个资源，并且希望预加载该资源，以便加速页面渲染。它的优先级较低，浏览器可以不下载(当链接速度较慢时, 浏览器可以不下载)</samp>

    ```html
    <link rel="prefetch" href="https://www.example.com/">
    ```

  - <samp> `preload`：要求浏览器提前下载并缓存指定资源，当前页面稍后就会用到。它的优先级较高，浏览器必须 **立即下载** </samp>

  - <samp> `prerender`：要求浏览器加载某个网页，并且提前渲染它。用户点击指向该网页的链接时，就会立即呈现该页面 </samp>

    ```html
    <link rel="prerender" href="http://example.com/">
    ```

  - <samp> `prev`：表示当前文档是系列文档的一篇，这里给出上一篇文档的链接 </samp>

  - <samp> `search`：提供当前网页的搜索链接 </samp>

  - <samp> `stylesheet`：加载一张样式表 </samp>

    ```html
    <!-- 联系方式 -->
    <link rel="me" href="https://google.com/profiles/someone" type="text/html">
    <link rel="me" href="mailto:name@example.com">
    <link rel="me" href="sms:+15035550125">
    
    <!-- 历史资料 -->
    <link rel="archives" href="http://example.com/archives/">
    
    <!-- 目录 -->
    <link rel="index" href="http://example.com/article/">
    
    <!-- 导航 -->
    <link rel="first" href="http://example.com/article/">
    <link rel="last" href="http://example.com/article/?page=42">
    <link rel="prev" href="http://example.com/article/?page=1">
    <link rel="next" href="http://example.com/article/?page=3">
    ```

- <samp> `hreflang`：表示 `href` 链接资源所使用的语言；`x-default` 表示默认版本 </samp>

  ```html
  <link href="https://example.com" rel="alternate" hreflang="x-default" />
  <link href="https://example.com/de" rel="alternate" hreflang="de" /> 
  ```

- <samp> `media`：符合条件时加载 </samp>

  ```html
  <!-- 打印时加载print.css -->
  <link href="print.css" rel="stylesheet" media="print">
  <!-- 移动设备访问时(设备宽度小于600像素)加载 -->
  <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
  
  <link rel="preload" as="image" href="map.png" media="(max-width: 600px)">
  <link rel="preload" as="script" href="map.js" media="(min-width: 601px)">
  ```

- <samp> `crossorigin`：加载外部资源的跨域设置 </samp>

- <samp> `title`：加载样式表时，标识样式表的名称 </samp>

- <samp> `sizes`：声明图标文件的尺寸，如：加载苹果手机的图标文件 </samp>

- <samp> `as`：加载资源的类型，主要有 `script`、`style`、`image`、`media`、`document` 几种 </samp>

  ```html
  <link rel="preload" href="image.png" as="image">
  <link rel="preload" href="style.css" as="style">
  <link rel="preload" href="main.js" as="script">
  ```

- <samp> `type` 用于明确 MIME 类型 </samp>

  ```html
  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4">
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
  <!-- 资源预下载后立刻执行 -->
  <link rel="preload" as="style" href="async_style.css" onload="this.rel='stylesheet'">
  ```

## <samp> script </samp>

<samp> `script` 用于加载脚本代码 </samp>

- <samp> `src`：加载外部脚本地址 </samp>

- <samp> `type`：脚本类型 </samp>

  - <samp> `module`：表示 ES6 模块 </samp>

- <samp> `nomodule`：通常与 `type="module"`  一起使用；老式浏览器的回退方案 </samp>

  ```html
  <script type="module" src="main.js"></script>
  <script nomodule src="fallback.js"></script>
  ```

- <samp> `async`：异步执行 </samp>

- <samp> `defer`：指定 JavaScript 不是立即执行，而是解析完成后执行 </samp>
- <samp> `crossorigin`：采用跨域的方式加载外部脚本，在 HTTP 请求头信息中加入 `origin` 字段 </samp>
- <samp> `integrity`：给出外部脚本的哈希值，防止脚本被篡改 </samp>
- <samp> `nonce`：一个密码随机数，由服务器在 HTTP 头信息中给出，每次加载脚本都不一样；相当于给出内嵌脚本的白名单，只有在白名单内的脚本才能执行 </samp>
- <samp> `referrerpolicy`：HTTP 请求的 `Referer` 字段的处理方法 </samp>

### <samp> noscript </samp>

<samp> `noscript`：用于浏览器不支持或关闭 JavaScript 时显示的内容 </samp>

<samp> 用户关闭 JavaScript 可能是为了节省带宽，延长手机电池寿命、防止追踪、保护隐私 </samp>

## <samp> 多媒体 </samp>

### <samp> video </samp>

<samp> `video`：块级元素；用于放置视频，如果浏览器支持该视频格式，就会显示视频播放器，否则显示 `video` 内部的子元素 </samp>

> <samp> 指定 `source` 标签，放置同一视频的多种格式；如果都不支持则显示提示 </samp>
>
> ```html
> <video controls>
>   <source src="example.mp4" type="video/mp4">
>   <source src="example.webm" type="video/webm">
>   <p>你的浏览器不支持 HTML5 视频，请下载<a href="example.mp4">视频文件</a>。</p>
> </video>
> ```

- <samp> `src`：视频文件的网址 </samp>

- <samp> `controls`：布尔属性；播放器是否显示控制栏 </samp>
- <samp> `width`：播放器宽度；单位像素 </samp>
- <samp> `height`：播放器高度；单位像素 </samp>
- <samp> `autoplay`：布尔属性；视频是否自动播放 </samp>
- <samp> `loop`：布尔属性；视频是否循环播放 </samp>
- <samp> `muted`：布尔属性；是否默认静音 </samp>
- <samp> `poster`：播放器的封面图片的 URL </samp>
- <samp> `preload`：视频播放前，是否缓冲 </samp>
  - <samp> `none`：不缓冲 </samp>
  - <samp> `metadata`：仅缓冲视频文件的元数据 </samp>
  - <samp> `auto`：可以缓冲整个文件 </samp>
- <samp> `playsinline`：布尔属性；iPhone 的 Safari 播放时自动全屏 </samp>
- <samp> `crossorigin`：采用跨域方式加载视频 </samp>
  - <samp> `anonymous`：跨域请求时，不发送用户凭证，主要是 cookie </samp>
  - <samp> `use-credentials`：跨域时发送用户凭证 </samp>
- <samp> `currentTime`：指定当前播放位置(双进度浮点数，单位秒)</samp>
- <samp> `duration`：只读属性；指定时间轴上的持续播放时间，(值为双精度浮点，单位秒)；如果是流媒体，没有已知的结束时间，属性值为 `+Infinity` </samp>

### <samp> audio </samp>

<samp> `audio`：块级元素，放置音频，用法与 `video` 基本一致 </samp>

- <samp> `src`：音频文件地址 </samp>

- <samp> `autoplay`：布尔属性；自动播放 </samp>
- <samp> `controls`：布尔属性；是否显示播放工具栏 </samp>
- <samp> `crossorigin`：是否使用跨域方式请求 </samp>
- <samp> `loop`：布尔属性；是否循环播放 </samp>
- <samp> `muted`：布尔属性；是否静音 </samp>
- <samp> `preload`：音频文件的缓冲设置 </samp>

### <samp> track </samp>

<samp> `track`：指定视频的字幕，格式 WebVTT (`.vtt`)；放在 `video` 标签内部 </samp>

```html
<video controls src="sample.mp4">
   <track label="英文" kind="subtitles" src="subtitles_en.vtt" srclang="en">
   <track label="中文" kind="subtitles" src="subtitles_cn.vtt" srclang="cn" default>
</video>
```

- <samp> `label`：播放器显示的字幕名称，供用户选择 </samp>
- <samp> `kind`：字幕的类型，默认是 `subtitles`，表示将原始声音成翻译外国文字，比如英文视频提供中文字幕。另一个常见的值是 `captions`，表示原始声音的文字描述，通常是视频原始使用的语言，比如英文视频提供英文字幕 </samp>
- <samp> `src`：vtt 字幕文件的地址 </samp>
- <samp> `srclang`：字幕的语言，必须是有效的语言代码 </samp>
- <samp> `default`：布尔属性；是否默认打开 </samp>

### <samp> source </samp>

<samp> `source`：用于 `picture`、`video`、`audio` 指定外部资源 </samp>

- <samp> `type`：指定外部资源的 MIME 类型 </samp>
- <samp> `src`：指定源文件，用于 `video` 和 `audio` </samp>
- <samp> `srcset`：指定不同条件下加载的图像文件，用于 `picture` </samp>
- <samp> `media`：指定媒体查询表达式，用于 `picture` </samp>
- <samp> `sizes`：指定不同设备的显示大小，用于 `picture`，必须跟 `srcset` 搭配使用 </samp>

### <samp> embed </samp>

<samp> `embed`：用于嵌入外部内容，这个外部内容通常由浏览器插件负责控制 </samp>

```html
<embed type="video/webm"
       src="/media/examples/flower.mp4"
       width="250"
       height="200">
```

- <samp> `height`：显示高度，单位为像素，不允许百分比 </samp>

- <samp> `width`：显示宽度，单位为像素，不允许百分比 </samp>

- <samp> `src`：嵌入的资源的 URL </samp>

- <samp> `type`：嵌入资源的 MIME 类型 </samp>

  > <samp> 如果浏览器没有安装 Flash 插件，就会提示去 `pluginspage` 属性指定的网址下载 </samp>

  ```html
  <!-- QuickTime 插件播放 MOV 视频文件 -->
  <embed type="video/quicktime" src="movie.mov" width="640" height="480">
  
  <!-- 启动 Flash 插件 -->
  <embed src="whoosh.swf" quality="medium"
         bgcolor="#ffffff" width="550" height="400"
         name="whoosh" align="middle" allowScriptAccess="sameDomain"
         allowFullScreen="false" type="application/x-shockwave-flash"
         pluginspage="http://www.macromedia.com/go/getflashplayer">
  ```

### <samp> object </samp>

<samp> `object`：和 `embed` 相似，插入外部资源，由浏览器插件进行处理；只限插入少数几种通用资源，可视作 `embed` 替代品 </samp>

```html
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>
```

- <samp> `data`：嵌入的资源的 URL </samp>
- <samp> `form`：当前网页中相关联表单的 `id` 属性 </samp>
- <samp> `height`：资源的显示高度，单位为像素，不能使用百分比 </samp>
- <samp> `width`：资源的显示宽度，单位为像素，不能使用百分比 </samp>
- <samp> `type`：资源的 MIME 类型 </samp>
- <samp> `typemustmatch`：布尔属性，表示 `data` 属性与 `type` 属性是否必须匹配 </samp>

<samp> `object` 是一个容器元素，内部可使用 `param` 标签，给出插件所需的运行参数 </samp>

```html
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object>
```

## <samp> iframe </samp>

<samp> `iframe`：容器元素；生成一个指定区域，在该区域中嵌入其他网页 </samp>

- <samp> `allowfullscreen`：允许嵌入的网页全屏显示，需要全屏 API 的支持 </samp>
- <samp> `frameborder`：是否绘制边框，`0` 为不绘制，`1` 为绘制（默认值）。建议尽量少用这个属性，而是在 CSS 里面设置样式 </samp>
- <samp> `src`：嵌入的网页的 URL </samp>
- <samp> `width`：显示区域的宽度 </samp>
- <samp> `height`：显示区域的高度 </samp>
- <samp> `sandbox`：设置嵌入的网页的权限 </samp>
- <samp> `importance`：浏览器下载嵌入的网页的优先级 </samp>
  - <samp> `high`：高优先级 </samp>
  - <samp> `low`：低优先级 </samp>
  - <samp> `auto`：由浏览器自行决定 </samp>
- <samp> `name`：内嵌窗口的名称，可用于 `<a>`、`<form>`、`<base>` 的 `target` 属性 </samp>
- <samp> `referrerpolicy`：请求嵌入网页时，HTTP 请求的 `Referer` 字段的设置 </samp>

### <samp> sandbox </samp>

<samp> `sandbox`：沙箱；嵌入的网页默认具有正常权限，比如执行脚本、提交表单、弹出窗口等；为了限制 `iframe` 的风险 </samp>

- <samp> 作为布尔属性时，表示打开所有属性 </samp>

- <samp> `allow-forms`：允许提交表单 </samp>

- <samp> `allow-modals`：允许提示框，即允许执行 `window.alert()` 等会产生弹出提示框的 JavaScript 方法 </samp>

- <samp> `allow-popups`：允许嵌入的网页使用 `window.open()` 方法弹出窗口 </samp>

- <samp> `allow-popups-to-escape-sandbox`：允许弹出窗口不受沙箱的限制 </samp>

- <samp> `allow-orientation-lock`：允许嵌入的网页用脚本锁定屏幕的方向，即横屏或竖屏 </samp>

- <samp> `allow-pointer-lock`：允许嵌入的网页使用 Pointer Lock API，锁定鼠标的移动 </samp>

- <samp> `allow-presentation`：允许嵌入的网页使用 Presentation API </samp>

- <samp> `allow-same-origin`：不打开该项限制，将使得所有加载的网页都视为跨域 </samp>

  > <samp> 不要同时设置 `allow-scripts` 和 `allow-same-origin` 属性，这将使得嵌入的网页可以改变或删除 `sandbox` 属性 </samp>

- <samp> `allow-scripts`：允许嵌入的网页运行脚本(但不创建弹出窗口)</samp>

- <samp> `allow-storage-access-by-user-activation`：`sandbox` 属性同时设置了这个值和 `allow-same-origin` 的情况下，允许 `iframe` 嵌入的第三方网页通过用户发起 `document.requestStorageAccess()` 请求，经由 Storage Access API 访问父窗口的 Cookie </samp>

- <samp> `allow-top-navigation`：允许嵌入的网页对顶级窗口进行导航 </samp>

- <samp> `allow-top-navigation-by-user-activation`：允许嵌入的网页对顶级窗口进行导航，但必须由用户激活 </samp>

- <samp> `allow-downloads-without-user-activation`：允许在没有用户激活的情况下，嵌入的网页启动下载 </samp> <samp> loading </samp>

### <samp> loading </samp>

<samp> `iframe` 指定网页立即加载，这不是预期行为；希望滚动进入视口后再加载，以节省带宽 </samp>

<samp> `loading`：触发 `iframe` 懒加载 </samp>

- <samp> `auto`：浏览器默认行为 </samp>
- <samp> `lazy`：懒加载；即进入视口时开始加载 </samp>
- <samp> `eager`：立即加载资源 </samp>

<samp> 如果 `iframe` 隐藏，则 `loading` 无效，会立即加载 </samp>

- <samp> `iframe` 的宽度和高度为 4 像素或更小 </samp>
- <samp> 样式设为 `display: none` 或 `visibility: hidden` </samp>
- <samp> 使用定位坐标为负 `X` 或负 `Y`，将 `iframe` 放置在屏幕外 </samp>

## <samp> table </samp>

<samp> 表格(table)以行(row)、列(column)的形式展示数据 </samp>

- <samp> `caption`：可选子元素；表示表格标题 </samp>
- <samp> `thead`：表头 </samp>
- <samp> `tbody`：表体 </samp>
- <samp> `tfoot`：表尾 </samp>

- <samp> `colgroup`：表示一组列 </samp>

  - <samp> `col`：表示一列；单标签，主要用于声明表格结构，以及附加样式 </samp>

    > <samp> `span`：默认为 1；大于 1 时，表示该列宽度可包含多列 </samp>

- <samp> `tr`：表格行(table row)</samp>

  - <samp> `th`：标题单元格 </samp>

    - <samp> `scope`：表示 `th` 是行标题还是列标题 </samp>

      - <samp> `row`：该行的所有单元格，都与该标题单元格相关 </samp>

      - <samp> `col`：该列的所有单元格，都与该标题单元格相关 </samp>

      - <samp> `rowgroup`：多行组成的一个行组的所有单元格，都与该标题单元格相关，可以与 `rowspan` 属性配合使用 </samp>

      - <samp> `colgroup`：多列组成的一个列组的所有单元格，都与该标题单元格相关，可以与 `colspan` 属性配合使用 </samp>

      - <samp> `auto`：默认值，表示由浏览器自行决定 </samp>

        ```html
        <table>
          <thead>
            <tr>
              <th scope="col">海报名称</th>
              <th scope="col">颜色</th>
              <th colspan="3" scope="colgroup">尺寸</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="3" scope="rowgroup">Zodiac</th>
              <th scope="row">Full color</th>
              <td>A2</td>
              <td>A3</td>
              <td>A4</td>
            </tr>
            <tr>
              <th scope="row">Black and white</th>
              <td>A1</td>
              <td>A2</td>
              <td>A3</td>
            </tr>
            <tr>
              <th scope="row">Sepia</th>
              <td>A3</td>
              <td>A4</td>
              <td>A5</td>
            </tr>
          </tbody>
        </table>
        ```

  - <samp> `td`：数据单元格 </samp>

    - <samp> `colspan`：跨多列 </samp>
    - <samp> `rowspan`：跨多行 </samp>
    - <samp> `headers`：单元格对应表头，通常是 `th` 的 `id` 属性 </samp>

## <samp> 表单 </samp>

<samp> `form`：将所有表单内容放置在容器元素中 </samp>

- <samp> `accept-charset`：服务器接受的字符编码列表，使用空格分隔，默认与网页编码相同 </samp>
- <samp> `action`：服务器接收数据的 URL </samp>
- <samp> `autocomplete`：如果用户没有填写某个控件，浏览器是否可以自动填写该值。它的可能取值分别为 `off`(不自动填写)和 `on`(自动填写)</samp>
- <samp> `method`：提交数据的 HTTP 方法，可能的值有 `post` (表单数据作为 HTTP 数据体发送)，`get` (表单数据作为 URL 的查询字符串发送)，`dialog` (表单位于 `dialog` 内部使用)</samp>
- <samp> `enctype`：当 `method` 属性等于 `post` 时，该属性指定提交给服务器的 MIME 类型。可能的值为 `application/x-www-form-urlencoded` (默认值)，`multipart/form-data` (文件上传的情况)，`text/plain` </samp>
- <samp> `name`：表单的名称，应该在网页中是唯一的。注意，如果一个控件没有设置 `name` 属性，那么这个控件的值就不会作为键值对，向服务器发送 </samp>
- <samp> `novalidate`：布尔属性，表单提交时是否取消验证 </samp>
- <samp> `target`：在哪个窗口展示服务器返回的数据，可能的值有 `_self` (当前窗口)，`_blank` (新建窗口)，`_parent` (父窗口)，`_top` (顶层窗口)，`<iframe>` 标签的 `name` 属性(即表单返回结果展示在 `<iframe>` 窗口)</samp>

## <samp> 其他标签 </samp>

### <samp> dialog </samp>

<samp> `dialog`：表示一个可以关闭的对话框 </samp>

<samp> `open`：对话框默认隐藏，开启对话框 </samp>

```html
<dialog open>
  <form method="dialog">
    <input type="text">
    <button type="submit" value="foo">提交</button>
  </form>
</dialog>
```

#### <samp> dialog API </samp>

- <samp> `Dialog.showModal()`：打开对话框 </samp>

  ```js
  const modal = document.querySelector('dialog');
  
  // 对话框显示, 相当于增加 open 属性
  modal.showModal();
  ```

  > <samp> CSS 提供一个 `::backdrop` 伪类；当 `showModal()` 唤起时，会产生一个透明层 </samp>
  >
  > ```css
  > dialog {
  >   padding: 0;
  >   border: 0;
  >   border-radius: 0.6rem;
  >   box-shadow: 0 0 1em black;
  > }
  > 
  > dialog::backdrop {
  >   /* make the backdrop a semi-transparent black */
  >   background-color: rgba(0, 0, 0, 0.4);
  > }
  > ```

- <samp> `Dialog.close()`：关闭对话框；接受一个字符串作为参数，用于传递信息；`returnValue` 属性可以读取这个字符串 </samp>

  ```js
  modal.close('Accepted');
  modal.returnValue // "Accepted"
  ```

#### <samp> 事件 </samp>

- <samp> `close`：对话框关闭时触发 </samp>

- <samp> `cancel`：用户按下 `esc` 键关闭对话框时触发 </samp>

  ```js
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close('cancelled');
    }
  });
  ```

### <samp> details </samp>

<samp> `details`：折叠内容 </samp>

- <samp> `open`：默认打开 </samp>

<samp> `summary`：定制折叠内容的标题 </samp>

<samp> 通过 CSS 设置 `summary::-webkit-details-marker` 改变三角形内容 </samp>

```css
summary::-webkit-details-marker {
  background: url(https://example.com/foo.svg);
  color: transparent;
}

/* 另一种替换箭头的方式 */
summary::-webkit-details-marker {
  display: none;
}
summary:before {
  content: "\2714";
  color: #696f7c;
  margin-right: 5px;
```

#### <samp> details API </samp>

- <samp> `open`：`details` 当前是打开还是关闭 </samp>

  ```js
  const details = document.querySelector('details');
  
  if (detail.open === true) {
    // 展开状态
  } else {
    // 折叠状态
  }
  ```

- <samp> `toggle`：打开或关闭折叠时，都会触发这个事件 </samp>

  ```js
  details.addEventListener('toggle', event => {
    if (details.open) {
      /* 展开状况 */
    } else {
      /* 折叠状态 */
    }
  });
  ```

## <samp> CSS Reset </samp>

- <samp> 方案一：[CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/) </samp>

- <samp> 方案二：[雅虎的 CSS Reset](https://yuilibrary.com/yui/docs/cssreset/) </samp>
