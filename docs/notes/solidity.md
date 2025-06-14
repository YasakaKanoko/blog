# <samp>Solidity</samp>

::: details <samp>目录</samp>

[[TOC]]

:::

## <samp>Hello World!</samp>

<samp>**智能合约**：智能合约是用于管理以太坊状态中账户行为的程序；是一个类 JavaScript 语法的语言，但它是一个强类型的语言</samp>

```solidity
// 版本声明
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
// contract 关键字声明合约
contract Counter {
    // 声明变量类型
    uint num;
    constructor() {
        num = 0;
    }
    // public: 声明函数的类型; 公共类型
    function increment() public {
        num += 1;
    }
    // view函数 只读取变量, 不写入
    function getNum() public view returns (uint) {
      // 声明返回值类型
      return num;
    }
}
```

<samp>在 [Remix](https://remix.ethereum.org/) 中运行</samp>

- <samp>在 Solidity compiler 中选择 Auto compile</samp>
- <samp>在 Deploy & run transaction 选择 Deploy</samp>

## <samp>私有链</samp>

<samp>[ganache](https://archive.trufflesuite.com/ganache/)：部署私有链</samp>

- <samp>Quick Start</samp>
  - <samp>Accounts：账户信息</samp>
  - <samp>Blocks：区块信息</samp>
  - <samp>Transaction：交易信息</samp>
  - <samp>Logs：日志</samp>
- <samp>选择 Show Keys 获取私钥</samp>

<samp>安装 MetaMask 钱包</samp>

- <samp>添加自定义网络</samp>

  - <samp>选择左上角 -> Add a custom network -> Add a URL -> Add RPC URL</samp>

    | <samp>属性名</samp>          | <samp>属性值</samp>     |
    | ---------------------------- | ----------------------- |
    | <samp>Network name</samp>    | <samp>Ganache</samp>    |
    | <samp>RPC URL</samp>         | `http://127.0.0.1:7545` |
    | <samp>Chain ID</samp>        | `1337`                  |
    | <samp>Currency symbol</samp> | <samp>ETH</samp>        |

- <samp>选择 Account1 -> Import a wallet or account -> Private Key，粘贴私钥</samp>
