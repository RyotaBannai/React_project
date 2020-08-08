import React from "react";
import { AppRoute } from "./Routes";
import { Provider } from "react-redux";
import { setupStore } from "./store";

import "./App.css";

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
