const { expect } = require("chai");

describe("Testing for name and symbol", function () {
  it("Should return the right name and symbol", async function () {
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();

    await myNFT.deployed();
    expect(await myNFT.name()).to.equal("MyNFT");
    expect(await myNFT.symbol()).to.equal("NFT");
  });
});
