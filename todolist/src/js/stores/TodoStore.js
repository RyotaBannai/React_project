import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

/*
  Store の役割: Store が保持しているデータに変更が合った場合に
  Viewに対してそれを直ちに送る機能持つ.
  その機能を実現するためにEventEmitter を使ってStore を作成.
*/

class TodoStore extends EventEmitter{
  constructor() {
      super();
      
      //初期のデータはコンポーネントクラスに置くのではなく、storeに置く.
      //Componentはstoreからデータを読み取るようにする.
      this.todos = [
        {
          id: 113464613,
          text: "Go Shopping",
          complete: false
        },
        {
          id: 235684679,
          text: "Pay Water Bills",
          complete: false
        }
      ];
    }
    //todoを作成するmethodもstoreに作成.
    //createTodo methods が呼ばれるとchange イベントを発動し、イベント駆動形でTodo.js (View) の処理を呼び出す.
    createTodo(text) {
        const id = Date.now();
    
        this.todos.push({
          id,
          text,
          complete: false
        });
        //storeに変化があれば、最終段階のviewにその変化を反映させる.
        //そのために on("change")で受け取る
        this.emit("change");
      }
  
    getAll() {
      return this.todos;
    }
    
    /*handleActions に渡ってきたデータをaction type 毎に処理をハンドリングするように条件分岐を書く。*/
    handleActions(action) {
      switch(action.type) {
            case "CREATE_TODO": {
              this.createTodo(action.text);
            }
          }
      }
}

const todoStore = new TodoStore;

/*
  コンソールから呼び出し: debug のためにtodoStore  メソッドがグローバルスコープで呼び出せるように window.todoStore にTodoStore インスタンスを格納する.
*/
//window.todoStore = todoStore;


/*
  dispatcher では主に使うメソッド:
  ・dispatcher.register: 新たにListener を追加
  ・dispatcher.dispatch: Action に対してデータを創出
*/

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;

/*
  状態管理をするStore はそれぞれシングルトンパターンとなるように作成する.
  シングルトンな構成とするために、const todoStore = new TodoStore; 
  とインスタンスを作成してから、そのインスタンスをexport.
*/