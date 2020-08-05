import React from "react";
import { AppRoute } from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
