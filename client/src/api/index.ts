import axios from 'axios';

const API_URL: string = process.env.VUE_APP_API_URL;

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
