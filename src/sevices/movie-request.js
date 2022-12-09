import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: '1f2f5cbae44b97f8305d1ebba731e7b6',
  },
})
