<template>
  <div>
    <v-carousel hide-delimiters class="wrapper" height="800">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  methods: {},
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
</style>
