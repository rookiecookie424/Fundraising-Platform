const { projectId, mnemonic } = require('./secret.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    // localhost
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    // //ropsten testnet
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectId}`),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${projectId}`),
      network_id: 11155111, // Sepolia's id
      networkCheckTimeout: 10000000,
      pollingInterval:30000,      
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true,
      from: 0x45D95DefbA8fEEC3467f01F90D23ABA7aC517461

    }
  },

  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
