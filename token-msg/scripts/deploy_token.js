//import {ethers} from "hardhat";
const hre = require("hardhat");

async function main() {
  try{
    const tokenContract = await hre.ethers.getContractFactory("MyToken");
    const token = await tokenContract.deploy();
    console.log("MyToken contract deployed at: ", token.address);
  } catch(err){
    console.error(err);
    process.exit(1);
  };
}

main();