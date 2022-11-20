import axios from 'axios';
import { getStorage } from '../local-storage';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use(
  config => {
    const token = getStorage('token');
    config.headers = {
      Authorization: token ? `Bearer ${token}` : '',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
