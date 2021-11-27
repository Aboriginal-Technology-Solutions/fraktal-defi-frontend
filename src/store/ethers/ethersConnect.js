/* eslint-disable */
import Vue from 'vue'
import {
  providers,
  Contract as ContractModule,
  utils as utilsModule
} from 'ethers'

export const PROVIDER_CHECK_MS = 500
// networks where ens exists
// Mainet, Ropsten, Ropsten
export const ENS_NETS = ['0x1', '0x3', '0x4']

// messages
export const MSGS = {
  NOT_CONNECTED: 'Not connected to Ethereum network',
  NOT_READY: 'Ethereum network not ready',
  NO_WALLET: 'No Ethereum wallet detected',
  ACCOUNT_CHANGED: 'Ethereum account changed',
  ETHERS_VUEX_INITIALIZED: 'Ethers vuex module initialized',
  ETHERS_VUEX_READY: 'Ethers vuex module ready'
}
export const EVENT_CHANNEL = 'ethers'
// use vue as a simple event channel
export const event = new Vue()
// expose ethers modules
export const utils = utilsModule
export const Contract = ContractModule

// ethereum transactions to log
// More information: https://docs.ethers.io/ethers.js/html/api-providers.html#events
export const LOG_TRANSACTIONS = [
  'block',
  // can also be an address or transaction hash
  [], // list of topics, empty for all topics
]

// for ethers
let ethereum
let provider
let chainId
let userWallet
let currentAccount
let providerInterval
let initialized
let onboardButton
function getEthereum() {
  return window.ethereum
}

function ethereumOk() {
  const em = getEthereum()
  return em && em.isConnected()
}
export const supportedNetworks = [
  // {
  //   chainName: 'Ethereum Mainnet',
  //   chainId: '0x1',
  //   isTestnet: false,
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   }
        // rpcUrls: [],
        // blockExplorerUrls: []
  // },
  // {
  //   chainName: 'Ropsten TestNet',
  //   chainId: '0x3',
  //   isTestnet: true,
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   }
        // rpcUrls: [],
        // blockExplorerUrls: []
  // },
  // {
  //   chainName: 'Rinkeby TestNet',
  //   chainId: '0x4',
  //   isTestnet: true,
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   }
        // rpcUrls: [],
        // blockExplorerUrls: []
  // },
  // {
  //   chainName: 'Goerli TestNet',
  //   chainId: '0x5',
  //   isTestnet: true,
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   }
        // rpcUrls: [],
        // blockExplorerUrls: []
  // },
  // {
  //   chainName: 'Kovan TestNet',
  //   chainId: '0x2a',
  //   isTestnet: true,
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   }
        // rpcUrls: [],
        // blockExplorerUrls: []
  // },
  {
    chainName: 'xDaichain',
    chainId: '0x64',
    isTestnet: false,
    nativeCurrency: {
      name: 'xDai',
      symbol: 'xDai',
      decimals: 18,
    },
    rpcUrls: [`https://rpc.xdaichain.com`],
    blockExplorerUrls: [`https://blockscout.com/xdai/mainnet`]
  },
  {
    chainName: 'Fantom Opera',
    chainId: '0xfa',
    isTestnet: false,
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: [`https://rpcapi.fantom.network`],
    blockExplorerUrls: [`https://ftmscan.com`]
  },
  // {
  //   chainName: 'Optimism',
  //   chainId: '0xa',
  //   isTestnet: false,
  //   nativeCurrency: {
  //     name: 'oETH',
  //     symbol: 'oETH',
  //     decimals: 18,
  //   },
        // rpcUrls: [],
        // blockExplorerUrls: []
  // },
  {
    chainName: 'Polygon (MATIC)',
    chainId: '0x89',
    isTestnet: false,
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
          rpcUrls: [`https://rpc-mainnet.maticvigil.com/v1/ef466804205600b9386c9e8d5ab802ec10f62b95`],
          blockExplorerUrls: [`https://polygonscan.com/`]
  },
  // {
  //   // method: 'wallet_addEthereumChain',
  //   chainId: '0xa869',
  //   chainName: "Fuji Testnet",
  //   nativeCurrency: {
  //     name: "AVAX",
  //     symbol: "AVAX",
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
  //   blockExplorerUrls: ['https://cchain.explorer.avax-test.network/']

  // }
]

function getNetworkByChainId (chainId) {
  return supportedNetworks.filter(x => x.chainId === chainId)[0] || {
    chainId,
    chainName: `UNSUPPORTED ( ${chainId} )`,
    nativeCurrency: `UNKNOWN`,
  }
}
// get the name of this network
export async function getNetName() {
  switch (chainId) {
    case '0x1':
      return getNetworkByChainId(chainId).chainName
    case '0x2':
      return getNetworkByChainId(chainId).chainName
    case '0x3':
      return getNetworkByChainId(chainId).chainName
    case '0x4':
      return getNetworkByChainId(chainId).chainName
    case '0x5':
      return getNetworkByChainId(chainId).chainName
    case '0x2a':
      return getNetworkByChainId(chainId).chainName
    case '0x64':
      return getNetworkByChainId(chainId).chainName
      case '0xfa':
        return getNetworkByChainId(chainId).chainName
        
    case '0xa':
      return getNetworkByChainId(chainId).chainName
    case '0x89':
      return getNetworkByChainId(chainId).chainName

      

    case '0x539':
      return getNetworkByChainId(chainId).chainName

    case undefined:
    case null:
      return 'No Chain!'
    // if you give your ganache an id your can detect it here if you want
    default:
      return 'Network Unknown'
  }
}

