<template>
  <div>
    <div v-if="getProductsData" class="d-flex wrapper">
      <v-img :src="getProductsData.imageURL" width="100" height="400"></v-img>
      <div class="ml-10">
        <h4>{{ getProductsData.name }}</h4>
        <h5>$ {{ getProductsData.price }}</h5>
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
    return {
      getProductsData: [],
    }
  },

  async created() {
    this.getProductsData = await this.$store.dispatch(
      'fetchSingleproduct',
      this.$route.params.id
    )
    console.log(this.$store.state.singleProduct)
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
