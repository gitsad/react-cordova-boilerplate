import { combineReducers } from 'redux';
import todos from '../modules/todo-app/reducer';
import credentials from './credentials.js';

export default combineReducers({
  todos,
  credentials
});
