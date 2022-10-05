import axios from 'axios';
// import rootReducer from '../redux/reducer';
import { useDispatch } from 'react-redux';
import { off_loading, on_loading } from '../redux/isLoading/loadingSlice';
import { store } from '../redux/store';
// import login from '../pages/Login/Login';
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
    store.dispatch(on_loading());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(off_loading());
    return response;
  },
  function (error) {
    store.dispatch(off_loading());
    return Promise.reject(error);
  }
);
