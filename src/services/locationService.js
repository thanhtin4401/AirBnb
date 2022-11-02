import { https } from './axiosClient';

export let locationService = {
  getLocationList: () => {
    return https.get(`/api/vi-tri`);
  },
  getLocation: (id) => {
    return https.get(`/api/vi-tri/${id}`);
  },
  SearchLocation: (keyword) => {
    return https.get(`api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=1&keyword=${keyword}`);
  },
  putLocation: (idLocation, location) => {
    return https.put(`api/vi-tri/${idLocation}`, location);
  },
  uploadAnhLocation: (formData) => {
    return https.post(`api/vi-tri/upload-hinh-vitri`, formData);
  },
  deleteLocation: (idLocation) => {
    return https.delete(`api/vi-tri/${idLocation}`);
  },
  putLocation: (locationId, data) => {
    return https.put(`/api/vi-tri/${locationId}`, data);
  },
  postLocation: (data) => {
    return https.post(`/api/vi-tri`, data);
  },
  uploadImgLocation: (locationId, formData) => {
    return https.post(`/api/vi-tri/upload-hinh-vitri?maViTri=${locationId}`, formData);
  },
};
