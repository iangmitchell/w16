const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("TokenModule", (m) => {

  const lock = m.contract("MyToken" );

  return { lock };
});
