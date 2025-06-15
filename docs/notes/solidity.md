# <samp>Solidity</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

1. <samp>**智能合约**：**运行在链上**的程序</samp>

   - <samp>**合约开发者**：通过智能合约实现与链上资产、数据的交互</samp>
   - <samp>用户：通过链上账户调用合约、访问资产与数据</samp>

2. <samp>Solidity</samp>

   - <samp>面向合约的高级语言</samp>

   - <samp>运行在 EVM 虚拟机</samp>

   - <samp>类 JavaScript 语法</samp>

3. <samp>Solidity 编辑器</samp>

   - <samp>[Remix IDE](https://remix.ethereum.org/)</samp>
   - <samp>[JuanBlanco.solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)</samp>

4. <samp>标识符</samp>
   - <samp>合约名、函数名、变量名均限制为 ASCII 字符</samp>
   - <samp>字符串变量可以存储为 UTF-8</samp>
5. <samp>部署：.sol -> Compile -> Contract Bytecode -> Deploy -> Ethereum(Contract)</samp>

## <samp>A simple example smart contract</samp>

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
```

- <samp>`SPDX-License-Identifier: GPL-3.0`：源代码遵循 GPL 3.0 版本许可</samp>
- <samp>`pragma solidity >=0.4.16 <0.9.0;`：指定源代码是为 Solidity 版本 0.4.16，或该语言的较新版本(最高至 0.9.0 版本，但不包括 0.9.0 版本)</samp>
- <samp>`uint storedData;`：声明一个 *256 位 无符号 整数*变量</samp>
- <samp>`view`：表示该方法只读的，不会修改合约状态</samp>

<samp>在 [Remix IDE](https://remix.ethereum.org/?#language=solidity&version=0.8.30&code=Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAKcHJhZ21hIHNvbGlkaXR5ID49MC40LjE2IDwwLjkuMDsKCmNvbnRyYWN0IFNpbXBsZVN0b3JhZ2UgewogICAgdWludCBzdG9yZWREYXRhOwoKICAgIGZ1bmN0aW9uIHNldCh1aW50IHgpIHB1YmxpYyB7CiAgICAgICAgc3RvcmVkRGF0YSA9IHg7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0KCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBzdG9yZWREYXRhOwogICAgfQp9) 中运行</samp>

- <samp>选择 `Solidity compiler` -> `Auto compile`</samp>
- <samp>选择 `Deploy & run transaction` -> `Deploy`</samp>

## <samp>私有链</samp>

- <samp>[ganache](https://archive.trufflesuite.com/ganache/)：部署私有链</samp>

  - <samp>Quick Start</samp>
    - <samp>Accounts：账户信息</samp>
    - <samp>Blocks：区块信息</samp>
    - <samp>Transaction：交易信息</samp>
    - <samp>Logs：日志</samp>

  - <samp>选择 Show Keys 获取私钥</samp>


- <samp>**安装 MetaMask 钱包**</samp>

  - <samp>添加自定义网络</samp>

    - <samp>选择左上角 -> Add a custom network -> Add a URL -> Add RPC URL</samp>

      | <samp>属性名</samp>          | <samp>属性值</samp>     |
      | ---------------------------- | ----------------------- |
      | <samp>Network name</samp>    | <samp>`Ganache`</samp>  |
      | <samp>RPC URL</samp>         | `http://127.0.0.1:7545` |
      | <samp>Chain ID</samp>        | `1337`                  |
      | <samp>Currency symbol</samp> | <samp>`ETH`</samp>      |


  - <samp>选择 Account1 -> Import a wallet or account -> Private Key，粘贴私钥</samp>

- <samp>在 Remix IDE 中链接私有链</samp>
  - <samp>选择 Deploy & run transactions -> ENVIRONMENT -> Injected Provider - MetaMask</samp>
  - <samp>选择 ACCOUNT 地址</samp>
  - <samp>选择 VALUE 设置 Gas</samp>
  - <samp>点击 Deploy</samp>

## <samp>类型</samp>

- <samp>`boolean`：布尔</samp>

- <samp>**整型**</samp>

  - <samp>`uint`：无符号整型；只能表示正数</samp>

  - <samp>`int`：相当于 `number`</samp>

- <samp>`address`：地址</samp>

  > <samp>以太坊地址长度为 20 个字节，1 个字节 8 位，一共 160 位；一个十六进制占 4 个字节，整个地址长度 40</samp>
  >
  > ```js
  > console.log('0x0000000000000000000000000000000000000000'.length); // 42
  > ```

  - <samp>`msg.sender`：全局变量；部署合约的地址(合约的拥有者)</samp>
  - <samp>方法</samp>
    - <samp>`balance`：查看余额</samp>
    - <samp>`transfer`：转账</samp>

- <samp>`string`：字符串</samp>

- <samp>`bytes`</samp>

- <samp>数组</samp>

- <samp>枚举</samp>

  
