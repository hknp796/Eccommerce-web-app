<template>
  <div>
    <div v-if="isMobile" class="d-flex">
      <nuxt-link to="/" class="link mt-3 ml-3">
        <h1>SOLO</h1>
      </nuxt-link>
      <div class="d-flex ml-auto mt-3">
        <v-icon size="30" @click="toCart"> mdi-shopping-outline</v-icon>
        <div class="smallscreen">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            filled
            rounded
            dense
            placeholder="Search"
            hide-details="true"
            class="topsearch"
          ></v-text-field>
        </div>

        <v-btn
          v-if="isMobile"
          color="success"
          dark
          icon
          right
          @click="drawer = !drawer"
        >
          <v-icon>mdi-hamburger</v-icon>
        </v-btn>
      </div>
      <!-- <v-icon v-if="!searchClicked" @click="searchClicked = !searchClicked"
        >mdi-magnify</v-icon
      > -->

      <v-navigation-drawer
        v-model="drawer"
        app
        right
        temporary
        class="d-flex flex-column"
      >
        <v-list-item class="d-flex justify-end">
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>
        <v-list nav dense>
          <div v-if="isLoggedIn" class="d-flex align-center ml-2">
            <span>{{ user.firstName }} {{ user.lastName }}</span>
            <v-menu open-on-hover bottom offset-y min-width="300">
              <template #activator="{ on, attrs }">
                <v-btn v-bind="attrs" icon v-on="on">
                  <v-icon>mdi-account-outline</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item link>
                  <v-list-item-title><h3>Account</h3></v-list-item-title>
                </v-list-item>
                <v-list-item v-for="(item, index) in items" :key="index" link>
                  <v-list-item-title @click="logout">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <div class="">
                <nuxt-link class="link" to="/menProducts">
                  <h4>Men</h4>
                </nuxt-link>
                <nuxt-link to="/womenProducts" class="link">
                  <h4 class="">Woman</h4>
                </nuxt-link>
                <nuxt-link to="/kidsProducts" class="link">
                  <h4>Kids</h4>
                </nuxt-link>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="d-flex align-center">
          <nuxt-link to="/registration" class="link mx-2 text-center">
            <p class="ma-0">Join Us</p>
          </nuxt-link>
          <div class="vl"></div>
          <nuxt-link to="/login" class="link mx-2">
            <p class="ma-0">Sign In</p>
          </nuxt-link>
        </div>
      </v-navigation-drawer>
    </div>
    <div v-if="!isMobile">
      <div class="topNav d-flex justify-end ma-2">
        <div v-if="isLoggedIn" class="d-flex align-center">
          <span>{{ user.firstName }} {{ user.lastName }}</span>
          <v-menu open-on-hover bottom offset-y min-width="300">
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon v-on="on">
                <v-icon>mdi-account-outline</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item link>
                <v-list-item-title><h3>Account</h3></v-list-item-title>
              </v-list-item>
              <v-list-item v-for="(item, index) in items" :key="index" link>
                <v-list-item-title @click="logout">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div v-else class="d-flex align-center">
          <nuxt-link to="/registration" class="link mx-2 text-center">
            <p class="ma-0">Join Us</p>
          </nuxt-link>
          <div class="vl"></div>
          <nuxt-link to="/login" class="link mx-2">
            <p class="ma-0">Sign In</p>
          </nuxt-link>
        </div>
      </div>

      <div class="d-flex align-center justify-space-around mt-13">
        <nuxt-link to="/" class="link">
          <h1>SOLO</h1>
        </nuxt-link>
        <div v-if="!isMobile" class="d-flex">
          <nuxt-link class="link" to="/menProducts">
            <h4>Men</h4>
          </nuxt-link>
          <nuxt-link to="/womenProducts" class="link">
            <h4 class="ml-6 mr-6">Woman</h4>
          </nuxt-link>
          <nuxt-link to="/kidsProducts" class="link">
            <h4>Kids</h4>
          </nuxt-link>
        </div>

        <div class="d-flex justify-space-between">
          <div class="text-field">
            <v-text-field
              v-model="searchQuery"
              prepend-inner-icon="mdi-magnify"
              filled
              rounded
              dense
              placeholder="Search"
              hide-details="true"
              @keypress.enter="searchHandler"
            ></v-text-field>
          </div>
          <v-icon class="ml-6 mr-6"> mdi-heart-outline </v-icon>
          <v-badge
            :value="cartCount"
            offset-y="18"
            offset-x="12"
            :content="cartCount"
            color="black"
          >
            <v-icon size="30" @click="toCart"> mdi-shopping-outline</v-icon>
          </v-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchProducts } from '../api/cms'
export default {
  data() {
    return {
      drawer: false,
      searchClicked: false,
      items: [
        { title: 'Profile' },
        { title: 'Order' },
        { title: 'Favorites' },
        { title: 'Logout' },
      ],
      searchQuery: '',
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    },

    cartCount() {
      return this.$store.state.cartData.length
    },
    isLoggedIn() {
      return this.$store.state.auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
  },
  // watch: {
  //   searchQuery() {
  //     searchProducts(this.searchQuery)
  //   },
  // },
  async mounted() {
    const cart = await JSON.parse(localStorage.getItem('toCart') || '[]')
    this.$store.dispatch('initializeCart', cart)
  },
  methods: {
    toCart() {
      this.$router.push(`/cart`)
    },
    logout() {
      this.$auth.logout()
    },
    searchHandler() {
      searchProducts(this.searchQuery)
    },
  },
}
</script>

<style scoped>
.text-field {
  width: 200px;
}

.link {
  text-decoration: none !important;
  color: black;
}

.vl {
  border-left: 3px solid #646464;
  height: 15px;
}

.smallscreen {
  width: 200px !important;
}
</style>
