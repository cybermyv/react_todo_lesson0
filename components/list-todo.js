import React from 'react';
import PropTypes from 'prop-types';
import ItemTodo from './item-todo';

export default class ListTodo extends React.Component {
  static PropTypes = {
    items: PropTypes.array,
    onToggle: PropTypes.func,
    
  }; // types

  render() {
    const { items, onToggle } = this.props;
    console.log('list', items);
    return (
      <ul>
        {items.map(el => 
          <ItemTodo key={el.id} item={el} />
        )}
      </ul>
    ); //return
  } // render
} // class

//onToggle={() => onToggle(el.id)}