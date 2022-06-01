<template>
  <div>
    <div class="d-flex align-center justify-space-around mt-13">
      <h1>SOLO</h1>
      <div class="text-field">
        <v-text-field
          placeholder="I'm Looking for"
          solo
          rounded
          append-icon="mdi-magnify"
          hide-details="true"
        ></v-text-field>
      </div>
      <div class="d-flex">
        <v-icon> mdi-phone </v-icon>
        <v-icon class="ml-12"> mdi-account </v-icon>
        <v-icon class="ml-12"> mdi-cart-outline </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.text-field {
  width: 400px;
}
</style>
