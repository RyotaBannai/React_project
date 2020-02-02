import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import axios from "axios";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, fetching: true};
    case "FETCH_USERS_REJECTED":
      return {...state, fetching :false, error: action.payload};
    case "FETCH_USERS_FULFILLED":
      return {
         ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    }
  return state;
};

//const middleware = applyMiddleware(createLogger());
//  |
//  v
const middleware = applyMiddleware(promise, createLogger());

const store = createStore(reducer, middleware);


//dispatcher は単純なObject が渡されることを期待していて、
//関数が渡されることを期待していない.
//store.dispatch({type: "FOO"});
/*
  store.dispath内に複数のdispatchの処理を渡したいときはredux-thunkを利用.
*/

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://localhost:18080")
})