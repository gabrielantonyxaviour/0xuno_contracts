const { ethers, network } = require("hardhat")

async function addChain() {
    if (network.config.chainId != 80001) {
        console.log("Cross chain function cannot be called on this chain")
    } else {
        const senderUNO = await ethers.getContract("OxSenderUNO")
        await senderUNO.addChain("9991", "0x1e0Db00EB08ceC7FFdA03c0Dbf224193E1563844", "")
        console.log("Entered!")
    }
}

addChain()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
