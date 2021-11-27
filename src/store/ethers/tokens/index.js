import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export const oneInch = {
  name: 'oneInch',
  url: `https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link`,
}
export const aave = {
  name: 'aave',
  url: `https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokenlist.aave.eth.link`,
}
export const honeyswap = {
  name: 'honeyswap',
  url: `https://tokens.honeyswap.org/`,
}
export const zapper = {
  name: 'zapper',
  url: `https://zapper.fi/api/token-list`,
}
export const optimism = {
  name: 'optimism',
  url: `https://static.optimism.io/optimism.tokenlist.json`,
}
export const uniswap = {
  name: 'uniswap',
  url: `https://uniswap.mycryptoapi.com/`,
}
export const cmc = {
  name: 'cmc',
  url: `http://defi.cmc.eth/`,
}


const state = {
  tokenLists: [
    oneInch,
    aave,
    honeyswap,
    zapper,
    optimism,
    uniswap,
    cmc
  ],
  tokens: [],
  chainTokens: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}