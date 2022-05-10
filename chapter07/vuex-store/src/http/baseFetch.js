import axios from 'axios'

export function createAxios(options = {}) {
  return axios.create({
    ...options
  })
}

const localApi = createAxios({
  baseURL: `${document.location.protocol}//${document.location.host}`
})

export default async (url, method, options = {}) =>
  localApi({
    method: method.toUpperCase(),
    url,
    ...options
  })
