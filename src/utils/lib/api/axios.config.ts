import config  from '@/config/dev-local.config'
import axios from 'axios'

export const api = axios.create({
  baseURL: config.apiURL,
})