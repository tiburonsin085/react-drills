import React from 'react';
import logo from './logo.svg';
import Img from './Component/Img'
import { useState } from 'react'
import './App.css';

function App() {
  const [image, setImage] = useState('https://i.pinimg.com/originals/5f/bb/67/5fbb6710efa22f8633d6347a5e52c601.jpg')
  return (
    <div className="App">
      <Img image = {image} />
    </div>
  );
}

export default App;
