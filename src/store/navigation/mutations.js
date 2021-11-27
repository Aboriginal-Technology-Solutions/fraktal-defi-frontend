export default {
  drawer (state, value) {
    state.drawer = value
    console.log('_state.drawer', state.drawer, ! state.drawer)
  }
}