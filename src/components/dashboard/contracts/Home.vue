<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          class="primary"
          v-model="addContractDialog"
          @click="toggleContractsCreateDialog"
        >
          Add Contract
        </v-btn>
      </v-col>
    </v-row>
    <ContractsCreateDialog :dialog="addContractDialog" @setDialog="addContractDialog = $event"  />
  </v-container>
</template>

<script>
import ContractsCreateDialog from "./Create.vue"
export default {
  components: {
    ContractsCreateDialog
  },
  data: () => ({
    addContractDialog: false
  }),
  methods: {
    toggleContractsCreateDialog () {
      this.addContractDialog = ! this.addContractDialog
      console.log(`TOGGLED`, this.addContractDialog)

    },
    // setDialog (val) {
    //   console.log(`Setting Dialog`)
    //   this.dialog = val
    //   return this.dialog

    // },

  }
}
</script>