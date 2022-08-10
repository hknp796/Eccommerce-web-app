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
  data() {
    return {
      loginForm: {},
      // why valid is needed
      valid: true,
    }
  },
  methods: {
    async login() {
      console.log(this.loginForm)
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginForm,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
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
