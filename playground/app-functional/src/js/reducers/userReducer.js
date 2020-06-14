import { handleActions } from 'redux-actions';
import actions from '../actions/userAction'

const {changeName, changeAge} = actions;
let initialState = [
    { name: "Anonymous", age: 0 },
];
export default handleActions({
    [changeName]: () => ({...state, name: action.payload}),
    [changeAge]: (state, action) => ({...state, age: action.payload})
},
    initialState
);