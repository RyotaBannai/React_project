import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContext, appState } from './context/AppContext';

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Add from "./pages/AddArticle";

const app = document.getElementById('app');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = appState(this);
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Router>
                    <Layout>
                        <Route exact path="/" component={Featured}/>
                        <Route exact path="/archives/" component={Archives}/>
                        <Route exact path="/archives/:article" component={Archives}/>
                        <Route exact path="/settings" component={Settings}/>
                        <Route exact path="/add" component={Add}/>
                    </Layout>
                </Router>
            </AppContext.Provider>
        )
    }
}
ReactDOM.render(<App />, app);

