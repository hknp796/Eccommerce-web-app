<template>
  <div>
    <v-carousel hide-delimiters class="wrapper" height="800">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="d-flex wrappers">
      <div v-for="(item, index) in products" :key="index" class="pa-3 ml-5">
        <v-img
          :src="item.imageURL"
          width="400"
          height="400"
          @click="clicked(item._id)"
        ></v-img>
        <h4>{{ item.name }}</h4>
        <p>{{ item.gender }} {{ item.category }}</p>
        <h3>$ {{ item.price }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('../assets/home1.png'),
        },
        {
          src: require('../assets/home2.png'),
        },
        {
          src: require('../assets/home3.png'),
        },
      ],
    }
  },

  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.$store.dispatch('products')
  },

  methods: {
    clicked(id) {
      this.$router.push(`/ProductDetails/${id}`)
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 95%;
  background-color: #f3f3f3;
  margin: auto;
  margin-top: 40px;
  position: relative;
}

.home-image {
  position: absolute;
  right: 0;
  top: 25px;
}

.products {
  width: 200px;
  height: 200px;
}

.wrappers {
  flex-wrap: wrap;
}
</style>
