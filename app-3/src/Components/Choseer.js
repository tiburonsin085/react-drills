import React, {Component} from 'react'

class Chooser extends Component{
    constructor(){
        super()
        this.state = {
            userInput : '',
            arr : ['spaguetti','milk', 'knifes','beer','ho','man','i need a beer'],
            outPutArr : []
        }
    }

    handleChange(value){

        //  i was young and naive, but it works 

        this.setState({userInput : value})
        let holderUserInput = this.userInput
        let holderArr = this.state.arr
        let holderOutput = []
        for (let i = 0 ; i < holderArr.length ; i++){
            if(holderArr[i].includes(holderUserInput)){
                holderOutput.push(holderArr[i])
            }
        }
        this.setState({outPutArr : holderOutput})
    }

    render(){
        return(
        <div>
            <input onChange = {(e)=> this.handleChange(e.target.value)}/>
            <span >{JSON.stringify(this.state.outPutArr)}</span>


        </div>
        )
    }
}
export default Chooser