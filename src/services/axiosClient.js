import axios from 'axios';

import { localStorageService } from './localStorageService';

export const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzExMDQwMDAwMCIsIm5iZiI6MTY0ODQwMDQwMCwiZXhwIjoxNjc3MjU4MDAwfQ.0byoDjBIIS6877xg7NwEnO16v5HOltI9AatD9OLB0Ys';
export const https = axios.create({
  baseURL: 'https://airbnbnew.cybersoft.edu.vn',
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: 'Bearer ' + localStorageService.get('USER')?.Token,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// https.interceptors.request.use(
//   (config) => {
//     const token = JSON.parse(window.localStorage.getItem('accessToken'));
//     const auth = token ? `Bearer ${token}` : '';
//     config.headers.common['Authorization'] = auth;
//     s
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// https.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (error) => {
//     throw error;
//   }
// );
