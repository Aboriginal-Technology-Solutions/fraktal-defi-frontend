<template>
  <!-- <hello-world /> -->
  <v-container
    min-width="100vw"
  >
    <v-card
      class="d-flex flex-row justify-center"
      :loading="loading"
    >
      <v-card 
        justify-center
        max-width="50%"
        class="pa-2"
      >
      
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>
            Degen Toolset
          </v-card-title>
          <v-card-text>
            
          <v-divider></v-divider>
            <div class="text-subtitle-1">
              Tools to make navigating DeFi easier
            </div>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <br />
            <v-btn color="success">
              Swap
              <v-icon>
                mdi-swap-horizontal-circle-outline
              </v-icon>
            </v-btn>
            &nbsp;
            <v-btn color="primary">
              Liquidity
              <v-icon>
                mdi-cup-water
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text>
            As Degeners, we overstand the time, complexity and patience that it requires to manage investments in DeFi, especially
            when you are Aping in and out of multiple farms, having to go to multiple sources to obtain LP Tokens and so on. 
            To combat all the irritations and excessive time spent on managing these farms, we are creating a tool set to make 
            finding tokens, farms and creating LP Tokens in a fraction of the time
          </v-card-text>
          <v-card-text>
            Our tool set will include an interface which will allow you to swap and provide liquity on multiple chains and multiple 
            exchanges, all from one interface. As well, we are actively gathering up as many farm contracts as we can so that users
            will be able to see all of their balances in one place, kinda like a degen portfolio.

          </v-card-text>
      </v-card>
    </v-card>

  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    loading: false
  }
</script>
