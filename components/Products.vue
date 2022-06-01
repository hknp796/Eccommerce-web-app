<template>
  <div>
    <v-btn @click="getData"> click </v-btn>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  data() {
    return {}
  },
  methods: {
    getData() {
      const options = {
        method: 'GET',
        url: 'https://taobao-api.p.rapidapi.com/api',
        params: { api: 'item_search', page_size: '40', q: 'shoes' },
        headers: {
          'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com',
          'X-RapidAPI-Key':
            '361da33457msh321bb58d0e43461p1ecf11jsn542819c4b882',
        },
      }

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.error(error)
        })
    },
  },
}
</script>
