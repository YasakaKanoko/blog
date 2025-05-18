# <samp>nvm</samp>

<samp>nvm (Node Version Manager) Node 版本管理器</samp>

<samp>[Windows](https://github.com/coreybutler/nvm-windows)</samp>

<samp>[Linux 和 Mac](https://github.com/nvm-sh/nvm)</samp>

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

<samp>安装完成后，运行命令确认 nvm 已安装</samp>

```sh
nvm -v
```

<samp><b>常用命令</b></samp>

- <samp>`nvm arch`：显示 node 是运行在 32 位还是 64 位</samp>

- <samp>`nvm install <version> [arch]`：安装指定版本的 Node</samp>

  ```sh
  nvm install latest
  ```

- <samp>`nvm list [available]`：显示可安装的所有版本，`list` 可简化为 `ls`</samp>

  ```sh
  nvm list available
  ```

- <samp>`nvm on`：开启 Node 版本管理</samp>

- <samp>`nvm off`：关闭 Node 管理</samp>

- <samp>`nvm alias default vx.y.z`：设置默认版本</samp>

  ```sh
  nvm install 18.10.0
  
  nvm alias default 18.10.0
  
  nvm use default
  ```

- <samp>`nvm use [version] [arch]`：使用指定版本的 Node</samp>

- <samp>`nvm uninstall <version>`：写在指定版本的 Node</samp>

