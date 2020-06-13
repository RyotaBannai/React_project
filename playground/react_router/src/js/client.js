import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Add from "./pages/AddArticle";


const reducer = (state = 0, action) => {
    switch(action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
    }
};

const store = createStore(reducer, 1);
store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});

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

