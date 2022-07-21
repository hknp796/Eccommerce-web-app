<template>
  <div>
    <div class="d-flex align-center justify-space-around mt-13">
      <h1>SOLO</h1>
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
        <v-icon> mdi-shopping-outline </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.text-field {
  width: 200px;
}

.link {
  text-decoration: none !important;
  color: black;
}
</style>
