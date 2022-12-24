<template>
  <div v-show="getProductsData" class="wrapper mt-10">
    <v-container>
      <v-row>
        <v-col sm="12" md="6" class="">
          <div class="images">
            <v-img
              v-for="(image, index) in getProductsData.img"
              :key="index"
              :src="image"
            ></v-img>
          </div>
        </v-col>
        <v-col sm="6" md="3" class="ml-5 mr-5">
          <h2>{{ getProductsData.title }}</h2>
          <p>{{ getProductsData.description }}</p>
          <h4>₹ {{ getProductsData.price }}</h4>
          <h4 class="mt-10">Select Size</h4>
          <div class="d-flex">
            <v-btn
              v-for="size in sizes"
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // getProductsData: [],
      // sizes: [],
      isSizeClicked: 0,
      getProducts: [],
      sizeSelected: '',
      cart: [],
    }
  },
  computed: {
    getProductsData() {
      return Object.assign({}, { ...this.getProducts })
    },
    sizes() {
      return Object.assign({}, { ...this.getProducts.size })
    },
  },

  async mounted() {
    this.getProducts = await this.$store.dispatch(
      'fetchSingleproduct',
      this.$route.params.id
    )
    // console.log(getProducts)
    // console.log({ ...getProducts })
    // this.getProductsData = Object.assign({}, { ...getProducts })
    // this.sizes = Object.assign({}, { ...getProducts.size })
  },
  methods: {
    getSize(size) {
      this.isSizeClicked = 1
      this.sizeSelected = size
    },
    async addToCart() {
      const cartData = JSON.parse(localStorage.getItem('toCart') || '[]')
      const exists = cartData.some((field) => {
        return field._id === this.getProducts._id
      })

      this.getProductsData.size = this.sizeSelected

      if (!exists && !this.$auth.$state.loggedIn) {
        await this.$store.dispatch('addToCart', this.getProductsData)

        this.isSizeClicked = 0
      }

      if (!exists && this.$auth.$state.loggedIn) {
        this.$store.dispatch('sendAfterLogin', this.getProductsData)
      }
      //  else {
      //   this.$store.dispatch('addToCart', this.getProductsData)
      //   !exists ? alert('Please Select Size') : alert('Already Added to Cart')
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
