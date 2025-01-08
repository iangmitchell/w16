//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract MyToken is ERC20, Ownable {
  uint public counter;
  uint constant public _tS = 100;
  uint constant public incrementCost = 5;
  uint constant public decrementCost = 7;

  constructor() 
  ERC20("Counter", "CTR")
  Ownable(msg.sender) 
  {
    _mint(owner(), _tS * 10 ** decimals());
  }

  function increment() public {
    //check
    require(balanceOf(msg.sender)>=incrementCost, "insufficient funds");   
    //effects
    transfer(owner(), incrementCost);    
    //interactions
    counter++;
  }

  function decrement() public {
    //check
    require(balanceOf(msg.sender)>=decrementCost, "insufficient funds");   
    require(counter>0, "counter can not be negative");
    //effects
    transfer(owner(), decrementCost);    
    //interactions
    counter--;
  }

}