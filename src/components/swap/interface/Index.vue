<template>
  <div d-flex>
    <v-card
      elevation="2"
      class="mx-auto"
      max-width="50%"
    >
     <v-list-item three-line>
      <v-list-item-content>
        <v-row align="center">
           <v-col
            class="d-flex"
            cols="12"
            sm="12"
          >
<!--  
        <div class="text-overline mb-4">
          OVERLINE
        </div> -->
            <v-select
              v-model="routerSelect"
              :items="routers"
              item-text="name"
              :item-value="'address'"
              label="Exchange"
              dense
              outlined
              @change="token1Changed"
              @click="token1Click"

            ></v-select>
          </v-col>

          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
              <v-select
                v-model="token0Select"
                :items="tokens"
                item-text="symbol"
                item-value="address"
                label="Token From"
                dense
                outlined
                @change="token0Changed"
                @click="token0Click"
              ></v-select>
          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-text-field
                label="Amount In"
                hide-details="auto"
                id="amountIn"
                v-model="amountIn"
                @blur="amountInBlur"

              ></v-text-field>

          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            xs="12"
          >
            <hr style="border: solid 3px #000;" class="flex-grow-1">
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
              >
                <v-icon dark>
                  mdi-swap-vertical-bold
                </v-icon>
              </v-btn>
            <hr style="border: solid 3px #000;" class="flex-grow-1">
          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-select
              v-model="token1Select"
              :items="tokens"
              item-text="symbol"
              :item-value="'address'"
              label="CHoose Token"
              dense
              outlined
              @change="token1Changed"
              @click="token1Click"

            ></v-select>
          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Amount Out"
              hide-details="auto"
              v-model="amountOut"
              @blur="amountOutBlur"
            ></v-text-field>
          </v-col>
        <!-- </v-row>
        <v-row> -->
          <v-col>
            <v-btn block>
              SWAP
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>
    </v-card>
    <div>
        <div>AMOUNT IN: {{amountIn}}</div>
        <div>AMOUNT OUT: {{amountOut}}</div>
        <div>{{routers}}</div>
    </div>
  </div>

</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  components: {
    // HelloWorld,
  },
  data: () => ({
    token0SelectOld: ``,
    token1SelectOld: ``,
    token0Select: ``,
    token1Select: ``,
    routerSelect: null,
    amountIn: 0,
    amountOut: 0
  }),
  computed: {
    ...mapGetters('ethers/contracts', [
      'contracts'
    ]),
    ...mapGetters('ethers/tokens', [
      'tokenLists',
      'chainTokens'
    ]),
    tokens () { return this.chainTokens },
    routers () {
      return this.contracts.filter(x => x.name.match(/router/i))
    }
  },
  methods: {
    ...mapActions('ethers/tokens', [
      'getTokensFromTokenList',
      'parseAllTokenLists'
    ]),
    ...mapActions('ethers/contracts', [
      'getAmountsOut',
      'getAmountsIn'
    ]),
    amountInBlur (text) {
      // alert(text)
      console.log('AMOUNT IN:', text)
      // this.getAmountsOut()
    },
    amountOutBlur (text) {
      // alert(text)
      console.log('AMOUNT OUT:', text)
    },
    token0Changed () {
      console.log(`0 Changed`, this.token0Select)
      if (this.token0Select === this.token1Select) {
        console.log(`sameToken`)
        this.token1Select = this.token0SelectOld
      }
    },
    token1Changed () {
      console.log(`1 Changed`, this.token1Select)

      if (this.token1Select === this.token0Select) {
        this.token0Select = this.token1SelectOld
        console.log(`sameToken`)

      }
    },
    token0Click () {
      console.log(`Token 0: Clicked`)
      this.setTokenSelectCache()
    },
    token1Click () {
      console.log(`Token 1: Clicked`)
      this.setTokenSelectCache()

    },
    setTokenSelectCache () {
      this.token0SelectOld = this.token0Select
      this.token1SelectOld = this.token1Select

    },
    // getAmountsIn (router, amount, tokens) {
    //   // const amounts = uniHelper.getAmountsIn(router, amount, tokens)
    // },
    loadToken () {

    },
    // getTokenList (tokenList) {
    //   return this.axios.get(tokenList)
    //     .then(_tokens => {
    //       this.tokens = _tokens.data.tokens
    //       console.log("TOKEN LIST:", this.tokens)
    //     })
    // }
  },
  created () {
    // console.log({tokenLists: this.tokenLists})
    // let tokenList = (`https://unpkg.com/quickswap-default-token-list@1.1.3/build/quickswap-default.tokenlist.json`)
    this.parseAllTokenLists()

  },
  mounted () {
    console.log(`TOKENS`, this.chainTokens)
  }
  

}
</script>