import { combineReducers } from 'redux';
import signinReducer from './signinReducer';
import userReducer from './userReducer';

export default combineReducers({
    userData: userReducer,
    signinData: signinReducer
});
