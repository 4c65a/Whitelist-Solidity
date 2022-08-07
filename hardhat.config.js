require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });



/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url:ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};