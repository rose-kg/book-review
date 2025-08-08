// utils/axiosClient.js
const axios = require('axios');

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000', // Change if your API runs elsewhere
  timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor to automatically attach JWT token
axiosClient.interceptors.request.use((config) => {
  const token = process.env.JWT_TOKEN; // Or load from a file / global var
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

module.exports = axiosClient;
