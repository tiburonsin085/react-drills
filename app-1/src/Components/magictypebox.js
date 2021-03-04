import React, {Component} from 'react'
class MagicBox extends Component {
    constructor(){
        super()
        this.state = {
            userInput : '',
            
        }
 
    }

    handleChange(value){
        this.setState({userInput : value})
    }


  


    render(){
        return(
            <div>
                <input onChange = {(e)=>this.handleChange(e.target.value)} />
                <br/>
                <span>{JSON.stringify(this.state.userInput,null,10)}</span>
            </div>
        )
    }
}

export default MagicBox