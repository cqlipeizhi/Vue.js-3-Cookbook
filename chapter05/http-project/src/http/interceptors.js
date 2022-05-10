import Swal from 'sweetalert2'

const postMethods = ['patch']

export function requestInterceptor (config) {
  const bool1 = postMethods.includes(config.method.toLocaleLowerCase())
  const bool2 = bool1 && Object.prototype.hasOwnProperty.call('id', config.data.data)
  const bool3 = bool2 && !config.data.data.id
  console.log(bool1 + ':' + bool2 + ':' + bool3)
  if (
    postMethods.includes(config.method.toLocaleLowerCase()) &&
    !Object.prototype.hasOwnProperty.call('id', config.data.data) &&
    !config.data.data.id
  ) {
    throw new Error('You need to pass an ID for this request')
  }
  return config
}

export function responseInterceptor (response) {
  return response
}

export function errorInterceptor (error) {
  Swal.fire({
    title: 'Error!',
    text: error.message
  })
  return Promise.reject(error)
}
