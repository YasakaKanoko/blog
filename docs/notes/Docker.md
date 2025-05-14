# <samp>Docker</samp>

<samp>参考</samp>

- <samp>[Docker-Tutorial](https://dunwu.github.io/linux-tutorial/docker/docker-quickstart.html#docker-%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5)</samp>
- <samp>[Docker 从入门到实践](https://yeasy.gitbook.io/docker_practice)</samp>

<samp>验证 Docker 是否安装成功</samp>

```sh
docker version

docker info

docker --version
```

## <samp>Hello World</samp>

1. <samp>将 image 文件从仓库抓取到本地</samp>

   ```sh
   docker image pull library/hello-world
   ```

   > <samp>由于 Docker 官方提供的 image 都存放在 library 组中，是默认组，可以省略</samp>
   >
   > ```sh
   > docker image pull hello-world
   > ```

2. <samp>检查现有 image</samp>

   ```sh
   docker image ls 
   ```

3. <samp>运行 image 文件</samp>

   ```sh
   docker container run hello-world
   ```

   > <samp>有些容器不会自动终止，因为提供的是服务，使用 `docker container kill [containID]` 结束</samp>

   <samp>例如：安装运行 Ubuntu 的 image，就可以在命令行体验 Ubuntu 系统</samp>

   ```sh
   docker container run -it ubuntu bash
   ```

   <samp>首先，需要在另一个终端窗口中获取 containID</samp>

   ```sh
   # 获取当前containID
   docker ps
   
   docker container ls
   
   # 获取所有containID
   docker ps -a
   
   docker container ls -a
   ```

   <samp>终止容器</samp>

   ```sh
   # ca2b75b21300为获取到的容器containID
   docker container kill ca2b75b21300
   ```



## <samp>Docker for Windows</samp>

<samp>参考：[微软: WSL 2 上的 Docker 容器入门](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers#install-docker-desktop)</samp>

<samp>Docker 安装教程访问[微软官网](http://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers#overview-of-docker-containers)</samp>

1. <samp>安装前需要先验证 Windows 版本是否在 19045 以上</samp>

   ```sh
   winver
   ```

2. <samp>验证当前 Windows 是否安装了 WSL</samp>

   ```sh
   wsl
   ```

   > <samp>未安装适用于 Linux 的 Windows 子系统。可通过运行 "`wsl.exe --install`" 进行安装</samp>
   >
   > <samp>如果不支持虚拟化，可以在 BIOS 打开虚拟化</samp>

3. <samp>安装 WSL</samp>

   ```sh
   wsl --install
   ```

4. <samp>查看 wsl 版本 ，确认在 wsl 2.x </samp>

   ```sh
   wsl -v
   ```

   > <samp>注意：Ubuntu 默认是不开启管理员账户，但我们可以使用 `sudo -i` 强制进入</samp>

5. <samp>[安装 Docker Desktop](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers#install-docker-desktop) </samp>

6. <samp>配置 Docker</samp>

   <samp>Continue without signing in -> Skip</samp>

   <samp>当显示 Engine running，表示在 Windows 系统上成功运行 Docker 的 GUI</samp>

<samp>基本使用</samp>

- <samp>Containers - 容器</samp>
- <samp>Images - 镜像</samp>
  - <samp>Name - 名称</samp>
  - <samp>Tag - 版本</samp>
  - <samp>Size - 大小</samp>
  - <samp>Actions - 启动</samp>

### <samp>Nginx</samp>

1. <samp>使用代理</samp>

2. <samp>在顶部 Search 中搜索 nginx (下载官方开源的 Image，右侧会显示 Docker Official Image 图标)，点击 Run 或 Pull 下载</samp>

3. <samp>在 Images 点击 Actions - Run</samp>

   - <samp>点击 Options settings</samp>

   - <samp>配置容器名称 Container name：Nginx-demo</samp>

   - <samp>配置物理机端口 Host port: 80 (:80/tcp 是它本身虚拟机自带端口，需要配置本机的是端口，这里让两个端口保持一致)</samp>

   - <samp>点击 Run</samp>

4. <samp>点击 Ports - <a href="http://localhost:80/">80:80</a> 跳转至 nginx 欢迎界面</samp>

5. <samp>打开 VSCode - Extensions - Docker 下载 Docker 插件</samp>

   <samp>对应文件路径在 Containers 中 `Files/usr/share/nginx/html` 目录</samp>

### <samp>MySQL</samp>

1. <samp>根据 GPT-4o描述，截至 2025年最稳定的版本是 8.4.5，在 Search 中搜索 MySQL，点击 Run 或 Pull 下载</samp>

2. <samp>在 Images 点击 Actions - Run</samp>

   - <samp>点击 Options settings</samp>

   - <samp>配置容器名称 Container name：MySQL-demo</samp>

   - <samp>配置物理机端口 Host port: 3306</samp>
   - <samp>配置环境变量名 Environment variables: MYSQL_ROOT_PASSWORD</samp>
   - <samp>配置环境变量值 Value: 123456</samp>

   - <samp>点击 Run</samp>

3. <samp>打开 VSCode - Extensions - MySQL 下载 MySQL 插件</samp>

4. <samp>点击 Create Connection</samp>

   - <samp>名称：docker-mysql</samp>

   - <samp>Password: 123456</samp>

   - <samp>点击 "连接"</samp>

   - <samp>创建数据库：点击右侧 "+" </samp>

     ```sql
     CREATE DATABASE school DEFAULT CHARACTER SET = 'utf8mb4';
     ```

     <samp>点击 Run 运行</samp>

   - <samp>创建数据表：点击 Tables 右侧 "+"</samp>

     ```sql
     CREATE TABLE students (
         id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
         create_time DATETIME COMMENT 'Create Time',
         name VARCHAR(255)
     ) COMMENT '';
     ```

   - <samp>点击 Insert New Row 添加数据</samp>
