import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // e.g., http://localhost:5000/api
  timeout: 10000, // Optional timeout
});

// Request interceptor: attach token if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle global errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error.response ? error.response.data : error.message);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // Optionally redirect to login
    }
    return Promise.reject(error);
  }
);

export default API;
