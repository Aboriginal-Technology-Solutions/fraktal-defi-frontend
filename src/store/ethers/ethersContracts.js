// import Vue from 'vue'
import { ethers } from 'ethers'
import {
  getChainId,
  getWallet
} from './ethersConnect'
import addresses from '../../../shared/artifacts/contracts/addresses.json'

import UniHelper  from '../../../shared/artifacts/contracts/UniHelper.json'
import FarmHelper  from '../../../shared/artifacts/contracts/FarmHelper.json'
import DataStore  from '../../../shared/artifacts/contracts/DataStore.json'

export const uniHelper = new ethers.Contract(
  addresses.UniHelper[getChainId()],
  UniHelper.abi,
  getWallet()
)

export const farmHelper = new ethers.Contract(
  addresses.FarmHelper[getChainId()],
  FarmHelper.abi,
  getWallet()
)

export const dataStore = new ethers.Contract(
  addresses.DataStore[getChainId()],
  DataStore.abi,
  getWallet()
)

export default {
  uniHelper,
  farmHelper,
  dataStore
}
