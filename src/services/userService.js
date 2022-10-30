import { https } from './axiosClient';

export let userService = {
  getUser: (idUser) => {
    return https.get(`/api/users/${idUser}`);
  },
  putUser: (idUser, user) => {
    return https.put(`/api/users/${idUser}`, user);
  },
  uploadAvt: (formData) => {
    return https.post(`/api/users/upload-avatar`, formData);
  },
  deleteUser: (idUser) => {
    return https.delete(`/api/users/${idUser}`);
  },
  searchUser: (TenNguoiDung) => {
    return https.get(`/api/users/search/${TenNguoiDung}`);
  },
};
