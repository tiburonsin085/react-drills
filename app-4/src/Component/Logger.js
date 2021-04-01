import React, {Component} from 'react'

class Logger extends Component{
    constructor(){
        super()
        this.state = {
            userInputLog : '',
            userInputPassword : '',
            showAlert:''

        }
    }

    handleChangeLogger (value){
        this.setState({ userInputLog : value})
    }

    handleChangePassword (value){
        this.setState({ userInputPassword : value})
    }

    showAlert(){
        
        alert(`hey  bro i hacked you and your username is ${this.state.userInputLog} and your password ${this.state.userInputPassword} be afraid i am comming for you ` )
    }

    render (){
        
        return(
            <div >
                <input onChange = {(e) => this.handleChangeLogger(e.target.value)} />
                <input onChange = {(e) => this.handleChangePassword(e.target.value)} />
                <button onClick= {()=> this.showAlert()} >Click for an alert</button>

            </div>
            
        )
    }
}
export default Logger
