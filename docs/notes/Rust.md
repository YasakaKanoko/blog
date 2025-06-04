# <samp>Rust</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>安装</samp>

- <samp>[Visual Studio C++ Build tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)</samp>

- <samp>[Rustup](https://www.rust-lang.org/tools/install)</samp>

```sh
# 验证是否安装 Rust
rustc --version # -V

# 更新
rustup update

# 卸载
rustup self uninstall
```

## <samp>Hello World</samp>

- <samp>新建一个 demo</samp>

  ```sh
  mkdir hello_world
  cd hello_world
  ```

- <samp>创建 `main.rs`</samp>

  ::: code-group

  ```rust[main.rs]
  fn main() {
      println!("Hello, world!");
  }
  ```

  :::

- <samp>运行</samp>

  ```sh
  rustc main.exe
  ./main.exe
  # Hello, world!
  ```

> [!NOTE]
>
> - <samp>`println()`：普通函数</samp>
> - <samp>`println!()`：Rust 宏</samp>

## <samp>Cargo</samp>

<samp>`cargo` 是 Rust 的构建系统和包管理器，处理多任务，如：构建代码、下载依赖库以及编译</samp>

- <samp>`cargo --version`：检查是否安装 `cargo`</samp>

- <samp>`cargo new <project>`：创建新项目</samp>
- <samp>`cargo init`：初始化项目</samp>
- <samp>`cargo build`：构建</samp>
  - <samp>首次执行会在根目录创建一个 `cargo.lock` 文件，用于记录依赖的实际版本</samp>
  - <samp>生成的可执行文件在 `target\debug\hello_cargo.exe`</samp>

- <samp>`cargo run`：不运行二进制文件，直接使用该命令同时编译并运行</samp>
- <samp>`cargo check`：检查代码，确保代码可编译</samp>

### <samp>使用 cargo</samp>

- <samp>**初始化**</samp>

  ::: code-group

  ```sh[cargo new]
  cargo new hello_cargo
  ```

  ```sh[cargo init]
  mkdir hello_cargo
  cd hello_world
  cargo init
  ```

  :::

- <samp>**项目结构**</samp>

  ```(空)
  hello_cargo
  │  ├─ Cargo.toml
  │  └─ src
  │     └─ main.rs
  └─ readme.md
  ```

  ::: code-group

  ```toml[Cargo.toml]
  [package]
  name = "hello_cargo" # 项目名
  version = "0.1.0" # 项目版本
  edition = "2024" # 所使用的Rust版本
  
  [dependencies]
  ```

  ```rust[src/main.rs]
  fn main() {
      println!("Hello, world!");
  }
  ```

  :::

- <samp>**构建**</samp>

  ::: code-group

  ```sh[cargo build]
  # 构建项目
  cargo build
  ```

  ```sh[cargo run]
  # 一步构建并运行项目
  cargo run
  ```

  :::

- <samp>**发布 release**：最终发布的版本，文件将生成 `target/release`</samp>

  ```sh
  cargo build --release
  
  target\release\hello_cargo.exe
  ```
