<template>
  <div>
    <product-list v-if="menProducts.length > 0" :products="menProducts" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  computed: {
    menProducts() {
      return this.$store.state.menProducts
    },
  },
  mounted() {
    this.$store.dispatch('getMenProducts')
  },
}
</script>
