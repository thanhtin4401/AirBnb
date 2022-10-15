import { combineReducers } from 'redux';
import listRoomReducer from './roomList';
import listLocationReducer from './roomLocation';
const roomReducer = combineReducers({
  listRoom: listRoomReducer,
  listLocation: listLocationReducer,
});
export default roomReducer;
