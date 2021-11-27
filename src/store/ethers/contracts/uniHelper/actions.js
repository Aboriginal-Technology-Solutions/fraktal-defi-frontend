import {
  uniHelper,
  farmHelper
} from '../../ethersContracts'
export default {
  async getAmountsOut (ctx, router, token0, token1, amount) {
    let amounts = await uniHelper.getAmountsOut(router, amount, [token0, token1])
    ctx.commit('amountOut', amounts)
    return amounts
  }
}