import http from './http';

export default {
  todo: {
    get({}) {
      return http.get(`/todo`);
    },
    create({data}) {
      return http.post(`/todo`, data);
    },
  }
}