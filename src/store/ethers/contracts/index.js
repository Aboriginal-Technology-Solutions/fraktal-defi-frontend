// import {} from '../ethersContracts'

import uniHelper from './uniHelper'
import getters from './getters'
// import contracts from '@/config/contracts'

class Contract {
  constructor(name, address, chainId) {
    this.name = name
    this.address = address
    this.chainId = chainId
  }
}

const contracts = [
  new Contract('Quickswap Router02', `0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff`, 137),
  new Contract('Quickswap Factory', `0x5757371414417b8c6caad45baef941abc7d3ab32`, 137),
  new Contract('Apeswap Router02', '', 137),
  new Contract('Apeswap Factory', '', 137),
  new Contract('ELK Router02', '', 137),
  new Contract('ELK Factory', '', 137),
]

const state = {
  contracts,
  categories: [
    'uniswapV2Router02',
    'uniswapV2Factory',
    'masterChef',
    'miniChefV2',
    'aaveLendingPool'
  ]
}


// const actions = {}
// const mutations = {}
const modules = {
  uniHelper
}

export default {
  namespaced: true,
  state,
  getters,
  // mutations,
  // actions,
  modules
}