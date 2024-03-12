import axios from 'axios';
import ENDPOINTS from './endpoints';

// const baseURL = 'https://task-pro-3a4o.onrender.com';
const baseURL = 'http://localhost:5050';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

axiosInstance.interceptors.response.use(
  req => {
    return req;
  },
  async error => {
    const originReq = error.config;
    console.log(error);

    if (error.response.status === 401) {
      try {
        const { data } = await axios.get('http://localhost:5050/auth/refresh', {
          withCredentials: true,
        });

        console.log(data);

        axios.defaults.headers.common.Authorization = `Bearer ${data.tokenAccess}`;

        return axios.request(originReq);
      } catch (error) {
        console.log('Unauthorized');
      }
    }
  }
);

export default axiosInstance;
