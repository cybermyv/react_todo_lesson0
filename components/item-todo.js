import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemTodo extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    onToggle: PropTypes.func,
  }; // types

  // state = {
  //   item: this.props.item,
  // };

  // setItemFinished = id => {
  //   this.setState(
  //     ({ item }) => ({
  //       item: { ...item, finished: !item.finished },
  //     })
  //   );
  // };

  // componentDidUpdate = () => {
  //   console.log('componentDidUpdate', this.state.item);
  // };

  render() {
    const { item, onToggle } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <div
          style={{ textDecoration: item.finished ? 'line-through' : 'none' }}
        >
          {item.id} - {item.title}
        </div>
        <div style={{ cursor: 'pointer' }} onClick={onToggle}>
          {item.finished ? ' | Вернуть' : ' | Завершить'}
        </div>
      </div>
    );
  }
} //class

//onClick={onToggle}