<template>
  <div>
    {{ menProducts }}
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
    menProducts() {
      return this.$store.state.menProducts
    },
  },
  mounted() {
    this.$store.dispatch('getMenProducts')
  },
}
</script>
