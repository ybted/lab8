import axios from 'axios'
const baseUrl = '/api/content'

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data)
}

const getLike = () => {
  return axios.get(baseUrl + '/liked').then(res => res.data)
}

const create = async newobject => {
  const res = await axios.post(baseUrl, newobject)
  return res.data
}

const update = (id, newobject) => {
  return axios.put(`${baseUrl}/${id}`, newobject).then(res => res.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(res => res.data)
}

export default { getAll, create, update, remove, getLike }