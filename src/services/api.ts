import axios from 'axios'
import {IP_SERVER} from './constants'

const api = axios.create({
    baseURL: `${IP_SERVER}:3333`
})

export default api