import {
  fetchCloths,
  fetchShoes,
  fetchSingleProduct,
  fetchMenProducts,
} from '@/api/cms'

export const state = () => ({
  cloths: [],
  shoes: [],
  singleProduct: [],
})

export const mutations = {
  cloths: (state, products) => {
    state.cloths = products
  },
  shoes: (state, products) => {
    state.shoes = products
  },
  singleProduct: (state, singleProduct) => {
    console.log(singleProduct, 'mutations')
    state.singleProduct = singleProduct
  },
}

export const actions = {
  async clothProducts(ctx) {
    const products = await fetchCloths()
    ctx.commit('cloths', products)
  },
  async shoeProducts(ctx) {
    const products = await fetchShoes()
    ctx.commit('shoes', products)
  },
  async fetchSingleproduct(ctx, id) {
    const singleProduct = await fetchSingleProduct(id)
    return singleProduct
  },
  async getMenProducts(ctx) {
    const menProducts = await fetchMenProducts()
    return menProducts
  },
}
