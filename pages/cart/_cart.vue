<template>
  <div>
    <div v-if="cartData" class="d-flex wrapper mt-10">
      <v-img :src="cartData.Images[0]" class="image"></v-img>
      <div class="ml-10">
        <h4>{{ cartData.name }}</h4>
        <p class="mt-5">{{ cartData.category }}</p>
        <div class="d-flex">
          <p class="mr-7 mt-1">Size : 6</p>
          <p>
            Quantity :
            <v-btn icon @click="quantityDecrease">
              <v-icon>mdi-minus-circle-outline</v-icon></v-btn
            >{{ quantity
            }}<v-btn icon @click="quantityIncrease">
              <v-icon>mdi-plus-circle-outline</v-icon></v-btn
            >
          </p>
        </div>
        <v-icon>mdi-delete</v-icon>
      </div>
      <div class="ml-16 summary">
        <h4 class="mb-5">Summary</h4>
        <p>
          Price <span> ₹ {{ cartData.price }}</span>
        </p>
        <p>Delivery Charge <span>₹ 50</span></p>
        <p>
          Total <span>₹ {{ cartData.price + 50 }}</span>
        </p>
        <v-btn block class="mb-7 mt-7" dark color="#00000" rounded
          >Place Order</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartData: '',
      quantity: 1,
    }
  },
  async created() {
    this.cartData = await this.$store.dispatch(
      'fetchSingleproduct',
      this.$route.params.cart
    )
  },
  methods: {
    quantityDecrease() {
      if (this.quantity === 1) return
      this.quantity--
    },
    quantityIncrease() {
      this.quantity++
    },
  },
}
</script>
<style scoped>
.wrapper {
  width: 50%;
  margin: auto;
}

.summary p {
  display: flex;
  justify-content: space-between;
  width: 150px;
}

.image {
  max-width: 300px;
  max-height: 200px;
  object-fit: contain;
}
</style>
