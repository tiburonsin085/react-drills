import React, { Component } from 'react';
import axios from 'axios'

class Request extends Component {
    constructor(){
        super()
        this.state = {
            charachter:[]
        }
    }

componentDidMount(){
    axios.get('https://swapi.dev/api/people/1/')
        .then((res)=>{
            this.setState({charachter:res.data})
            // console.log(this.state.charachter)
        })
}
    render() {
        const {name, birth_year, heigth, eye_color} = this.state.charachter
        return (
            <div>
                {/* {JSON.stringify(this.state.charachter)} */}
                <h1>Name: {name} </h1>
                <h1>Birth Day: {birth_year}</h1>
                <h1> Heigth: {heigth} </h1>
                <h1>Eye Color : {eye_color} </h1>
            </div>
        );
    }
}

export default Request;