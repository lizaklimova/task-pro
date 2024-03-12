import axios from 'axios';
import ENDPOINTS from './endpoints';

const baseURL = 'https://task-pro-3a4o.onrender.com';
// const baseURL = 'http://localhost:5050';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

axiosInstance.interceptors.response.use(
  req => {
    return req;
  },
  async error => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true;

      try {
        const { data } = await axios.get(
          `${baseURL}/${ENDPOINTS.auth.refreshToken}`,
          {
            withCredentials: true,
          }
        );

        axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.user.tokenAccess}`;

        return axiosInstance.request(error.config);
      } catch (error) {
        throw error;
      }
    }
  }
);

export default axiosInstance;
