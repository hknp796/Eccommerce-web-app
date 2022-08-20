<template>
  <div>
    <div class="d-flex flex-column align-center justify-center wrapper">
      <h3 class="text-center mb-10">BECOME A MEMBER</h3>
      <v-form ref="form" lazy-validation class="form">
        <v-text-field
          v-model="registrationform.email"
          :counter="10"
          placeholder="Email Address"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="registrationform.password"
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
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.auth.loggedIn) {
      return redirect('/')
    }
  },
  // middleware: 'authenticated',
  data() {
    return {
      registrationform: {},
    }
  },
  methods: {
    async submitRegistration() {
      try {
        await this.$axios.$post('/api/signup', {
          data: this.registrationform,
        })
        await this.$auth.loginWith('local', {
          data: {
            email: this.registrationform.email,
            password: this.registrationform.password,
          },
        })
      } catch (error) {
        console.log(error)
      }
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
