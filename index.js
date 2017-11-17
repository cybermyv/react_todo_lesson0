import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';  
import TodoHeader from './components/todo-header';

import styles from './main.css';
import ListTofdo from './components/list-todo';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list || [],
    };
  }

  finishedTodo = (id) =>{
      this.setState(({list})=>({
          list : list.map(item=>{
            item.id===id? {...item, finished:true}:{}
          })
      }));
  }; //finishedTodo 

  // componentDidUpadate = () => {
  //   console.log('parent state', this.state.list);
  // };

  setNewTodoValue = value => {
    this.setState(
      ({ list }) => ({
        list: [
          ...list,
          {
            id: Math.floor(Math.random() * 1000000),
            title: value,
            finished: false,
          },
        ],
      }),
      () => {
        console.log('после добавления ', this.state.list);
      }
    );
  };

  // filterDone = () => {
  //   this.setState(
  //     ({ list }) => ({
  //       list: ItemTodo.item.filter(item => {
  //         console.log(item);
  //         return item.finished === true;
  //       }),
  //     }),
  //     () => {
  //       console.log('после фильтрации ', this.state.list);
  //     }
  //   );
  // };

  render() {
    const {list} = this.state;
    return (
      <div>
        
        <ListTodo items={list} onToggle={this.finishedTodo}/>


        <AddTodo setNewTodoValue={this.setNewTodoValue} />
      </div>
    );
  }
}

ReactDOM.render(<Todo list={[]} />, document.getElementById('root'));

// <ul>
// {this.state.list.map(item => (
//   <li key={item.id}>
//     {' '}
//     <ItemTodo item={item} />
//   </li>
// ))}
// </ul>

// <button onClick={this.filterDone}>Завершенные</button>
// <button>В работе</button>
// <button>Все</button>