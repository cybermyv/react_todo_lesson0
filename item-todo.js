import React, { Component } from 'react';

export default class ItemTodo extends React.Component {
  state = {
    item: this.props.item,
  };

  setItemFinished = id => {
    this.setState(({ item }) => ({
      item: { ...item, finished: !item.finished },
    }));
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate', this.state.item);
  };

  render() {
    let item = this.state.item;
    return (
      
      <div style={item.finished ? { textDecoration: 'line-through' } : {}}>
        {item.title} - {item.title}
        
      
      
      <span
      className="btn-finish"
      onClick={() => this.setItemFinished(item.id)}
    >
    {item.finished ?  '↻' :  '✕'}
    </span>
      </div>
    );
  }
} //class

// <li
// key={item.id}
// style={item.finished ? { textDecoration: 'line-through' } : {}}
// >
// {item.title}
// </li>
