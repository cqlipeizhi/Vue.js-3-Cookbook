export default async (url, method, options = {}) => {
  let httpRequest
  if (method.toUpperCase() === 'GET') {
    httpRequest = await fetch(url, {
      cache: 'reload',
      ...options
    })
  } else {
    httpRequest = fetch(url, {
      method: method.toUpperCase(),
      cache: 'reload',
      ...options
    })
  }
  return type => {
    if (httpRequest.status === 200) {
      switch (type.toLocaleLowerCase()) {
        case 'json':
          return httpRequest.json()
        case 'blob':
          return httpRequest.blob()
        case 'text':
          return httpRequest.text()
        case 'formdata':
          return httpRequest.formData()
        default:
          return httpRequest.arrayBuffer()
      }
    } else {
      return httpRequest
    }
  }
}
