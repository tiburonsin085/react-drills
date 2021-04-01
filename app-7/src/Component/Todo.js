import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.chore}</h1>
            </div>
        );
    }
}

export default Todo;