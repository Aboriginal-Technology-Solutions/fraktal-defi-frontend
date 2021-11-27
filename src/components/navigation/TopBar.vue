<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        @click.prevent="toggleDrawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="350"
        />
      </div>

      <v-spacer></v-spacer>

    <v-menu 
      v-model="menuItemNetwork" 
      offset-x
      v-if="address"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{`NETWORK: ${network}`}} 
          <v-icon v-if="menuItemNetwork">mdi-arrow-down-thin-circle-outline</v-icon> 
          <v-icon v-else>mdi-arrow-up-thin-circle-outline</v-icon>
          <span v-if="!isSupported(chainId)">(UNSUPPORTED)</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in supportedNetworks"
          :key="index"
          @click="switchNetwork(item.chainId)"
        >
          <v-list-item-title>{{ item.chainName || item.chainId }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  
    <v-menu
      v-model="menuItemAddress"
      :close-on-content-click="false"
      offset-y
      v-if="address"
    >
      <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="white"
          dark
          v-bind="attrs"
          v-on="on"
        text
         v-if="address"
      >
        <span class="mr-2">{{address}}</span>

        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      </template>

      <v-card>

        <!-- <v-divider></v-divider> -->
        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->

          <v-btn
            color="primary"
            text
            @click="disconnect"
          >
            DISCONNECT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

    
      <v-btn
        text
        v-else
        @click.prevent="connect"
      >
        <span class="mr-2">CONNECT</span>

        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

    </v-app-bar>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data: () => ({
    fav: true,
    menuItemAddress: false,
    menuItemNetwork: false,
    message: false,
    hints: true,
  }),
  computed: {
    ...mapGetters('navigation', [
      'drawer'
    ]),
    ...mapGetters('ethers', [
      'address',
      'network',
      'supportedNetworks',
      'chainId'
    ])
  },
  methods: {
    ...mapActions('navigation', [
      'toggleDrawer'
    ]),
    ...mapActions('ethers', [
      'disconnect',
      'connect',
      'switchNetwork',
    ]),
    isSupported (chainId) {
      return this.supportedNetworks.filter(x => x.chainId === chainId).length
    }
  },
  mounted () {
    console.log({net: this.supportedNetworks})
  }

}
</script>

function ipfs_publisher () { 
  FOLDER=$1
  ipfs add -r $FOLDER | tee /tmp/ipfs_publisher_${FOLDER}.txt | tail -f - | awk '{printf("%s ",$1); system("docker exec ipfs_host ipfs name publish --key=${FOLDER} " $2)}' ||
  ipfs key gen "${FOLDER}" && ipfs add -r $FOLDER | tee /tmp/ipfs_publisher_${FOLDER}.txt | tail -f - | awk '{printf("%s ",$1); system("docker exec ipfs_host ipfs name publish --key=${FOLDER} " $2)}'
  
}
