import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import axios from "axios";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Add from "./pages/AddArticle";

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
            state = {...state, name: action.payload};
            break;
        case "CHANGE_AGE":
            state = {...state, age: action.payload};
            break;
        case "ERR":
            throw new Error("It's error!!!!");
    }
    return state;
};

const fetchUserReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_USERS_START":
            break;
        case "FETCH_USERS_ERROR":
            break;
        case "RECEIVE_USERS":
            state = state.concat(action.payload);
            break;
    }
    return state;
};

const tweetsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TWEET":
            state = state.concat({id: Date.now(), text: action.payload});
    }
    return state;
};
// const _logger = (store) => (next) => (action) => {
//     //console.log("action fired", action);
//     console.log(action);
//     next(action); // laravel の middlewareと同じ原理 payloadも変更できる
// };
// const _error = (store) => (next) => (action) => {
//     try{
//         next(action);
//     } catch (e) {
//         console.log("Error was occured", e);
//     }
// };
// const middleware = applyMiddleware(_logger, _error);

const middleware = applyMiddleware(thunk, createLogger());
const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
    fetched_user: fetchUserReducer,
});

let initialState = { user: { name: "Anonymous", age: 0 }, tweets: [], fetched_user:[] };
const store = createStore(reducers, initialState, middleware);
store.subscribe(() => {
    //console.log("store changed", store.getState());
});

store.dispatch((dispatch) => {
    dispatch({type: "CHANGE_NAME", payload: 'Mike'});
    dispatch({type: "ADD_TWEET", payload: 'calling tweets reducer!'});
    // dispatch({type: "ERR", payload: 'new tweets!'});

    dispatch({type: "FETCH_USERS_START"});
    axios.get("http://localhost:18080").then((response) => {
        dispatch({type: "RECEIVE_USERS", payload: response.data});
    }).catch((err) => {
        dispatch({type: "FETCH_USERS_ERROR", payload: err});
    });
});


const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Featured} />
            <Route exact path="/archives/" component={Archives} />
            <Route exact path="/archives/:article" component={Archives} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/add" component={Add} />
        </Layout>
    </Router>,
    app);

