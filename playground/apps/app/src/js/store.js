import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createPromise } from 'redux-promise-middleware';
import reducers from './reducers'

/*
* Custom Middleware
* */
// const _logger = (store) => (next) => (action) => {
//     //console.log("action fired", action);
//     console.log(action);
//     next(action); // laravel の middlewareと同じ原理 payloadも変更できる
// };
// const _error = (store) => (next) => (action) => {
//     try{
//         next(action);
//     } catch (e) {
//         console.log("Error was occurred", e);
//     }
// };
// const middleware = applyMiddleware(_logger, _error);

const middleware = applyMiddleware(thunk, createLogger());
//const middleware = applyMiddleware(thunk);
export default createStore(reducers, middleware);