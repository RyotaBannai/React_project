import {combineReducers} from "redux";
import user from './userReducer'
import fetched_user from './fetchUserReducer'

const reducers = {
    user,
    fetched_user,
};
export default combineReducers(reducers);





