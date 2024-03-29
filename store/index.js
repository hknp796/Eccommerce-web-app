import {
  fetchCloths,
  fetchShoes,
  fetchSingleProduct,
  fetchMenProducts,
  fetchWomenProducts,
  fetchKidsProducts,
  sendCartData,
} from '@/api/cms'

export const state = () => ({
  cloths: [],
  shoes: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: [],
  cartData: [],
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
  cartData: (state, cartData) => {
    // const oldData = JSON.parse(localStorage.getItem('toCart') || '[]')

    state.cartData.push(cartData)
    localStorage.setItem('toCart', JSON.stringify(state.cartData))

    //  console.log(cartData.size)
    //  const oldData = JSON.parse(localStorage.getItem('toCart') || '[]')
    //  if (oldData.length === 0) {
    //    state.cartData.push(cartData)

    //    localStorage.setItem('toCart', JSON.stringify(state.cartData))
    //  } else {
    //    const oldData = JSON.parse(localStorage.getItem('toCart') || '[]')
    //    const objIndex = oldData.findIndex((obj) => obj._id === cartData._id)
    //    console.log('Before update: ', oldData[objIndex])

    //    oldData[objIndex].size = cartData.size

    //    console.log('After update: ', oldData[objIndex])

    //    console.log(oldData, 'mutation')
    //    state.cartData.push(cartData)

    //    localStorage.setItem('toCart', JSON.stringify(state.cartData))
    //  }
  },
  initializeCart: (state, filter) => {
    state.cartData = filter
  },
  // removCart: (state, data) => {
  //   state.cartData = data
  // },
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
  addToCart({ commit }, cartData) {
    // await sendCartData(cartData)
    commit('cartData', cartData)
  },

  async sendAfterLogin({ commit }, cartData) {
    await sendCartData(cartData)
    commit('cartData', cartData)
  },

  initializeCart({ commit }, cartData) {
    commit('initializeCart', cartData)
  },
  removeCartData({ commit }, data) {
    localStorage.setItem('toCart', JSON.stringify(data))
    commit('initializeCart', data)
  },
}
