import React, { Component } from 'react';

class NewTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            newChore : ''
        }
    }

    changeHandler = (e) => {
        this.setState({newChore: e})
    }

    clickHandler = () => {
        this.props.addChore (this.state.newChore)
        this.setState({newChore: ''})
        // console.log("button function")
    }

    render() {
        return (
            <div>
                <h1>My Todo List</h1>
                <input placeholder =  'insert a new chore' 
                onChange = {(e)=> this.changeHandler(e.target.value)} 
                value = {this.state.newChore} />
                <button onClick = {()=> this.clickHandler()} >Press here</button>
            </div>
        );
    }
}

export default NewTask;