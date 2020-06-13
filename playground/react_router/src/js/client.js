import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store'
import { Provider } from "react-redux";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Add from "./pages/AddArticle";

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout>
                <Route exact path="/" component={Featured} />
                <Route exact path="/archives/" component={Archives} />
                <Route exact path="/archives/:article" component={Archives} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/user" component={User} />
            </Layout>
        </Router>
    </Provider>,
    app);

