import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  drawer: false,
  drawerMenuItems: [
    { title: 'Home', icon: 'mdi-home', path: '/home' },
    { title: 'Wallet', icon: 'mdi-cash-multiple', path: '/wallet/home' },
    { title: 'Swap', icon: 'mdi-swap-horizontal', path: '/swap' },
    { title: 'Liquidity', icon: 'mdi-water', path: '/liquidity' },
    // { title: 'Farmer', icon: 'mdi-pitchfork', path: '/farmer' },
    // { title: 'DApps', icon: 'mdi-apps', path: '/daps' },
    // { title: 'Sports', icon: 'mdi-view-dashboard', 
    //   items: [
    //     {title: 'Football Squares', icon: 'mdi-football', path: '/sports/football-squares'},
    //   ]
    // },
    // { title: 'Dashboard', icon: 'mdi-view-dashboard', 
    //   items: [
    //     {title: 'Home', icon: 'mdi-home', path: '/dashboard/home'},
    //     {title: 'Contracts', icon: 'mdi-file-document-outline', path: '/dashboard/contracts/home'},
    //     {title: 'DApps', icon: 'mdi-apps', path: '/dashboard/dapps/home'},
    //   ]
    // },
    // { title: 'About', icon: 'mdi-information', path: '/about' },

  ]
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}