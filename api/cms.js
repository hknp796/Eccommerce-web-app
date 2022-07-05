import axios from 'axios'
function baseUrl() {
  return 'http://localhost:8080/api'
}

function url(path) {
  return baseUrl() + path
}

export async function fetchProducts() {
  const response = await axios.get(url('/allproducts'))

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}

export async function fetchSingleProduct(id) {
  const response = await axios.get(url(`/${id}`))
  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
