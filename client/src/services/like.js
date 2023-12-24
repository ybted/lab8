import axios from 'axios'
const baseUrl = '/api/like'


const create = async (id) => {
  const res = await axios.post(`${baseUrl}/${id}`)
  return res.data
}

const update = (id, newobject) => {
  return axios.put(`${baseUrl}/${id}`, newobject).then(res => res.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(res => res.data)
}

export default { create, update, remove }