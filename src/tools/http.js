import axios from 'axios';

export const baseURL = 'http://localhost:3000';

let http = axios.create({
  baseURL,
  timeout: 60 * 5 * 1e3,
});

http.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject({
      message: error.response.message || '服务器内部错误',
    });
  },
);

export default http;
