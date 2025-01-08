
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");


describe("Token contract", ()=>{
  async function deployTokenFixture(){
    const [owner, addr1, addr2] = await ethers.getSigners();
    const hardhatToken = await ethers.deployContract("MyToken");
    return { hardhatToken, owner, addr1, addr2 };
  }

  it("transfer some tokens", async ()=>{
    const {hardhatToken, owner, addr1, addr2} = await loadFixture(deployTokenFixture);
    let amount = 250;
    await expect( hardhatToken.transfer(addr1, amount)).to.be.changeTokenBalances(hardhatToken, [owner, addr1], [-amount, amount]);
    await expect( hardhatToken.transfer(addr2, amount)).to.be.changeTokenBalances(hardhatToken, [owner, addr2], [-amount, amount]);
  })


})