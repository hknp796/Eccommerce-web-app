import { fetchProducts } from '@/api/cms'

export const state = () => ({
  products: [],
})

export const mutations = {
  products: (state, products) => {
    state.products = [...products.Products]
  },
}

export const actions = {
  async products(ctx) {
    const products = await fetchProducts()
    ctx.commit('products', products)
  },
}