// get the name of this network
export async function getGasToken() {
  console.log({
    chainId
  })
  switch (chainId) {
    case '0x1':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x2':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x3':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x4':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x5':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x2a':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x64':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0xfa':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0xa':
      return getNetworkByChainId(chainId).nativeCurrency.symbol
    case '0x89':
      return getNetworkByChainId(chainId).nativeCurrency.symbol

    case '0x539':
      return 'MATIC'

    case undefined:
    case null:
      return 'No Chain!'
    // if you give your ganache an id your can detect it here if you want
    default:
      return 'Unknown'
  }
}

// if this net has ens
export async function hasEns() {
  return ENS_NETS.includes(chainId)
}

// get deployed address for a contract from its networks object and current network id or null
export async function getNetworkAddress(networks) {
  if (!networks[chainId] || !networks[chainId].address) return null
  return networks[chainId].address
}

export function getProvider() {
  return provider
}

export function getWallet() {
  return userWallet
}

export async function getWalletAddress() {
  const addr = userWallet && await userWallet.getAddress()
  return addr
}

export function ready() {
  return !!provider && !!userWallet
}

export async function startProviderWatcher() {
  // this should only be run when a ethereum provider is detected and set at the ethereum value above
  async function updateProvider() {
    try {
      ethereum = getEthereum()
      if (!ethereum) return
      // set ethers provider
      provider = new providers.Web3Provider(ethereum)
      initialized = true

      // this is modeled after EIP-1193 example provided by MetaMask for clarity and consistency
      // but works for all EIP-1193 compatible ethereum providers
      // https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

      /**********************************************************/
      /* Handle chain (network) and chainChanged (per EIP-1193) */
      /**********************************************************/

      // Normally, we would recommend the 'eth_chainId' RPC method, but it currently
      // returns incorrectly formatted chain ID values.
      chainId = ethereum.chainId

      ethereum.on('chainChanged', handleChainChanged)

      /***********************************************************/
      /* Handle user accounts and accountsChanged (per EIP-1193) */
      /***********************************************************/

      const accounts = await ethereum.request({ method: 'eth_accounts' })
      await handleAccountsChanged(accounts)
      // Note that this event is emitted on page load.
      // If the array of accounts is non-empty, you're already
      // connected.
      ethereum.on('accountsChanged', handleAccountsChanged)
    } catch (err) {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error('Error requesting ethereum accounts', err)
      event.$emit(EVENT_CHANNEL, MSGS.NO_WALLET)
    }
  }

  function checkProvider() {
    // handle changes of availability of ethereum provider
    if (ethereum && !ethereumOk()) {
      ethereum = null
      provider = null
      chainId = null
      currentAccount = null
      userWallet = null
      event.$emit(EVENT_CHANNEL, MSGS.NOT_READY)
    } else if (!ethereum && ethereumOk()) {
      updateProvider()
    }
  }

  // kick it off now
  checkProvider()
  // and set interval
  providerInterval = setInterval(checkProvider, PROVIDER_CHECK_MS)
}

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  console.log('Ethereum chain changed. Reloading as recommended.')
  chainId = _chainId
  console.log('Ethereum chain has changed. We will reload the page as recommended.')
  window.location.reload()
}

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('No ethereum accounts available')
    event.$emit(EVENT_CHANNEL, MSGS.NO_WALLET)
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0]
    userWallet = provider && provider.getSigner(currentAccount)
    event.$emit(EVENT_CHANNEL, MSGS.ACCOUNT_CHANGED)
  }
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.
// document.getElementById('connectButton', connect)

export async function connect() {
  try {
    if (!ethereum) return event.$emit(EVENT_CHANNEL, MSGS.NOT_CONNECTED)
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    await handleAccountsChanged(accounts)
    await event.$emit(EVENT_CHANNEL, MSGS.ACCOUNT_CHANGED)
  } catch (err) {
    if (err.code === 4001) {
      // EIP-1193 userRejectedRequest error
      // If this happens, the user rejected the connection request.
      console.log('Please connect to Ethereum wallet')
      event.$emit(EVENT_CHANNEL, MSGS.NOT_READY, err)
    } else {
      console.error('Error requesting Ethereum connection/accounts', err)
      event.$emit(EVENT_CHANNEL, MSGS.NOT_READY, err)
    }
  }
}

const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
}

const MetaMaskClientCheck = () => {
  //Now we check to see if MetaMask is installed
  if (!isMetaMaskInstalled()) {
    //If it isn't installed we ask the user to click to install it
    onboardButton.innerText = 'Click here to install MetaMask!';
  } else {
    //If it is installed we change our button text
    onboardButton.innerText = 'Connect';
  }
  return onboardButton
};

// stop interval looking for ethereum provider changes
export async function stopWatchProvider() {
  if (providerInterval) clearInterval(providerInterval)
  providerInterval = null
}

export function getChainId () {
  return chainId
}

export function changeNetwork (chainId) {
  if(ethereum) {
    let _net = getNetworkByChainId(chainId)
    ethereum.request({method: 'eth_requestAccounts'})
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{chainId: _net.chainId,
        chainName: _net.chainName,
        nativeCurrency: {
          name: _net.nativeCurrency.name,
          symbol: _net.nativeCurrency.symbol,
          decimals: _net.nativeCurrency.decimals
        },
        rpcUrls: _net.rpcUrls,
        blockExplorerUrls: _net.blockExplorerUrls
      }]
    })
  }
  
}

export const developerAddress = `0x478DD37a7b1757976b4788F4DB72056b2C321ca1`
// start ethereum provider checker
startProviderWatcher()

export default {
  connect,
  ethereumOk,
  getNetName,
  hasEns,
  getProvider,
  getWallet,
  getWalletAddress,
  getNetworkAddress,
  ready,
  chainId,
  getChainId,
  getGasToken,
  isMetaMaskInstalled,
  onboardButton,
  supportedNetworks,
  developerAddress
}
