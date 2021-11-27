/* eslint-disable */
export default {
  initialized: function (state, value) {
    state.initialized = value
  },
  connected: function (state, value) {
    state.connected = value
  },
  error: function (state, value) {
    state.error = value
  },
  user: function (state, value) {
    state.user = value
  },
  address: function (state, value) {
    state.address = value
  },
  network: function (state, value) {
    state.network = value
  },
  ens: function (state, value) {
    state.ens = value
  },
  chainId: (state, value) => {
    state.chainId = value
  },
  balance: (state, val) => state.balance = val,
  gasToken: (state, val) => state.gasToken = val,
  supportedNetworks: (state, val) => state.supportedNetworks = val
}
