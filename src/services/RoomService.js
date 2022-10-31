import { https } from './axiosClient';

export let roomService = {
  getRoomLocation: (id) => {
    return https.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`);
  },
  getOderRoom: () => {
    return https.get(`/api/dat-phong`);
  },
  getOderRoomById: (idUser) => {
    return https.get(`/api/dat-phong/lay-theo-nguoi-dung/${idUser}`);
  },
  deleteOrderRoom: (idRoom) => {
    return https.delete(`/api/dat-phong/${idRoom}`);
  },
  getRoomList: () => {
    return https.get(`api/phong-thue`);
  },
  getsearchRoom: (tenPhong) => {
    return https.get(
      `api/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=1&keyword=${tenPhong}`
    );
  },
  deleteRoom: (id) => {
    return https.delete(`api/phong-thue/${id}`);
  },
};
