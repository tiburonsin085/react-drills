import React from 'react';
import Todo from './Component/Todo'
import { useState } from 'react'
import './App.css';

function App() {
  const [list, setList] = useState([])


  return (

    <div className="App">
      <Todo list = {list} setList={setList} />
    </div>
  );
}

export default App;
