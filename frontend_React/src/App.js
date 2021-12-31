import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {

  const [x,setX]=useState(Math.random())
  useEffect(() => {
    const interval = setInterval(() => {
      setX(Math.random());    
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <h1>{x}</h1>
    </div>
  );
}

export default App;
