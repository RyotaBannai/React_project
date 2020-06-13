import {combineReducers} from "redux";
import tweets from './tweetReducer'
import user from './userReducer'
import fetched_user from './fetchUserReducer'

export default combineReducers({
    tweets,
    user,
    fetched_user,
});





