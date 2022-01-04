import React from 'react';
import {useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const audioTune = new Audio('http://localhost/earwaxmedia/prezofbank.mp3');
  

  const playSound = () => {
    audioTune.play();
  }
  useEffect(()=>{
      audioTune.play();
  }, [])

  return (
    <div className="App">
      <input type="button" id="playbutton" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
    </div>
  );
}

export default App;
