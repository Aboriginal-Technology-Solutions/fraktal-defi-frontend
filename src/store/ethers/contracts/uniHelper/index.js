const state = {
  amountsOut: [],
  amountsIn: [],
  routers: []
}

const getters = {
  amountsIn (state) {
    return state.amountsIn
  },
  amountsOut (state) {
    return state.amountsOut
  }
}

export default {
  namespaced: true,
  state,
  getters
}