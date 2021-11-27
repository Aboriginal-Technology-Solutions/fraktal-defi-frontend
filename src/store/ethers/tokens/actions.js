import axios from 'axios'

export default {
  async getTokensFromTokenList (ctx, tokenList) {
    let _tL = await axios.get(tokenList)
    let tokens = _tL.data.tokens
    ctx.commit(`setTokens`, tokens)
  },
  async parseAllTokenLists (ctx) {
    await ctx.state.tokenLists.map(async list => {
      console.log(`Parsing: `, list)
      try {
        await ctx.dispatch('getTokensFromTokenList', list.url)
      } catch (e) {
        console.log(`Failed to fetch ${list.url}`)
      }
    })
  }
}