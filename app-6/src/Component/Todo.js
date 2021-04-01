import React from 'react';
import { useState } from 'react'

function Todo(props) {
    
    const [chore, setChore] = useState('')
    console.log(chore)
    function clickFun (chore){
        const newList = [...props.list, chore]
        props.setList(newList)
        setChore('')
    }

    const mappedList = props.list.map((e,i)=> {
        return(
            <h2 key = {i}>{e}</h2>
        )
    })

    return (
        <div>
            
            <input placeholder= 'inset new thing to add'
                onChange= {(e) => setChore(e.target.value)} value = {chore}/>
            <button onClick = { ()=> clickFun(chore) }>Send Something</button>  
            {mappedList}  
              
        </div>
    );
}

export default Todo;