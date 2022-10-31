import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
const initialState = {
  allLocation: [],
  isfetching: false,
  content: {},
  isDeleteSuccess: false,
  isUpdateSuccess: false,
};
export const getLocationList = createAsyncThunk('location/list', async () => {
  try {
    const res = await https.get('/api/vi-tri');
    console.log('res', res);
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const pushLocation = createAsyncThunk('location/push', async (data) => {
  try {
    const res = await https.post('/api/vi-tri', data);
    console.log('res', res);
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const deleteLocation = createAsyncThunk('location/delete', async (id) => {
  try {
    const res = await https.post(`/api/vi-tri/id=${id}`);
    console.log('res', res);
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allLocation: [],
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getLocationList.pending, (state) => {
        return {
          ...state,
          allLocation: null,
          isfetching: true,
        };
      })
      .addCase(getLocationList.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allLocation: payload?.content,
        };
      })
      .addCase(deleteLocation.pending, (state) => {
        return {
          ...state,
          isfetching: true,
        };
      })
      .addCase(deleteLocation.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          content: payload.data.content,
        };
      });
  },
});

export const { reset } = locationSlice.actions;
export default locationSlice.reducer;
