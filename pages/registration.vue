<template>
  <div>
    <div class="d-flex flex-column align-center justify-center wrapper">
      <h3 class="text-center mb-10">BECOME A MEMBER</h3>
      <v-form ref="form" lazy-validation class="form">
        <v-text-field
          v-model="registrationform.name"
          :counter="10"
          placeholder="Email Address"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="registrationform.email"
          placeholder="Password"
          required
          outlined
          hide-details="true"
          type="password"
        ></v-text-field>

        <v-text-field
          v-model="registrationform.firstName"
          :counter="10"
          placeholder="First Name"
          required
          outlined
          class="mt-7"
        ></v-text-field>

        <v-text-field
          v-model="registrationform.lastName"
          placeholder="Last Name"
          required
          outlined
          hide-details="true"
        ></v-text-field>
        <v-checkbox
          v-model="registrationform.offersChecked"
          label="For offers and other benefits"
          required
        ></v-checkbox>

        <v-btn color="black" dark width="100%" @click="submitRegistration">
          Join Us.
        </v-btn>
        <p class="text-center mt-2">
          Already a member?
          <span class="text-decoration-underline"
            ><nuxt-link to="/login" style="color: black"> Login</nuxt-link>
          </span>
        </p>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registrationform: {},
    }
  },
  methods: {
    submitRegistration() {
      console.log(this.registrationform)
    },
  },
}
</script>

<style scoped>
.wrapper {
  height: 80vh;
}

.form {
  width: 350px;
}
</style>
