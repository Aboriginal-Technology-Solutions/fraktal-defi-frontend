

class Network {
  constructor () {
    this.methods = [
      'wallet_addEthereumChain'
    ]
    this.params = [{chainId: '0xa869',
      chainName: "Fuji Testnet",
      nativeCurrency: {
        name: "AVAX",
        symbol: "AVAX",
        decimals: 18
      },
      rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],     blockExplorerUrls: ['https://cchain.explorer.avax-test.network/']
    }]
  }
}