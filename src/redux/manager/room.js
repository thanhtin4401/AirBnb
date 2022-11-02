import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
const initialState = {
  allRoom: [],
  isfetching: false,
  content: {},
  isDeleteSuccess: false,
  isUpdateSuccess: false,
};
export const getRoomList = createAsyncThunk('room/list', async () => {
  try {
    const res = await https.get('/api/phong-thue');

    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const pushRoom = createAsyncThunk('room/push', async (data) => {
  try {
    const res = await https.post('/api/phong-thue', data);

    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const getSearchRoom = createAsyncThunk('room/search', async (keyword) => {
  try {
    const res = await https.get(
      `api/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=1&keyword=${keyword}`
    );
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
// export const deleteRoom = createAsyncThunk('room/delete', async (id) => {
//   try {
//     const res = await https.post(`api/phong-thue/${id}`);
//     message.success('delete success');
//     console.log('res', res);
//     return res;
//   } catch (error) {
//     message.error(error.response.data.message);
//   }
// });
const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allRoom: [],
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getRoomList.pending, (state) => {
        return {
          ...state,
          allRoom: null,
          isfetching: true,
        };
      })
      .addCase(getRoomList.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allRoom: payload?.content,
        };
      });
    // .addCase(deleteRoom.pending, (state) => {
    //   return {
    //     ...state,
    //     isfetching: true,
    //   };
    // })
    // .addCase(deleteRoom.fulfilled, (state, { payload }) => {
    //   return {
    //     ...state,
    //     isfetching: false,
    //     isDeleteSuccess: true,
    //   };
    // });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
