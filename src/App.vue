<template>
  <v-app>
    <TopBar />
    <v-main>
      <router-view/>
    </v-main>
    <DrawerLeft />
    <BottomBar />
  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'
import TopBar from '@/components/navigation/TopBar'
import BottomBar from '@/components/navigation/BottomBar'
import DrawerLeft from '@/components/navigation/DrawerLeft'

export default {
  name: 'App',
  components: {
    TopBar,
    BottomBar,
    DrawerLeft
  },
  data: () => ({
    //
  }),
  computed: {
  }
};
</script>
