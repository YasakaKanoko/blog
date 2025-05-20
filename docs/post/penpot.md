# <samp>penpot</samp>

<samp>Docker 托管 penpot 实例</samp>

1. <samp>获取 `docker-compose.yaml`</samp>

   ```sh
   wget https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml
   ```

2. <samp>启动 Composer</samp>

   ```sh
   docker compose -p penpot -f docker-compose.yaml up -d
   ```

3. <samp>在浏览器中监听 http://localhost:9001/</samp>

4. <samp>停止 penpot</samp>

   ```sh
   docker compose -p penpot -f docker-compose.yaml down
   ```

