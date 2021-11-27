export default {
  setTokens (state, tokens) {
    // state.tokens = tokens
    let _tmp = state.tokens

    tokens.map(token => {
      // console.log(token)
      let hasToken = _tmp.filter(x => x.address === token.address && x.chainId === token.chainId).length
      if (!hasToken) state.tokens.push(token)   
    })
  }
}