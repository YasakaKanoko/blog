# <samp>Rust</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>开始</samp>

- <samp>[安装](https://course.rs/first-try/installation.html)</samp>

- <samp>更新</samp>

  ```sh
  rustup update
  ```

- <samp>卸载</samp>

  ```sh
  rustup self uninstall
  ```

- <samp>检查</samp>

  ```sh
  rustc -V
  
  cargo -V
  ```

### <samp>vscode 插件</samp>

- <samp>`rust-analyzer`</samp>

- <samp>`Even Better TOML`：支持 `.toml` 文件完整特性</samp>

- <samp>`Error Lens`：更好的获得错误展示</samp>

- <samp>`CodeLLDB`：Debugger 程序</samp>

## <samp>cargo</samp>

<samp>`cargo` 提供了一系列的工具，从项目的建立、构建到测试、运行直至部署</samp>

- <samp>创建项目</samp>

  ::: code-group

  ```sh
  cargo new my-app
  cd my-app
  cargo run
  ```

  ```sh
  mkdir my-app
  cargo init
  cargo run
  ```

  :::

- <samp>编译</samp>

  ```sh
  cargo build
  ```

- <samp>运行</samp>

  ```sh
  ./target/debug/my-app
  ```

- <samp>默认情况下，运行的是 `debug` 模式，`debug` 模式下，Rust 编译器不会做任何优化，目标是尽快完成编译</samp>

  <samp>如果想要更高的性能，使用 `--release` 进行编译</samp>

  ```sh
  cargo run --release
  cargo build --release
  ```

- <samp>项目结构</samp>

  ```
  my-app
  ├─ Cargo.lock
  ├─ Cargo.toml
  └─ src
     └─ main.rs
  ```

### <samp>cargo check</samp>

<samp>`cargo check`：快速检查代码能否编译通过</samp>

```sh
cargo check
```

### <samp>Cargo.toml/Cargo.lock</samp>

<samp>`Cargo.toml` 和 `Cargo.lock` 是 `cargo` 的核心文件</samp>

- <samp>`Cargo.toml` 是 `cargo` 的项目数据描述文件，存储了项目所有元配置信息</samp>
- <samp>`Cargo.lock` 是 `cargo` 工具根据项目的 `.toml` 文件生成的项目依赖详细清单</samp>

> <samp>**什么情况下需要将 `Cargo.lock` 上传至 git?**</samp>
>
> <samp>当项目是一个可运行的程序时，就上传 `Cargo.lock`；如果是一个依赖库项目，那么把它添加到 `.gitignore` 中</samp>

<samp>**配置**</samp>

- <samp>`package`：记录了项目的描述信息</samp>

  - <samp>`name`：定义项目的名称</samp>
  - <samp>`version`：定义当前的版本</samp>
  - <samp>`edition`：Rust 的版本</samp>

  ::: code-group

  ```toml[Cargo.toml]
  [package]
  name = "my-app"
  version = "0.1.0"
  edition = "2024"
  ```

  :::

- <samp>`[dependencies]`：定义项目依赖</samp>

  ::: code-group

  ```toml[Cargo.toml]
  [dependencies]
  # 基于 Rust 官方仓库 crates.io，通过版本说明来描述
  rand = "0.3" 
  hammer = { version = "0.5.0"}
  # 基于项目源代码的 git 仓库地址，通过 URL 来描述
  color = { git = "https://github.com/bjz/color-rs" }
  # 基于本地项目的绝对路径或者相对路径，通过类 Unix 模式的路径来描述
  geometry = { path = "crates/geometry" }
  ```

  :::

## <samp>Hello World</samp>

- <samp>Rust 原生支持 UTF-8 编码</samp>

- <samp>`println!` 中的 `!` 表示宏操作符，可以理解为一种特殊类型的函数</samp>

- <samp>Rust 进行迭代循环时，需要在显式地迭代器 `.iter()` 方法</samp>

  > <samp>在 2021 edition 之后的迭代器，可以不需要添加该方法，`for` 可以隐式地转换迭代器</samp>

```rs
fn greet_world() {
    let southern_germany = "Grüß Gott!";
    let chinese = "世界，你好";
    let english = "World, hello";
    let regions = [southern_germany, chinese, english];
    for region in regions.iter() {
        println!("{}", &region);
    }
}

fn main() {
    greet_world();
}
```

<samp>**进阶**</samp>

```rs
fn main() {
   let penguin_data = "\
   common name,length (cm)
   Little penguin,33
   Yellow-eyed penguin,65
   Fiordland penguin,60
   Invalid,data
   ";

   let records = penguin_data.lines();

   for (i, record) in records.enumerate() {
     if i == 0 || record.trim().len() == 0 {
       continue;
     }

     // 声明一个 fields 变量，类型是 Vec
     // Vec 是 vector 的缩写，是一个可伸缩的集合类型，可以认为是一个动态数组
     // <_>表示 Vec 中的元素类型由编译器自行推断，在很多场景下，都会帮我们省却不少功夫
     let fields: Vec<_> = record
       .split(',')
       .map(|field| field.trim())
       .collect();
     if cfg!(debug_assertions) {
         // 输出到标准错误输出
       eprintln!("debug: {:?} -> {:?}",
              record, fields);
     }

     let name = fields[0];
     // 1. 尝试把 fields[1] 的值转换为 f32 类型的浮点数，如果成功，则把 f32 值赋给 length 变量
     //
     // 2. if let 是一个匹配表达式，用来从=右边的结果中，匹配出 length 的值：
     //   1）当=右边的表达式执行成功，则会返回一个 Ok(f32) 的类型，若失败，则会返回一个 Err(e) 类型，if let 的作用就是仅匹配 Ok 也就是成功的情况，如果是错误，就直接忽略
     //   2）同时 if let 还会做一次解构匹配，通过 Ok(length) 去匹配右边的 Ok(f32)，最终把相应的 f32 值赋给 length
     //
     // 3. 当然也可以忽略成功的情况，用 if let Err(e) = fields[1].parse::<f32>() {...}匹配出错误，然后打印出来，但是没啥用
     if let Ok(length) = fields[1].parse::<f32>() {
         // 输出到标准输出
         println!("{}, {}cm", name, length);
     }
   }
 }
```

### <samp>镜像</samp>

- <samp>使用全局代理</samp>

  ```sh
  export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7891
  ```

  ```sh
  $env:HTTP_PROXY="http://127.0.0.1:7890"; $env:HTTPS_PROXY="http://127.0.0.1:7890"
  ```

- <samp>在 `%homepath%/.cargo/config.toml` 添加镜像</samp>

  <samp>新增地址</samp>

  ::: code-group

  ```toml[%homepath%/.cargo/config.toml]
  [registries]
  ustc = { index = "https://mirrors.ustc.edu.cn/crates.io-index/" }
  ```

  :::

  <samp>在项目中指定该地址</samp>

  ::: code-group

  ```toml[Cargo.toml]
  [dependencies]
  time = {  registry = "ustc" }
  ```

  :::

- <samp>科大镜像</samp>

  ```toml
  [source.ustc]
  registry = "sparse+https://mirrors.ustc.edu.cn/crates.io-index/"
  ```

- <samp>字节跳动</samp>

  ```toml
  [source.crates-io]
  replace-with = 'rsproxy'
  
  [source.rsproxy]
  registry = "https://rsproxy.cn/crates.io-index"
  
  # 稀疏索引，要求 cargo >= 1.68
  [source.rsproxy-sparse]
  registry = "sparse+https://rsproxy.cn/index/"
  
  [registries.rsproxy]
  index = "https://rsproxy.cn/crates.io-index"
  
  [net]
  git-fetch-with-cli = true
  ```

- <samp>覆盖默认的镜像地址</samp>

  ::: code-group

  ```toml[%homepath%/.cargo/config.toml]
  [source.crates-io]
  replace-with = 'ustc'
  
  [source.ustc]
  registry = "git://mirrors.ustc.edu.cn/crates.io-index"
  ```

  :::

## <samp>基本语法</samp>

```rs
// Rust 程序入口函数
fn main() {
    // let 声明变量, a是不可变的
    // 类型推断: i32, 有符号32位整数
    let a = 10;
    
    // 声明b的类型为i32
    let b: i32 = 20;

    // 1. 在数值中带上类型: 30i32表示数值是30, 类型是i32
    // 2. c是可变的, mut是mutable的缩写
    let mut c = 30i32;
    
    // 在数值和类型中间添加一个下划线, 让可读性更好
    let d = 30_i32;
    
    // 可以使用一个函数的返回值来作为另一个函数的参数
    let e = add(add(a, b), add(c, d));

    // println!是宏调用，看起来像是函数但是它返回的是宏定义的代码块
    // 该函数将指定的格式化字符串输出到标准输出中(控制台)
    // {}是占位符，在具体执行过程中，会把e的值代入进来
    println!("( a + b ) + ( c + d ) = {}", e);
}

// 定义一个函数, 输入两个i32类型的32位有符号整数, 返回它们的和
fn add(i: i32, j: i32) -> i32 {
    // 返回相加值, 这里可以省略return
    i + j
}
```

> [!NOTE] <samp>注意</samp>
>
> - <samp>在上面的 `add` 函数中，不要为 `i+j` 添加 `;`，这会改变语法导致函数返回 `()` 而不是 `i32`</samp>
> - <samp>字符串应使用双引号(`""`)而非单引号(`''`)，单引号是留给单个字符类型(`char`)的</samp>
> - <samp>`{}` 作为格式化输出的占位符，`println!` 会推导出具体的类型，无需指定</samp>

### <samp>变量</samp>

### <samp>变量可变性</samp>

- <samp>声明可变变量提供灵活性</samp>
- <samp>声明不可变变量提供安全性</samp>

- <samp>在运行性能上，不可变变量在运行时，避免一些多余的 `runtime` 检查</samp>

### <samp>变量绑定</samp>

<samp>**所有权**，Rust 的核心原则，任何内存对象都是有主人的，变量绑定后，将该内存对象绑定为一个变量(之前的变量会丧失对该对象的所有权)</samp>

- <samp>**变量声明**：使用 `mut` 声明可变变量</samp>

- <samp>**未使用的变量**：如果一个变量始终未使用，会弹出警告，使用 `_` 开头的变量名忽略警告</samp>

- <samp>**变量解构**</samp>

  ```rs
  let (a, mut b): (bool,bool) = (true, false);
  ```

- <samp>**解构赋值**</samp>

  ```rs
  // .. 匹配数组中间任意数量的元素
  // _ 匹配最后一个元素, 但不绑定变量
  [c, .., d, _] = [1, 2, 3, 4, 5];
  ```

### <samp>常量</samp>

<samp>常量，使用 `const` 声明，编译时常量</samp>

let 与 const 都表示不可变变量

- 常量
  - let：运行时常量
  - const：编译时常量
- 作用域
  - let：局部作用域
  - const：全局作用域



## <samp>参考</samp>

- <samp>[Rust Course](https://course.rs/about-book.html)</samp>

- <samp>[Rust By Practice](https://practice.course.rs/why-exercise.html)</samp>
