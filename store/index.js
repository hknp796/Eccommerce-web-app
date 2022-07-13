import { fetchProducts, fetchSingleProduct } from '@/api/cms'

export const state = () => ({
  homeProducts: [],
  allProducts: [],
  singleProduct: [],
})

export const mutations = {
  products: (state, products) => {
    state.homeProducts = products.homeProducts
    state.allProducts = products.AllProducts
  },
  singleProduct: (state, singleProduct) => {
    console.log(singleProduct, 'mutations')
    state.singleProduct = singleProduct
  },
}

export const actions = {
  async products(ctx) {
    const products = await fetchProducts()
    ctx.commit('products', products)
  },
  async fetchSingleproduct(ctx, id) {
    const singleProduct = await fetchSingleProduct(id)
    return singleProduct
  },
}
