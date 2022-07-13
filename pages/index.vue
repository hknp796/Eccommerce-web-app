<template>
  <div v-if="mensClothing">
    <h1 class="text-center mt-16">{{ mensClothing.heading }}</h1>
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
    mensClothing() {
      return this.sections.find(
        (section) => section.heading === "MEN'S CLOTHS COLLECTION"
      )
    },
    sections() {
      console.log(this.$store.state.homeProducts)
      return this.$store.state.homeProducts
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
