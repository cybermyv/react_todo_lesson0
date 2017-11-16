import React from 'react';

export default class AddTodo extends React.Component {
  state = { 
      value: '', 
    };

  addTodo = () => {
    this.props.setNewTodoValue(this.state.value);
 //  console.log(this.state.value);
    this.setState({value: '' });

 
  };

  handleInput = event => {
    this.setState({ value: event.target.value });
   // console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInput} value={this.state.value} />
        <button onClick={this.addTodo}>Добавить</button>
      </div>
    );
  }
}
