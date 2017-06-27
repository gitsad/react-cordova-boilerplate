import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import oneLevelReducer from '../modules/one-level/reducer';

export default combineReducers({
    routing: routerReducer,
    oneLevelReducer
});
