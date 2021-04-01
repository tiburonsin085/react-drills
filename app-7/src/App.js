import React, { Component } from 'react';
import NewTask from './Component/NewTask'
import List from './Component/List'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      
    }
  }

 addChore = (newChore) =>  {
   const newList = [...this.state.list,newChore]
  this.setState({list: newList})
 }


  render() {
    // console.log(this.state.list)
    return (
      <div className="App">
        <NewTask addChore = {this.addChore} />
        <List list = {this.state.list}/>
     
      </div>

    );
  }
}

export default App;