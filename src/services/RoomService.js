import { https } from "./axiosClient"

export let roomService = {
    getRoomLocation : (id) => { 
        return https.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
     },
     getOderRoom : () => { 
        return https.get(`/api/dat-phong`);
      }

}