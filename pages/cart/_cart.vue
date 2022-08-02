<template>
  <div>
    <v-row class="ma-10">
      <v-col v-for="cartData in cartItems" :key="cartData._id" cols="8">
        <v-row class="">
          <v-col cols="3">
            <v-img :src="cartData.img[0]" class="image"></v-img>
          </v-col>
          <v-col cols="9">
            <div>
              <div class="d-flex justify-space-between">
                <h4>{{ cartData.title }}</h4>
                <h4>
                  ₹
                  {{
                    parseFloat(cartData.price).toFixed(2).replace(/[,]/, '.')
                  }}
                </h4>
              </div>
              <p class="mb-0">{{ cartData.description }}</p>
              <div class="d-flex align-center">
                <p class="mr-5 mb-0">Size : 6</p>
                <div>
                  Quantity :
                  <v-btn icon @click="quantityDecrease">
                    <v-icon>mdi-minus-circle-outline</v-icon></v-btn
                  >{{ quantity
                  }}<v-btn icon @click="quantityIncrease">
                    <v-icon>mdi-plus-circle-outline</v-icon></v-btn
                  >
                </div>
              </div>
              <v-icon>mdi-trash-can-outline</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <div class="summary">
        <h4 class="mb-5">Summary</h4>
        <p>
          Price <span> ₹ {{ 666 }}</span>
        </p>
        <p>Delivery Charge <span>₹ 50</span></p>
        <v-divider> </v-divider>
        <p class="py-5 mb-0">
          Total <span>₹ {{ 66 + 50 }}</span>
        </p>
        <v-divider> </v-divider>
        <v-btn block class="mt-8" height="50" dark color="black" rounded
          >Place Order</v-btn
        >
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: '',
      quantity: 1,
    }
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('toCart') || '[]')
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
.summary p {
  display: flex;
  justify-content: space-between;
}

.image {
  max-width: 250px;
  max-height: 150px;
  object-fit: contain;
}
</style>
