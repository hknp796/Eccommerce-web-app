<template>
  <div class="d-flex align-center justify-center wrapper">
    <v-form ref="form" v-model="valid" lazy-validation class="form">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        placeholder="Email Address"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="Password"
        required
        outlined
        hide-details="true"
      ></v-text-field>
      <div class="d-flex align-center justify-space-between">
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Keep me logged in?"
          required
        ></v-checkbox>
        <p class="ma-0" style="color: grey">Forgot your password?</p>
      </div>

      <v-btn color="black" dark width="100%" @click="reset"> Sign In </v-btn>
      <p class="text-center mt-2">
        Not a member?
        <span class="text-decoration-underline"
          ><nuxt-link to="/register" style="color: black"> Join Us.</nuxt-link>
        </span>
      </p>
    </v-form>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.wrapper {
  height: 80vh;
}

.form {
  width: 400px;
}
</style>
