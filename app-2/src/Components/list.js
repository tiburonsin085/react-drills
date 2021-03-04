import React, {Component} from 'react'

class ListOfArrays extends Component{
    constructor(){
        super()
        this.state = {
            arr : ['hey', 'dude', 'want','to' ,'sleep']
        }
    }

    render(){
        return(
            <div>
                <h3>{(this.state.arr[0])}</h3>
                <h3>{(this.state.arr[1])}</h3>
                <h3>{(this.state.arr[2])}</h3>
                <h3>{(this.state.arr[3])}</h3>
                <h3>{(this.state.arr[4])}</h3>
                
            </div>
        )
    }
}
export default ListOfArrays 