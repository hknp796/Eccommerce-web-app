<template>
  <div>
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
      <div class="d-flex">
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
            prepend-inner-icon="mdi-magnify"
            filled
            rounded
            dense
            placeholder="Search"
            hide-details="true"
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
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Profile' },
        { title: 'Order' },
        { title: 'Favorites' },
        { title: 'Logout' },
      ],
    }
  },
  computed: {
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
</style>
