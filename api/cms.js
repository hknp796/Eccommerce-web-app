import axios from 'axios'
function baseUrl() {
  return 'http://localhost:8080/api'
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
