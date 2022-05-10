import baseAxios, { jsonPlaceholderApi } from './baseAxios'

export const getHttp = async (url, params, options) => baseAxios(url, 'get', { ...options, params })

export const postHttp = async (url, data, options) => baseAxios(url, 'post', { data, ...options })

export const putHttp = async (url, data, options) => baseAxios(url, 'put', { data, ...options })

export const patchHttp = async (url, data, options) => baseAxios(url, 'patch', { data, ...options })

export const updateHttp = async (url, data, options) => baseAxios(url, 'update', { data, ...options })

export const deleteHttp = async (url, data, options) => baseAxios(url, 'delete', { data, ...options })

export const getTodos = async userId => jsonPlaceholderApi.get('todos', {
  params: {
    userId
  }
})
