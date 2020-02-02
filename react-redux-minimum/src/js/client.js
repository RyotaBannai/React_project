import { applyMiddleware, createStore } from "redux";

const reducer = (state=0, action) => {
  console.log("reducer has been called.");
  switch(action.type){
  case "INC":
    //return state + 1;
    state += action.payload;
    break;
  case "DEC":
    state -= action.payload;
    break;
  case "ERR":
    throw new Error("It's error!!!!");
    }
  return state;
}

//middlewareを利用
//applyMiddleware 関数の引数に関数を渡すと、引数として渡された関数がmiddleware としてRedux に認識されるようになる.
/*
Redux を使っているとreducer を呼ぶ前に処理を幾つか追加したいことがある.
・REST API で動いているバックエンドから、reducer で処理するためのJSON データを取得.
・reducer の処理に入る前後にログを出力.
*/

/*
  dispatch された後, これまでのサンプルではreducer が呼ばれていましたがmiddleware を使う場合はmiddleware (今回の例ではlogger 関数)が呼ばれた後に,
reducer が呼ばれるように, 処理の最後にnext(action); を追加する.
*/
const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}

const error = (store) => (next) => (action) => {
  try{
    next(action);
  } catch (e) {
    console.log("Error was occured", e);
  }
}

//複数のmiddleware を設定する.
const middleware = applyMiddleware(logger, error);

//createStore にはReducer とデータの初期値を渡す.
//この段階ではReducer は初期値を設定するために呼ばれる.
/*
  一般的にデータの初期値はObjectが使われるが、
  シンプルにするため、プリミティブ型(int)を使う.
*/
/*
  複数のreducer が単一のstore に対して処理を行うことも可能.
*/
const store = createStore(reducer, 1, middleware);


//subscribe はstoreに変化があったときにcallされる.
store.subscribe(() => {
  console.log("store changed", store.getState());
});
//dispatchはactionを感知し、storeに変化を送る.
//store.dispatch({type: "INC"});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 20});
//dispatch するところでも同様にReducer が呼ばれる.
//Action に追加のデータを入れてあげればReducer でもそのデータを扱えるようになる.
// action -> dispatch -> subscribe.

store.dispatch({type: "ERR"});