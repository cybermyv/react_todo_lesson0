import React from 'react';

export default class AddTodo extends React.Component {
    state = {
        value: '',
    }

    addTodo = () => {
        this.props.setNewTodoValue(this.state.value);
        
        this.setState({ value: '' })
    }

    handleInput = (event) => this.setState({ value: event.target.value })

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
                <input onChange={this.handleInput} value={this.state.value} />
                <button onClick={this.addTodo}>
                    Добавить
                </button>  
            </div>
        );
    }
}
    // class