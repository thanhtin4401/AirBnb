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
};
