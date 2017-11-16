import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './add-todo';
import ItemTodo from './item-todo';
import TodoHeader from './todo-header';

import styles from './main.css';

class Todo extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       list: [],
     };
   }

  // state = {
  //   list: [],
  // };

  setNewTodoValue = value => {
    this.setState(({ list }) => ({
      list: [
        ...list,
        {
          id: Math.floor(Math.random() * 1000000),
          title: value,
          finished: false,
        },
      ],
    }));

    console.log(this);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
           <li key={item.id} >
            < ItemTodo item={item}/>
            </li> 
          ))}
          
        </ul>
        <AddTodo  setNewTodoValue={this.setNewTodoValue}/>
      </div>
    )
  }
}


ReactDOM.render(<Todo list={[]} />, document.getElementById('root'));
