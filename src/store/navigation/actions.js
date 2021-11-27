export default {
  toggleDrawer (ctx) {
    ctx.commit('drawer', ! ctx.state.drawer)
  }
}