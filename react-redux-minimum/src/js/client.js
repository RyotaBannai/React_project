import { combineReducers, createStore } from "redux";

//データの初期値を それぞれ{}, []とする.
const userReducer = (state = {}, action) => {
  switch(action.type) {
      case "CHANGE_NAME":
        //state.name = action.payload;
        state = {...state, name: action.payload}
        break;
      case "CHANGE_AGE":
        //state.age = action.payload;
        state = {...state, age: action.payload}
        break;
    }
  return state;
}

const tweetsReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TWEET":
       state = state.concat({id: Date.now(), text: action.payload});
       break;
  }
  return state;
}

/*
  userReducer, tweetsReducer の2 つはdispatch  が行われるたびに、シーケンシャルに呼ばれる.
*/
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});


//const store = createStore(reducers, { user: { name: "Tsutomu", age: 35 }, twiits: [] });
const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
});
//store.dispatch({type: "FOO", payload: "BAR"})
store.dispatch({type: "CHANGE_NAME", payload: "Tsutomu"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
/*

  これは1 回目のuserReducer でreturn しているオブジェクトと2 回目のuserReducer でreturn しているオブジェクトが完全に同一のオブジェクトであるため、かつJavaScript の非同期性の特性からstore.subscribe 内にあるconsole.log が呼ばれる時点で、user とage が既に設定されてしまっている、完全に同じオブジェクトを出力してしまうわけです。
  
  1回目：state1のnameを変更し、変化後のstate1をreturn.
  2回目：state1のageを変更し、変化後のstate1をreturn.
 =>結果として、cosole.logでcallしたときにはstate1のデータが全部更新された状態のものが表示される.
  immutableな方法で行う =>
  1回目：state1のnameを変更し、変化後のstate1をreturn.
  2回目：state2のageを変更し(state2を作成しstate1を上書きする.)、
        変化後のstate1をreturn.

*/

store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"});
store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"});