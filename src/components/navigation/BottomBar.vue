<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    horizontal
  >
    <!-- <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn> -->
     <!-- <v-btn>
      <span>Donate</span>

      <v-icon>mdi-developer-board</v-icon>
    </v-btn> -->
   
    <v-btn to="/donate">
      <span>Donate</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <!-- <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn> -->
  </v-bottom-navigation>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({ value: 1 }),
    computed: {
      ...mapGetters('ethers', [
        'developerAddress',
      ])
    }
  }
</script>