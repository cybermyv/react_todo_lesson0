import React from 'react';

export default class AddTodo extends React.Component {

        render() {
            return ( <div>
                <label> Добавить элемент </label> <
                input ref = "createInput" / >
                <button onClick = { this.addTodo } > Добавить </button>  
                </div>
            );
        }
        addTodo = () => {

            console.log(this.refs.createInput.value);
            
            this.props.setNewTodoValue(this.refs.createInput.value);
        }
    } // class