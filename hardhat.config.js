require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const SCROLL_RPC_URL = process.env.SCROLL_RPC_URL
const TAIKO_RPC_URL = process.env.TAIKO_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
// optional
const MNEMONIC = process.env.MNEMONIC || "your mnemonic"

// Your API key for Etherscan, obtain one at https://etherscan.io/
const REPORT_GAS = process.env.REPORT_GAS || false

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        scroll: {
            url: SCROLL_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 534353,
        },
        taiko: {
            url: TAIKO_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 167004,
        },
    },
    gasReporter: {
        enabled: REPORT_GAS,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
            534353: 0,
            167004: 0,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.12",
            },
        ],
    },
    mocha: {
        timeout: 500000, // 500 seconds max for running tests
    },
}
