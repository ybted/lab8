import axios from 'axios'
const baseUrl = '/api/register'

const register = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
// eslint-disable-next-line
export default { register }