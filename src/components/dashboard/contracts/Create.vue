<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Contrsact</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Contract name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Contract Address"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="categories"
                  label="Contract Category"
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="supportedNetworks"
                  label="Contract Network"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data: () => ({
      _dialog: false,
      contract: {
        name: null,
        address: null,
        category: null
      }
    }),
    computed: {
      ...mapGetters('ethers', [
        `supportedNetworks`
      ]),
      ...mapGetters('ethers/contracts', [
        'contracts',
        'categories'
      ])
    },
    props: ['dialog'],
    methods: {
      setDialog (val) {
        console.log(`Setting Dialog...`)
        // this.dialog = val
        return val
      },
      close () {
        console.log(`Cancelling`)
        this.$emit('setDialog', false)
      },
      save () {
        console.log(`Saving`)
        this.$emit('saveContract', this.contract)
        this.$emit('setDialog', false)
      }
      
    },
    mounted () {
      // this.dialog = false
    }
  }
</script>