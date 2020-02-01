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
  }
  
  componentDidMount() {
    
    //emitで発動されたchangeを受け取って、viewに反映している部分.
     TodoStore.on("change", () => {
       this.setState({
         todos: TodoStore.getAll()
       });
     });
   }
   
   createTodo() {
       TodoActions.createTodo("New Todo");
   }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

