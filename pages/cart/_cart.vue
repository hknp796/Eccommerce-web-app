<template>
  <div v-if="cartItems">
    <v-container class="mt-15">
      <v-row class="mt-15">
        <v-col sm="12" md="6">
          <div v-for="cartData in cartItems" :key="cartData._id">
            <v-row class="">
              <v-col sm="12" md="4">
                <div class="image-container">
                  <v-img :src="cartData.img[0]" class="image"></v-img>
                </div>
              </v-col>
              <v-col cols="7" class="d-flex flex-column justify-space-between">
                <div>
                  <div class="d-flex justify-space-between">
                    <h4>{{ cartData.title }}</h4>
                    <h4>
                      ₹
                      {{
                        parseFloat(cartData.price)
                          .toFixed(2)
                          .replace(/[,]/, '.')
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
                </div>

                <v-btn icon @click="deleteCartItem(cartData._id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="mt-8 mb-8"> </v-divider>
          </div>
        </v-col>
        <v-col offset="1" sm="12" md="3">
          <div class="summary">
            <h4 class="mb-5">Summary</h4>
            <p>
              Price <span> ₹ {{ totalPrice }}</span>
            </p>
            <p>Delivery Charge <span>₹ 50</span></p>
            <v-divider> </v-divider>
            <p class="py-5 mb-0">
              Total <span>₹ {{ totalPrice + 50 }}</span>
            </p>
            <v-divider> </v-divider>
            <v-btn
              block
              class="mt-8"
              height="50"
              dark
              color="black"
              rounded
              to="/Checkout"
              >Place Order</v-btn
            >
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
      quantity: 1,
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartData
    },
    totalPrice() {
      return this.cartItems.reduce((acc, item) => acc + item.price, 0)
    },
  },

  methods: {
    quantityDecrease() {
      if (this.quantity === 1) return
      this.quantity--
    },
    quantityIncrease() {
      this.quantity++
    },
    deleteCartItem(id) {
      const old = Object.assign([], this.cartItems)
      const newCart = old.filter((item) => {
        return item._id !== id
      })
      this.$store.dispatch('removeCartData', newCart)
    },
  },
}
</script>
<style scoped>
.summary p {
  display: flex;
  justify-content: space-between;
}

/* .image-container {
  height: 200px;
  width: 190px;
} */

.image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
