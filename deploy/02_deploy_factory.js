import { ethers } from "hardhat"

const deploySimpleAccountFactory = async function (hre) {
    const provider = ethers.provider
    const from = await provider.getSigner().getAddress()

    const entrypoint = await hre.deployments.get("EntryPoint")
    const ret = await hre.deployments.deploy("0xUNOAccountFactory", {
        from,
        args: [entrypoint.address],
        gasLimit: 6e6,
        deterministicDeployment: true,
    })
    console.log("==SimpleAccountFactory addr=", ret.address)
}

export default deploySimpleAccountFactory
