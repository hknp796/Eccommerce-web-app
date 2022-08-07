<template>
  <div>
    <v-container>
      <v-row class="mt-16">
        <v-col cols="3">
          <v-list>
            <v-list-group v-for="item in items" :key="item.title">
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-checkbox
                  v-model="newone"
                  :label="child.title"
                  hide-details="true"
                  @change="check(child.title)"
                ></v-checkbox>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col
              v-for="product in products"
              :key="product._id"
              cols="4"
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
      size: '',
      newone: '',
    }
  },

  methods: {
    check(e) {
      console.log(e, this.newone)
    },
    singleProduct(id, gender) {
      console.log(id)
      this.$router.push(`/ProductDetails/${id}`)
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
