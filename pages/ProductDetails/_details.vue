<template>
  <div>
    <div v-if="getProductsData[0]" class="d-flex wrapper">
      <v-img
        :src="getProductsData[0].imageURL"
        width="100"
        height="400"
      ></v-img>
      <div class="ml-10">
        <h4>{{ getProductsData[0].name }}</h4>
        <h5>$ {{ getProductsData[0].price }}</h5>
        <div class="d-flex align-center">
          <h4>Size</h4>
          <div class="size">6</div>
          <div class="size">7</div>
          <div class="size">8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    getProductsData() {
      return this.$store.state.products.filter(
        (item) => item.id === Number(this.$route.params.details)
      )
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 500px;
}

.size {
  width: 50px;
  height: 50px;
  background-color: rgb(193 193 193);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
}
</style>
