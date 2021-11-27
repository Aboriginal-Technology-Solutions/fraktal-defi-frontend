const IMiniApeV2 = require('../artifacts/contracts/interfaces/IMiniApeV2.sol/IMiniApeV2.json')
const IUniswapV2Router02 = require('../artifacts/contracts/interfaces/IUniswapV2.sol/IUniswapV2Router02.json')
const UniswapV2Factory = require('../artifacts/contracts/interfaces/IUniswapV2.sol/UniswapV2Factory.json')
const UniHelper = require(`../artifacts/contracts/UniHelper.sol/UniHelper.json`)
const FarmHelper = require(`../artifacts/contracts/FarmHelper.sol/FarmHelper.json`)
const IERC20 = require('../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json')


const config = {
  contracts: [{
    name: 'honeyswapV2Router',
    address: `0x6093AeBAC87d62b1A5a4cEec91204e35020E38bE`,
    abi: IUniswapV2Router02.abi
  }, {
    name: 'honeyswapV2Factory',
    address: ``,
    abi: UniswapV2Router02.abi

  }]
}