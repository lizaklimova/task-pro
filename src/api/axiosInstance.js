import axios from 'axios';

const baseURL = 'https://task-pro-3a4o.onrender.com';
// const baseURL = 'http://localhost:5050';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
