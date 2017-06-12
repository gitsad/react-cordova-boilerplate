import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import todos from '../modules/todo-app/reducer';
import credentials from './credentials.js';


export default combineReducers({
  routing: routerReducer,
  todos,
  credentials
});
