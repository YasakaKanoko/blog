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
     // 3. 当然你也可以忽略成功的情况，用 if let Err(e) = fields[1].parse::<f32>() {...}匹配出错误，然后打印出来，但是没啥卵用
     if let Ok(length) = fields[1].parse::<f32>() {
         // 输出到标准输出
         println!("{}, {}cm", name, length);
     }
   }
 }
```

## <samp>参考</samp>

- <samp>[Rust Course](https://course.rs/about-book.html)</samp>

- <samp>[Rust By Practice](https://practice.course.rs/why-exercise.html)</samp>
