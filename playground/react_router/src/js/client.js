import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";

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

const tweetsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TWEET":
              state = state.concat({id: Date.now(), text: action.payload});
          }
      return state;
};
const _logger = (store) => (next) => (action) => {
    //console.log("action fired", action);
    console.log(action);
    next(action); // laravel の middlewareと同じ原理 payloadも変更できる
};
const _error = (store) => (next) => (action) => {
    try{
        next(action);
    } catch (e) {
        console.log("Error was occured", e);
    }
};
const middleware = applyMiddleware(_logger, _error);
const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

let initialState = { user: { name: "Anonymous", age: 0 }, tweets: [] };
const store = createStore(reducers, initialState, middleware);
store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: 'Mike'});
store.dispatch({type: "CHANGE_AGE", payload: 20});
store.dispatch({type: "CHANGE_AGE", payload: 10});
store.dispatch({type: "ADD_TWEET", payload: 'calling tweets reducer!'});
store.dispatch({type: "ERR", payload: 'new tweets!'});

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

