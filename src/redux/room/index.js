import { combineReducers } from 'redux';
import listRoomReducer from './roomList';
import listLocationReducer from './roomLocation';
import bookingRoomReducer from './roomBooking';
const roomReducer = combineReducers({
  listRoom: listRoomReducer,
  listLocation: listLocationReducer,
  bookingRoom: bookingRoomReducer,
});
export default roomReducer;
