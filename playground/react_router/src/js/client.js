import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import store from './store'
import actions from './actions'

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Add from "./pages/AddArticle";

store.subscribe(() => {
    //console.log("store changed", store.getState());
});

store.dispatch((dispatch) => {
    axios.get("http://localhost:18080").then((response) => {
        dispatch(actions.fetch_user.getUser(response.data));
    }).catch((err) => {
        dispatch(actions.fetch_user.threwError(err));
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

