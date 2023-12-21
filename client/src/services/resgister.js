import axios from 'axios'
const baseUrl = 'http://172.18.198.218/api/register'

const register = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
// eslint-disable-next-line
export default { register }