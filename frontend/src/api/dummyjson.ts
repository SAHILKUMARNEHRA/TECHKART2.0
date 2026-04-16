import axios from 'axios'

export const dummyjson = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 15000,
})

