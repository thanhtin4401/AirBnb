import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  allComment: [],
  isfetching: false,
};

export const getCommentUser = createAsyncThunk('user/comment-list', async () => {
  try {
    const res = await https.get('/api/phong-thue');
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

const listCommentSlice = createSlice({
  name: 'user/list',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allComment: [],
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getCommentUser.pending, (state) => {
        return {
          ...state,
          allComment: null,
          isfetching: true,
        };
      })
      .addCase(getCommentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allComment: payload.content,
        };
      });
  },
});

export const { reset } = listCommentSlice.actions;
export default listCommentSlice.reducer;
