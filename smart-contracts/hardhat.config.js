require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    blockdag: {
      url: "https://test-rpc.primordial.bdagscan.com/",
      accounts: ["78ea4bd08fb72d21a22ca23aeb3a96f711228fa41071ae87e4f4f61d34ba884b"]
    }
  }
};
