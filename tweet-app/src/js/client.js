import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import store from "./store";

const app = document.getElementById('app');

/*
  トップレベルコンポーネントをRedux コンポーネントでwrap する.
  Store とReact を結びつけるためにstore をimport してProvider コンポーネントのprops として定義.
   -> React とRedux は接続されている状態.すなわち、様々なcomponent からstore が変更されたことを検知して随時画面をレンダリングする準備ができている状態.
*/
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>, app);
