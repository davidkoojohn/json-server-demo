import http from './http';

export default {
  todo: {
    get({}) {
      return http.get(`/todo`);
    },
    getItem({id}) {
      return http.get(`/todo/${id}`);
    },
    create({data}) {
      return http.post(`/todo`, data);
    },
    edit({data, id}) {
      return http.put(`/todo/${id}`, {
        ...data
      });
    },
    del({id}) {
      return http.delete(`/todo/${id}`);
    },
  }
}