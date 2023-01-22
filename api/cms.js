let axios = null

export default function ({ $axios }) {
  axios = $axios
}

function baseUrl() {
  return 'https://ecommerce-d0yo.onrender.com/api'
}

function url(path) {
  return baseUrl() + path
}

export async function fetchCloths() {
  const response = await axios.get(url('/cloths'))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}

export async function fetchShoes() {
  const response = await axios.get(url('/shoes'))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
export async function fetchMenProducts() {
  const response = await axios.get(url('/men'))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}

export async function fetchWomenProducts() {
  const response = await axios.get(url('/women'))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}

export async function fetchKidsProducts() {
  const response = await axios.get(url('/kids'))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
export async function fetchSingleProduct(id) {
  const response = await axios.get(url(`/Product/${id}`))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
export async function sendCartData(data) {
  const response = await axios.post(url('/cart'), { product_ids: data })

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
export async function searchProducts(data) {
  const response = await axios.post(url('/search'), { search: data })

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
