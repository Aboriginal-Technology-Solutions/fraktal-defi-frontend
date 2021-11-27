/* eslint-disable */
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import contracts from './contracts'
import tokens from './tokens'
import { supportedNetworks, developerAddress} from './ethersConnect'

const state = () => ({
  initialized: false,
  connected: false,
  error: null,
  // user is ens or address
  user: '',
  address: '',
  network: '',
  chainId: '',
  ens: null,
  balance: 0,
  gasToken: ``,
  supportedNetworks,
  developerAddress
})

const modules = {
  contracts,
  tokens
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
}
