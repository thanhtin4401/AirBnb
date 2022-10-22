import { combineReducers } from 'redux';
import userSlice from './user';
const managerReducer = combineReducers({
  user: userSlice,
});
export default managerReducer;
