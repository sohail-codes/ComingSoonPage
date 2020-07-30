import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="flipdown" className="flipdown"></div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Launch">
          Launching Soon ....
        </p>
      </header>
    </div>
  );
}

export default App;
