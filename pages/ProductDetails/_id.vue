<template>
  <div>
    <div v-show="getProductsData" class="d-flex wrapper mt-10">
      <div class="images">
        <v-img
          v-for="(image, index) in getProductsData.Images"
          :key="index"
          :src="image"
          width="400"
          height="450"
        ></v-img>
      </div>
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
    console.log(this.getProductsData, 'product')
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

.images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
}
</style>
