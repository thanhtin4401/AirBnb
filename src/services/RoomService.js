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
  bookingRoom: (data) => {
    return https.post('/api/dat-phong', data);
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

  deleteRoom: (roomId) => {
    return https.delete(`api/phong-thue/${roomId}`);
  },
  putRoom: (roomId, data) => {
    return https.put(`/api/phong-thue/${roomId}`, data);
  },
  postRoom: (data) => {
    return https.post(`/api/phong-thue`, data);
  },
  uploadImgRoom: (roomId, formData) => {
    return https.post(`/api/phong-thue/upload-hinh-phong?maPhong=${roomId}`, formData);
  },
};
