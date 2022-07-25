<template>
  <div>
    {{ products }}
    <div>
      <v-row>
        <v-col v-for="product in products" :key="product._id" cols="4">
          <v-img
            :src="product.img[0]"
            width="300"
            height="300"
            class=""
          ></v-img>
          <h4>{{ product.title }}</h4>
          <h4>{{ product.description }}</h4>
          <h4>{{ product.price }}</h4>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: { type: Array },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped>
.image {
  margin: auto;
}
</style>
