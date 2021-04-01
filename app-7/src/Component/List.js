import React, { Component } from 'react';
import Todo from './Todo'

class List extends Component {
    render() {
        console.log(this.props.list)
        const mappedList =this.props.list.map((e,i)=>{
            return(
                <Todo chore = {e} key=  {i}/>
            )
        })
        return (
            <div>
                {mappedList}
            </div>
        );
    }
}

export default List;