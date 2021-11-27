<template>
  <v-container>
    <!-- {{address}}
    {{network}}
    {{chainId}} -->
    <v-card
      class="mx-auto"
      max-width="50%"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            USER: {{address}}
          </div>
          <div class="text-overline mb-4">
            NETWORK: {{network}}
          </div>
          <div class="text-overline mb-4">
            CHAIN ID: {{chainId}}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            BALANCE: {{myBalance}} {{gasToken}}
          </v-list-item-title>

        </v-list-item-content>

      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-btn to="/wallet/tokens">
            Show Token Balances
          </v-btn>
        </v-list-item-content> 
      </v-list-item>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import {
  fromWei
} from '@/lib/utils'

export default {
  computed: {
    ...mapGetters('ethers', [
      'network',
      'address',
      'chainId',
      'balance',
      'balances',
      'gasToken'
    ]),
    myBalance () {
      return fromWei(this.balance)
    }
  }
}
</script>