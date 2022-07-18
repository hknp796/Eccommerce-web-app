<template>
  <div>
    <div v-if="shoeSection">
      <div v-for="item in shoeSection" :key="item._id" class="pa-4">
        <h1 class="text-center mt-16">{{ item.heading }}</h1>
        <p class="text-center">{{ item.description }}</p>
        <v-row>
          <v-col
            v-for="(image, index) in item.img"
            :key="index"
            :cols="index === 0 ? 12 : 6"
          >
            <v-img :src="image" aspect-ratio="1.8"></v-img>
          </v-col>
          <!-- <v-col>
            <v-img :src="item.img[0]" aspect-ratio="1.8"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-img :src="item.img[1]" aspect-ratio="1.8"></v-img>
          </v-col>
          <v-col cols="6">
            <v-img :src="item.img[2]" aspect-ratio="1.8"></v-img>
          </v-col> -->
        </v-row>
      </div>
    </div>
    <div v-if="clothSection">
      <div v-for="item in clothSection" :key="item._id" class="pa-4">
        <h1 class="text-center mt-16">{{ item.heading }}</h1>
        <p class="text-center">{{ item.description }}</p>
        <v-row>
          <v-col
            v-for="(image, index) in item.img"
            :key="index"
            md="3"
            cols="6"
          >
            <v-img :src="image" aspect-ratio=".8"></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    clothSection() {
      console.log(this.$store.state.cloths)
      return this.$store.state.cloths
    },
    shoeSection() {
      console.log(this.$store.state.shoes)
      return this.$store.state.shoes
    },
  },
  mounted() {
    this.$store.dispatch('clothProducts')
    this.$store.dispatch('shoeProducts')
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
