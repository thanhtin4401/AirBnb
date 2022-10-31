import { combineReducers } from 'redux';
import userSlice from './user';
import roomSlice from './room';
import locationSlice from './location';
const managerReducer = combineReducers({
  user: userSlice,
  room: roomSlice,
  location: locationSlice,
});
export default managerReducer;
