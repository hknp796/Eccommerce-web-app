<template>
  <div>
    <div v-if="cartData" class="d-flex wrapper mt-10">
      <v-img :src="cartData.imageURL" width="400" height="450"></v-img>
      <div class="ml-10">
        <h4>{{ cartData.name }}</h4>
        <p class="mt-5">{{ cartData.category }}</p>
        <div class="d-flex align-center"></div>
        <div class="d-flex">
          <p class="mr-7 mt-1">Size : 6</p>
          <p>
            Quantity :
            <v-btn icon @click="changeQuantity('minus')">
              <v-icon>mdi-minus-circle-outline</v-icon></v-btn
            >{{ quantity
            }}<v-btn icon @click="changeQuantity('plus')">
              <v-icon>mdi-plus-circle-outline</v-icon></v-btn
            >
          </p>
        </div>
        <v-icon>mdi-delete</v-icon>
      </div>
      <div class="ml-16 summary">
        <h4 class="mb-5">Summary</h4>
        <p>
          Price <span> $ {{ cartData.price }}</span>
        </p>
        <p>Delivery Charge <span>50</span></p>
        <p>
          Total <span>$ {{ cartData.price + 50 }}</span>
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
      quantity: '',
    }
  },
  async created() {
    this.cartData = await this.$store.dispatch(
      'fetchSingleproduct',
      this.$route.params.cart
    )
  },
  methods: {
    changeQuantity(action) {
      action === 'plus' ? this.quantity++ : this.quantity--
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
</style>
