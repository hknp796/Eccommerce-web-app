<template>
  <div>
    <div v-if="getProductsData" class="d-flex wrapper mt-10">
      <v-img :src="getProductsData.imageURL" width="400" height="450"></v-img>
      <div class="ml-10">
        <h4>{{ getProductsData.name }}</h4>
        <h5>$ {{ getProductsData.price }}</h5>
        <div class="d-flex align-center">
          <h4>Size</h4>
          <v-btn
            v-for="size in size"
            :key="size"
            class="size"
            @click="getSize(size)"
          >
            {{ size }}
          </v-btn>
        </div>
        <div>
          <v-btn
            block
            class="mb-7 mt-7"
            dark
            color="#00000"
            rounded
            @click="addToCart"
            >Add To Cart</v-btn
          >
          <v-btn block outlined rounded>Buy Now</v-btn>
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
      size: [6, 7, 8],
      cartData: {},
    }
  },

  async created() {
    this.getProductsData = await this.$store.dispatch(
      'fetchSingleproduct',
      this.$route.params.id
    )
  },
  methods: {
    getSize(size) {
      this.cartData.size = size
    },
    addToCart() {
      this.cartData.productDetails = this.getProductsData
      if (this.cartData.size) {
        const id = this.getProductsData._id
        this.$router.push(`/cart/${id}`)
      } else {
        alert('Select Size')
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 50%;
  margin: auto;
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
