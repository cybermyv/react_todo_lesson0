import React from 'react';

export default class AddTodo extends React.Component {
    addTodo = () => {
        console.log(this.refs.createInput.value);
        
        this.props.setNewTodoValue(this.refs.createInput.value);
    }

    // COMMENT: Каноничный подход - располагать render последним 
    render() {
        // COMMENT Советую использовать какой-нибудь автоформаттер для JSX
        return (
            <div>
                <label>
                    Добавить элемент
                </label>
                {/*
                    COMMENT: ref - специфичный момент, который мы будет разбирать позже,
                    к тому же такой вариант использования ref на данный момент deprecated
                */}
                <input ref="createInput" />
                <button onClick={this.addTodo}>
                    Добавить
                </button>  
            </div>
        );
    }
}
    // class