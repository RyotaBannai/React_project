import React, {useState} from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Layout} from "./pages/Layout";
import {Featured} from "./pages/Featured";
import {CounterPage} from "./pages/CountPage";

const app = document.getElementById('app');

const App = _ => (
    <Router>
        <Layout>
            <Route exact path="/" component={CounterPage} />
            <Route exact path="/featured" component={Featured} />
        </Layout>
    </Router>
);
ReactDOM.render(<App />, app);

