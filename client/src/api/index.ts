import axios from "axios";

const API_URL: string = 'http://localhost:5000/api'

const instance = axios.create({
  baseURL: API_URL
})

export default instance