import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component{
  constructor(){
    super()
    this.state = {
      arr: ['apple','orange','soda','bread'],
      userInput : ''
    }
  }
  handleChange(value){
    this.setState({userInput : value})
  }

  render(){
    let filterArr = this.state.arr.filter((elem,i )=> elem.includes(this.state.userInput))
    let ouputArr = filterArr.map(e => <h2>{e}</h2>)
    return(
      <div class = "App">
          <input onChange = {(e) => this.handleChange(e.target.value)}/>
          <span>{ouputArr}</span>
      </div>
    )
  }
}

export default App;
