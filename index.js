import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./add-todo";
import ItemTodo from "./item-todo";
import TodoHeader from "./todo-header";

import styles from "./main.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  setNewTodoValue = value => {
    // COMMENT: push мутирует значение
    // BEFORE:
    // this.state.list.push({
    //   id: Math.floor(Math.random() * 1000000),
    //   title: value,
    //   finished: false
    // });
    // this.setState({list : this.state.list});
    // AFTER:
    this.setState(({ list }) => ({
      list: [...list, {
        id: Math.floor(Math.random() * 1000000),
        title: value,
        finished: false,
      }]
    }));
  };

  render() {
    return (
      <div>
        <TodoHeader />
        <ul>
          <ItemTodo list={this.state.list} />
        </ul>
        {/*
          COMMENT: bind лучше не использовать - каждый раз создаётся новый экземпляр функии
            к тому же в данном случае bind излишний - у стрелочной функции всё равно нет своего this
            он привязывается к ближайшему контексту, в нашем случае - к контексту компонента
          BEFORE:
          <AddTodo setNewTodoValue={this.setNewTodoValue.bind(this)} />
        */}
        <AddTodo setNewTodoValue={this.setNewTodoValue} />
      </div>
    );
  }
}

ReactDOM.render(<Todo list={[]} />, document.getElementById("root"));
