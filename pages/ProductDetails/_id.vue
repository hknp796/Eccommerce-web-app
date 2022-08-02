<template>
  <div v-show="getProductsData" class="wrapper mt-10">
    <v-row>
      <v-col cols="7" class="ml-10">
        <div class="images">
          <v-img
            v-for="(image, index) in getProductsData.img"
            :key="index"
            :src="image"
            width="400"
            height="450"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="4" class="ml-10">
        <h2>{{ getProductsData.title }}</h2>
        <p>{{ getProductsData.description }}</p>
        <h4>₹ {{ getProductsData.price }}</h4>
        <h4 class="mt-10">Select Size</h4>
        <div class="d-flex">
          <v-btn
            v-for="size in getProductsData.size"
            :key="size"
            class="mx-2 mt-6"
            outlined
            @click="getSize(size)"
          >
            {{ size }}
          </v-btn>
        </div>
        <div>
          <v-btn
            block
            class="mb-7 mt-7 px-10 py-8"
            dark
            color="black"
            @click="addToCart"
            >Add To Cart</v-btn
          >
          <v-btn class="mb-7 mt-7 px-10 py-8" block outlined>Favorite</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getProductsData: [],
      cartData: {},
      selectedProduct: [],
    }
  },

  async mounted() {
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
      this.$store.dispatch('addToCart', this.getProductsData)

      // this.cartData.productDetails = this.getProductsData
      // if (this.cartData.size) {
      //   const id = this.getProductsData._id
      //   this.$router.push(`/cart/${id}`)
      // } else {
      //   alert('Select Size')
      // }
    },
  },
}
</script>

<style scoped>
.images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
}

.v-btn {
  border-radius: 50px !important ;
}
</style>
