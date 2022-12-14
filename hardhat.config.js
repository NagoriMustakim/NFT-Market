require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/YOUR_API_KEY',
      accounts: ['YOUR_PRIVATE_KEY']
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/YOUR_API_KEY',
      accounts: ['YOUR_PRIVATE_KEY']
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};