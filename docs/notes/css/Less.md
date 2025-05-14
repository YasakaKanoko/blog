# <samp>Less</samp>

<samp><b>初始化</b></samp>

```sh
npm init -y

npm i -D less

npx lessc style.less style.css
```

<samp><b>配置</b></samp>

```json
"scripts": {
  "lessc": "lessc css/style.less css/style.css"
},
```

<samp><b>watch</b></samp>

```sh
npm i -D nodemon 
```

```json
"scripts": {
  "watch-less": "nodemon --watch css --ext less --exec \"lessc css/style.less css/style.css\""
},
```

## <samp>变量</samp>

<samp>变量，用 `@` 表示，用于存储重复使用的信息；如：颜色、字体堆栈</samp>

```less
@danger: #f40;
@success: #0f0;
@warning: #ff0;
@info: #00f;

#header {
  color: @success;
}
```

<samp>编译</samp>

```css
#header {
  color: #0f0;
}
```

## <samp>运算</samp>

<samp>在变量中参与运算</samp>

```less
@width: 100px;
@height: @width * 2;
.box {
  width: @width;
  height: @height;
}
```

<samp>编译</samp>

```css
.box {
  width: 100px;
  height: 200px;
}
```

## <samp>嵌套</samp>

<samp>**子集**</samp>

```less
#header {
  color: black;
  .nav {
      font-size: 12px;
      h1 {
          font-size: 3em;
      }
  }
  .logo {
      width: 300px;
  }
}
```

<samp>编译</samp>

```css
#header {
  color: black;
}

#header .nav {
  font-size: 12px;
}

#header .nav h1 {
  font-size: 3em;
}

#header .logo {
  width: 300px;
}
```

<samp>**父级**：用 `&` 表示仍需同时满足的样式</samp>

```less
li {
    color: #008c8c;
    &.active {
        color: #f40;
    }
    &::after {
        content: '';
    }
}
```

<samp>编译</samp>

```css
li {
  color: #008c8c;
}

li.active {
  color: #f40;
}

li::after {
  content: '';
}
```

<samp>**直接子元素**：用 `>` 表示</samp>

```less
li {
  color: #008c8c;
  > a {
      text-decoration: none;
  }
}
```

<samp>编译</samp>

```css
li {
  color: #008c8c;
}
li > a {
  text-decoration: none;
}
```

## <samp>Mixins</samp>

<samp>将一组规则以函数式混入另一个规则</samp>

<samp><b>无参</b></samp>

```less
.round() {
  border-radius: 5px;
}
div {
  .round();
}
```

<samp>编译</samp>

```css
div {
  border-radius: 5px;
}
```

<samp><b>有参</b></samp>

```less
.round(@r) {
  border-radius: @r;
}
div {
  .round(5px);
}
```

<samp>编译</samp>

```css
div {
  border-radius: 5px;
}
```

<samp><b>参数默认值</b></samp>

```less
.round(@r: 5px) {
  border-radius: @r;
}
div {
  .round();
}
```

<samp>编译</samp>

```css
div {
  border-radius: 5px;
}
```

## <samp>注释</samp>

<samp>`// 单行注释`：只存在 Less 源码</samp>

<samp>`/* 多行注释 */`：会生成到编译结果中</samp>

## <samp>Maps</samp>

<samp>将混合和规则集作为值映射</samp>

```less
#colors() {
  primary: blue;
  secondary: green;
}
.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

<samp>编译</samp>

```css
.button {
  color: blue;
  border: 1px solid green;
}
```

## <samp>Scope</samp>

<samp>作用域：先从本地中查找，再从父级中查找</samp>

```less
@var: red;

#page {
  @var: white;
  #header {
      color: @var; // white
  }
}
```

<samp>作用域具有懒加载</samp>

```less
#page {
  #header {
      color: @var; // white
  }
  @var: white;
}
```

## <samp>模块</samp>

<samp>创建 `.less` 文件，通过 `@import` 导入，导入的 `.less` 文件可以直接省略扩展名</samp>

```less
@import "library"; // library.less
@import "typo.css";
```

