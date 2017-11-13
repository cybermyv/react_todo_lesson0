import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './add-todo';
import ItemTodo from './item-todo';
import TodoHeader from './todo-header';
import CounterTodo from './counter-todo';

import styles from './main.css'




class Todo extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
       list: [],
       maxUnfinishedTasks: '5'     
     }

     
  }

  

  // componentDidMount= ()=> {
  //   if (this.state.list.length === 0) {
  //     this.setState({
  //       list: this.props.list,
  //     })
  //   }
  // }

  
  
  // setItemFinished = (id)=>  {
  //   this.setState(({ list }) => ({
  //     list: list.map((item) => {
  //       const newItem = item.id === id
  //         ? Object.assign({}, item, { finished: true })
  //         : item
  //       return newItem
  //     })
  //   }))
  // }
  
  setNewTodoValue = (value)=> {
    this.state.list.push({
      id: Math.floor(Math.random() * 1000000),
      title: value,
      finished: false 
    });

    this.setState({list : this.state.list});

    };


 componentDidUpdate = () =>{
    
let allTask = this.state.list.length; //-- всего задач

//-- только активные
let activeTask = allTask.filter((item)=>{
  return item.finished === false
}).length

//-- в консоль
console.log('Всего = ', allTask);
console.log('Активные = ', activeTask);
console.log('Выполненные = ', activeTask);
 }//-- после того как компонент обновился - будем обновлять счетчики 

  render() {
    return (
      <div>
        <TodoHeader />
        <ul>
         <ItemTodo list = {this.state.list} />
        </ul>
           <AddTodo setNewTodoValue = {this.setNewTodoValue.bind(this)} />
           <CounterTodo />
      </div>
      )
  }
}

ReactDOM.render(
  <Todo list = {[]} />,
  document.getElementById('root'),
)

// list={[
//   { id: 1, title: 'Дело1', finished: false },
//   { id: 2, title: 'Дело2', finished: true },
//   { id: 3, title: 'Дело3', finished: false },
//↻
// ]}