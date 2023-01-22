<template>
  <div>
    <v-container>
      <v-row class="mt-16">
        <v-col sm="6" md="3">
          <v-list>
            <v-list-group v-for="item in items" :key="item.title">
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-checkbox
                  :label="child.title"
                  hide-details="true"
                  @change="selectedFilter(child.title, item.title)"
                ></v-checkbox>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <v-col sm="6" md="8">
          <v-row>
            <v-col
              v-for="product in fullProducts"
              :key="product._id"
              md="6"
              @click="singleProduct(product._id, product.gender)"
            >
              <v-img :src="product.img[0]" width="100%" height="auto"></v-img>
              <h4>{{ product.title }}</h4>
              <p>{{ product.description }}</p>
              <h4>{{ product.price }}</h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { searchProducts } from '../api/cms'
export default {
  props: {
    products: { type: Array },
  },

  data() {
    return {
      items: [
        {
          items: [{ title: 'Small' }, { title: 'Medium' }, { title: 'Large' }],
          title: 'Size',
        },

        {
          items: [
            { title: 'White' },
            { title: 'Black' },
            { title: 'Red' },
            { title: 'Blue' },
            { title: 'Green' },
          ],
          title: 'Colors',
        },
        {
          items: [{ title: 'Men' }, { title: 'Women' }],
          title: 'Gender',
        },
      ],
      searchItem: '',
      fullProducts: '',
      selectedItems: [],
    }
  },

  created() {
    this.$nuxt.$on('search', (a) => {
      this.searchHandler(a)
    })
  },

  mounted() {
    this.fullProducts = JSON.parse(JSON.stringify(this.products))
  },

  methods: {
    async selectedFilter(fitlerValue) {
      if (this.selectedItems.includes(fitlerValue)) {
        const index = this.selectedItems.indexOf(fitlerValue)
        this.selectedItems.splice(index, 1)
      } else {
        this.selectedItems.push(fitlerValue)
      }
      this.fullProducts = await searchProducts(this.selectedItems)
    },

    singleProduct(id) {
      this.$router.push(`/ProductDetails/${id}`)
    },

    async searchHandler(a) {
      this.fullProducts = await searchProducts(a)
    },
  },
}
</script>

<style scoped>
.image {
  margin: auto;
}

.v.row {
  margin-top: 140px !important;
}
</style>
