<template>
  <div class="d-flex align-center justify-center wrapper">
    <v-form ref="form" v-model="valid" lazy-validation class="form">
      <v-text-field
        v-model="loginForm.email"
        :counter="10"
        placeholder="Email Address"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="loginForm.password"
        placeholder="Password"
        required
        outlined
        hide-details="true"
        @keypress.enter="login"
      ></v-text-field>
      <div class="d-flex align-center justify-space-between">
        <v-checkbox
          v-model="loginForm.staySignedIn"
          label="Keep me logged in?"
          required
        ></v-checkbox>
        <p class="ma-0" style="color: grey">Forgot your password?</p>
      </div>

      <v-btn color="black" dark width="100%" @click="login"> Sign In </v-btn>
      <p class="text-center mt-2">
        Not a member?
        <span class="text-decoration-underline"
          ><nuxt-link to="/registration" style="color: black">
            Join Us.</nuxt-link
          >
        </span>
      </p>
    </v-form>
  </div>
</template>
<script>
export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.auth.loggedIn) {
      return redirect('/')
    }
  },
  // middleware: 'guest',
  data() {
    return {
      loginForm: {},
      // why valid is needed
      valid: true,
      cartData: [],
      item: [],
      productId: {},
    }
  },
  mounted() {
    this.cartData = JSON.parse(localStorage.getItem('toCart')) || []
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.loginForm,
        })
        // const productId = this.cartData.map(({ _id }) => _id)
        // this.$store.dispatch('sendAfterLogin', productId)

        this.$router.push('/Checkout')
      } catch (err) {}
    },
  },
}
</script>

<style scoped>
.wrapper {
  height: 100%;
}

.form {
  width: 400px;
}
</style>
