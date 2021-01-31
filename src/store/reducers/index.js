import {combineReducers} from 'redux';
import auth from './authReducer';
import asyncStorage from './asyncReducer';

export default combineReducers({
  auth: auth,
  asyncStorage: asyncStorage,
});
