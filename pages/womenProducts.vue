<template>
  <div>
    <product-list v-if="womenProducts.length > 0" :products="womenProducts" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      men: '',
    }
  },
  computed: {
    womenProducts() {
      return this.$store.state.womenProducts
    },
  },
  mounted() {
    this.$store.dispatch('getWomenProducts')
  },
}
</script>
