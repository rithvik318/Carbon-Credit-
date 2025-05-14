// truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Default Ganache port
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.5.16", // Explicitly set to 0.5.16
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}