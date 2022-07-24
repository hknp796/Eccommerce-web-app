import {
  fetchCloths,
  fetchShoes,
  fetchSingleProduct,
  fetchMenProducts,
  fetchWomenProducts,
  fetchKidsProducts,
} from '@/api/cms'

export const state = () => ({
  cloths: [],
  shoes: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
})

export const mutations = {
  cloths: (state, products) => {
    state.cloths = products
  },
  shoes: (state, products) => {
    state.shoes = products
  },
  menProducts: (state, menproducts) => {
    state.menProducts = menproducts
  },
  womenProducts: (state, womenproducts) => {
    state.womenProducts = womenproducts
  },
  kidsProducts: (state, kidsProducts) => {
    state.kidsProducts = kidsProducts
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
    ctx.commit('menProducts', menProducts)
  },
  async getWomenProducts(ctx) {
    const womenProducts = await fetchWomenProducts()
    ctx.commit('womenProducts', womenProducts)
  },
  async getKidsProducts(ctx) {
    const kidsProducts = await fetchKidsProducts()
    ctx.commit('kidsProducts', kidsProducts)
  },
}
