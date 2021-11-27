<template>
  <v-container>
    <h2>Contract Helper</h2>
    <!-- <Construction /> -->
    <DashboardContractsHome />
  </v-container>
</template>

<script>
// import Construction from '@/components/Construction'
import DashboardContractsHome from '@/components/dashboard/contracts/Home.vue'

export default {
  components: {
    // Construction,
    DashboardContractsHome
  }
}
</script>
