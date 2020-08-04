import React from "react";
import { observer } from "mobx-react";

/*
  observer デコレータをンポーネントに追加.
  -> store に対して、React のrender メソッド内からアクセスできるようになる.
*/

@observer
export default class TodoList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }
  toggleComplete(todo) {
    /*
他の書き方として各チェックボックスにid 属性を付与して, onChange の関数に対してid を渡し、そのidを使ってチェックボックス要素を反転させるやり方もあるが,このように要素自体を関数の引数として渡すやり方もある.
    */
    todo.complete = !todo.complete;
  }
  render() {
  {/*return <h1>{this.props.store.todos[0]}</h1>;*/}
      const { filter, filteredTodos, todos, clearComplete } = this.props.store;
  
      const todoList = filteredTodos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />{todo.value}
        q</li>
      ));
      return <div>
        <h1>todos</h1>
        <input className="create" onKeyPress={this.createNew.bind(this)} />
        <input className="filter" value={filter} onChange={this.filter.bind(this)} />
        <ul>{todoList}</ul>
    <a href="#" onClick={clearComplete}>Clear Complete</a>{/*todo を削除するためのアンカー(リンク)*/}
      </div>;
    };
}
