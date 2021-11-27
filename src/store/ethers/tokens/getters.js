import {getChainId} from '../ethersConnect'
// import { log } from 'console'
const log = console.log


export default {
  tokens: state => state.tokens,
  tokenLists: state => state.tokenLists,
  chainTokens: state => {
    let chainId = getChainId()
    log(`GOT CHAIN ID: ${chainId}`)
    return state.tokens.filter(x => chainId === x.chainId)
  }
}