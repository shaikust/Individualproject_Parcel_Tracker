import { combineReducers } from 'redux';
import addParcelReducer from './addparcel';
import commonReducer from './common';
import loginReducer from './login';
import parcelReducer from './parcel';
import userReducer from './user';
import viewReducer from './view';

const RootReducer: any = combineReducers({
    common: commonReducer,
    user:userReducer,
    login:loginReducer,
    view:viewReducer,
    parcel:parcelReducer,
    addparcel:addParcelReducer
});

export default RootReducer;
