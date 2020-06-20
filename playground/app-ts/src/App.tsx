import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Template } from './templates/Template'
import { Main } from "./pages/Main";
import { Provider } from "react-redux";
import {store} from './organisms/Count001'

function App() {
  return (
      <Provider store={store}>
            <div className="App">
                <Router>
                    <Template>
                        <Route exact path="/" component={ Main } />
                    </Template>
                </Router>

            </div>
      </Provider>
  );
}

export default App;
