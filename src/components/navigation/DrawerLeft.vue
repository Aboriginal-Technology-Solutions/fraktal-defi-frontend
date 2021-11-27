<template>
    <!-- <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-row>
    </v-container>
 -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      @input="checkInput"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Fraktal Financial Services</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <div           
          v-for="item in items"
          :key="item.title"
        >

          <v-list-item
            v-if="typeof item.items === 'undefined'"
            :to="item.path"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-group
            v-else
            :value="true"
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </template> -->

            <v-list-group
              v-else
              :value="true"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(subItem, i) in item.items"
                :key="i"
                :to="subItem.path"
                link
              >
                <v-list-item-title v-text="subItem.title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
            <!-- </v-list-group> -->


        </div>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  
  export default {
    data () {
      return {
        // drawer_: this.drawer,
        // items: [
        //   { title: 'Home', icon: 'mdi-view-dashboard' },
        //   { title: 'About', icon: 'mdi-forum' },
        // ],
      }
    },
    computed: {
      ...mapGetters('navigation', {
        _drawer: 'drawer',
        items: 'drawerMenuItems'
      }),
      drawer: {
        get () {
          console.log({_drawer: this._drawer})
          return this._drawer
        },
        set (drawer) {
          this.drawerLeft(drawer)
        }
      }
    },
    methods: {
      checkInput (e) {
        console.log(e)
      },
      ...mapMutations('navigation', {
        drawerLeft: 'drawer'
      })
    }
  }
</script>