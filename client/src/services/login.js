import axios from 'axios'
const baseUrl = 'http://172.18.198.218/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response
}
// eslint-disable-next-line
export default { login }