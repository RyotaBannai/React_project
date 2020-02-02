import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component {
  constructor() {
    super();
    //storeからデータを取得.
    this.state = {
      todos: TodoStore.getAll(),
    };
    this.getTodos = this.getTodos.bind(this)
  }
  
  componentDidMount() {
    
    //emitで発動されたchangeを受け取って、viewに反映している部分.
     TodoStore.on("change", this.getTodos);
     console.log("count", TodoStore.listenerCount("change"));
   }
   
   //メモリーリークが起こるので、セットしたイベントリスナーはコンポネントのunmount時
   //に解放する.
   componentWillUnmount() {
      TodoStore.removeListener("change", this.getTodos);
    }
    
    getTodos(){
      this.setState({
        todos: TodoStore.getAll()
      });
    }
    /*
     flux で非同期処理を扱う:
     Create ボタンを変更して、Todo リストをReload
     するボタンを実装し、インターネット経由でTodoリストを取得するアプリ作成.
   */
   /*
   createTodo() {
      TodoActions.createTodo("New Todo");
   }
   */
   reloadTodos(){
      TodoActions.reloadTodo();
   }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        {/*<button onClick={this.createTodo.bind(this)}>Create!</button>*/}
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

