const { ethers } = require("hardhat")

const deployOxUNOAccountFactory = async function (hre) {
    const provider = ethers.provider
    const from = await provider.getSigner().getAddress()

    const entrypoint = await hre.deployments.get("EntryPoint")
    const ret = await hre.deployments.deploy("OxUNOAccountFactory", {
        from,
        args: [entrypoint.address],
        gasLimit: 6e6,
        deterministicDeployment: true,
    })
    console.log("==OxUNOAccountFactory addr=", ret.address)
}

module.exports = deployOxUNOAccountFactory
