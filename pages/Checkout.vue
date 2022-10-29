<template>
  <div class="mt-10">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="5">
          <h3 class="mb-10">Enter your name and address:</h3>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="checkout.firstName"
              :counter="10"
              label="First Name"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="checkout.lastName"
              label="Last Name"
              required
              outlined
            ></v-text-field
            ><v-text-field
              v-model="checkout.addressOne"
              :counter="10"
              label="Address Line 1"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="checkout.addressTwo"
              label="Address Line 2"
              required
              outlined
            ></v-text-field
            ><v-text-field
              v-model="checkout.addressThree"
              :counter="10"
              label="Address Line 3"
              required
              outlined
            ></v-text-field>
            <div class="row">
              <v-col>
                <v-text-field
                  v-model="checkout.postCode"
                  label="Postal Code"
                  required
                  outlined
                  hide-details="true"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="checkout.locality"
                  label="Locality"
                  required
                  outlined
                  hide-details="true"
                ></v-text-field>
              </v-col>
            </div>
            <v-row>
              <v-col>
                <v-select
                  v-model="checkout.states"
                  :items="states"
                  label="State"
                  required
                  outlined
                  hide-details="true"
                ></v-select>
              </v-col>
              <v-col>
                <div class="country" items="India" label="Item" outlined>
                  <span class="ml-3"> India </span>
                </div>
              </v-col>
            </v-row>

            <!-- <v-checkbox
              v-model="checkbox"
              label="Save this Addres to my profile"
              required
              hide-details="true"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              label="Make this my preferred address"
              required
            ></v-checkbox> -->
          </v-form>
          <h3 class="mb-7">What's your contact information</h3>
          <v-text-field
            v-model="checkout.email"
            :counter="10"
            label="Email"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="checkout.phone"
            :counter="10"
            label="Mobile"
            required
            outlined
          ></v-text-field>
          <v-checkbox
            v-model="isTermsChecked"
            label="Term and conditions"
            required
          ></v-checkbox>
          <v-btn rounded width="100%" height="60" dark @click="getCheckoutForm"
            >continue</v-btn
          >
        </v-col>
        <v-col cols="3" offset="2">
          <div class="summary">
            <h4 class="mb-5">Order Summary</h4>
            <p>
              Subtotal <span> ₹ {{ totalPrice }}</span>
            </p>
            <p>
              Delivery Charge
              <span>{{ totalPrice > 5000 ? 'Free' : '₹ 50' }}</span>
            </p>
            <v-divider> </v-divider>
            <p class="py-5 mb-0">
              Total
              <span
                >₹ {{ totalPrice > 5000 ? totalPrice : totalPrice + 50 }}</span
              >
            </p>
            <v-divider> </v-divider>
          </div>
          <v-row>
            <v-col
              v-for="cartProduct in cartProducts"
              :key="cartProduct._id"
              class="mt-5"
            >
              <v-row>
                <v-col>
                  <v-img
                    :src="cartProduct.img[0]"
                    width="120"
                    height="130"
                  ></v-img>
                </v-col>
                <v-col>
                  <p>{{ cartProduct.title }}</p>
                  <p>{{ cartProduct.category }}</p>
                  <p>₹ {{ cartProduct.price + 50 }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      script: [{ src: 'https://checkout.razorpay.com/v1/checkout.js' }],
      checkout: {},
      states: [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttarakhand',
        'Uttar Pradesh',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli',
        'Daman and Diu',
        'Delhi',
        'Lakshadweep',
        'Puducherry',
      ],
      isTermsChecked: false,
    }
  },
  computed: {
    cartProducts() {
      return this.$store.state.cartData
    },
    totalPrice() {
      return this.cartProducts.reduce((acc, item) => acc + item.price, 0)
    },
  },
  methods: {
    async getCheckoutForm() {
      const userEmail = this.$auth.$state.user.email

      const data = {
        amount: this.totalPrice,
        name: this.$auth.$state.user.name,
        email: userEmail + '@gmail.com',
        phone: '919496652881',
      }
      const create = await this.$axios.post('/api/create', data)

      const options = {
        key: 'rzp_test_CqnjbVrtqPZfFb',
        order_id: data.id,
        amount: data.amount * 100,
        currency: create.currency,
        name: 'Acme Corp',
        description: 'Payment description',

        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },

        handler: async (response) => {
          try {
            await this.$axios.post('/api/payment', response)
          } catch (error) {}
        },

        theme: {
          color: 'grey', // Set your website theme color
        },
      }

      const rzp = new window.Razorpay(options)

      rzp.open()
    },
  },
}
</script>

<style scoped>
.country {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  align-items: center;
  color: gray;
}

.summary p {
  display: flex;
  justify-content: space-between;
}

.button {
  pointer-events: none;
  background: gainsboro !important;
}
</style>
