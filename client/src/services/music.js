import axios from 'axios'
const baseUrl = 'http://172.18.198.218/api/content'

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data)
}

const create = async newobject => {
  const res = await axios.post(baseUrl, newobject)
  return res.data
}

export default { getAll, create }