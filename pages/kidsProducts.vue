<template>
  <div>
    <product-list v-if="kidsProducts.length > 0" :products="kidsProducts" />
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
    kidsProducts() {
      return this.$store.state.kidsProducts
    },
  },
  mounted() {
    this.$store.dispatch('getKidsProducts')
  },
}
</script>
