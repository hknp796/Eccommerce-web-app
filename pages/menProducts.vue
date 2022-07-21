<template>
  <div>
    {{ men }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      men: '',
    }
  },
  async mounted() {
    this.men = await this.$store.dispatch('getMenProducts')
  },
}
</script>
