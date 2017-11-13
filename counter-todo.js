import React from 'react';

export default class CounterTodo extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
                allCount : '0',
                activeCount : '0',
                doneCount: '0'
        }
    }

        render() {
            return ( <div>
                        <p>Всего заданий - {this.state.allCount}</p>
                        <p>Активных заданий - {this.state.activeCount}</p>
                        <p>Активных заданий - {this.state.doneCount}</p>
                     </div>
            );
        }
        
    }
    // class