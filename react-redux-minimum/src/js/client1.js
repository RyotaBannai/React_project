import { createStore } from "redux";

const reducer = (state=0, action) => {
  console.log("reducer has been called.");
  switch(action.type){
  case "INC":
    //return state + 1;
    return state + action.payload;
  case "DEC":
    return state - action.payload;
  }
  return state;
}

//createStore にはReducer とデータの初期値を渡す.
//この段階ではReducer は初期値を設定するために呼ばれる.
/*
  一般的にデータの初期値はObjectが使われるが、
  シンプルにするため、プリミティブ型(int)を使う.
*/
/*
  複数のreducer が単一のstore に対して処理を行うことも可能.
*/
const store = createStore(reducer, 1);

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