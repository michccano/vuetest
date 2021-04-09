import http from '../http-common'

class UserService {
  register (file:any, onUploadProgress:any, data) {
    const formData = new FormData()

    formData.append('photo', file)
    formData.append('companyName', data.companyName)
    formData.append('companyEmail', data.email)
    formData.append('password', data.password)

    return http.post('http://localhost:8000/doUpload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }

  login (data) {
    const formData = new FormData()

    formData.append('email', data.email)
    formData.append('password', data.password)

    return http.post('http://localhost:8000/login', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  add (file:any, onUploadProgress:any, data) {
    const formData = new FormData()

    formData.append('photo', file)
    formData.append('companyName', data.companyName)
    formData.append('companyEmail', data.email)

    return http.post('http://localhost:8000/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }

  edit (file:any, onUploadProgress:any, data) {
    const formData = new FormData()

    formData.append('photo', file)
    formData.append('companyName', data.companyName)
    formData.append('companyEmail', data.email)
    formData.append('id', data.id)

    return http.post('http://localhost:8000/edit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }

  getCompanies (email) {
    return http.get('http://localhost:8000/companies?email=' + email)
  }

  deleteCompany (id) {
    return http.get('http://localhost:8000/delete/' + id)
  }
}

export default new UserService()
