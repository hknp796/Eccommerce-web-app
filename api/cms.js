import axios from 'axios'
function baseUrl() {
  return 'http://localhost:5001'
}

function url(path) {
  return baseUrl() + path
}

export async function fetchProducts() {
  const response = await axios.get(url('/products'))
  console.log(response.data, 'response')

  if (response.status === 200) {
    return response.data
  }

  throw new Error(`${response.data}`)
}
