import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please choose your start option :
        </p>
        <div>
          <button>Quick start </button>
          <button>Complete start</button>
        </div>
        <i>A quick start will load only a few restaurants whereas a complete start will load all the restaurants but will take time.</i>
      </header>
    </div>
  );
}

export default App;
