import { observable, computed, autorun } from "mobx";

//Todo オブジェクト
class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}

//MobXのstoreはコンポネントベース.

class TodoStore {
  /*
    クラスの「メンバ変数」としてtodos を作成する.
    その変数はobservable として宣言し, observer の監視対象として設定することができる.
  */
  //@observable todos = ["buy milk", "buy eggs"];
  @observable todos = [];
  @observable filter = "";
  /*
    (console.logの出力結果)store.filter は一見すると、単なるString なデータ型に見えるが, これはES6 のobservable の記法でsetter とgetter が利用されているため、setter による状態変化をリアルタイムに検知することができるようになっている.
  */
  @computed get filteredTodos() {
      var matchesFilter = new RegExp(this.filter, "i");
      // リアルタイムでfilterに値があれば,
      // ||の右側の予め作っておいたRexExpのロジックで判別する.
      /*
        Redux と同様にtodos (state) を変更する時はimmutable を意識して新しいArray オブジェクトを作成して値を変更する.
      */
      return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
    }
    /*
      @computed デコレータを使って作成されたメソッド内で値を算出したら, filter  を通過したものがあった場合のみ必要に応じて処理を起動(lazy load) してstate を変更、画面描写することができるようになっている.
    */
  createTodo(value) {
    //this.todos.push(value);
    this.todos.push(new Todo(value));
  }
  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete);
    this.todos.replace(incompleteTodos);
  }
}

var store = window.store = new TodoStore();

export default store;

/*
  実際に状態が遷移しているのを確認したい場合はautorun 関数を使用してState が変更されたタイミングをトリガーにリアルタイムに処理を走らせ,
その中にconsole.log() 関数で内容を出力させることができる.
*/

/*
autorun (()=>{
  console.log(store.filter);
  console.log(store.todos[0])
});
*/