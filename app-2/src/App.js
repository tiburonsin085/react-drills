import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import ListOfArrays  from './Components/list'

class App extends Component{
  constructor(){
    super()
    this.state = {
      arr: ['apple','orange','soda','bread']
    }
  }

  render(){
    let arrOutput = this.state.arr.map((el,index) => {
      return <h2 key = {index}>{el}</h2>
    })
    console.log(arrOutput)
    return(
      <div className = "App">{arrOutput}</div>
    )
  }
}





export default App;
