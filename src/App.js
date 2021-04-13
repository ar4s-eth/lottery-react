import React, { useState, useEffect } from 'react';
import './App.css';
import web3 from './web3'
// import { render } from '@testing-library/react';
import lottery from './lottery';

function App() {
  
  const [ manager, setManager ] = useState('');
  const [ players, setPlayers ] = useState([]);
  const [ balance, setBalance ] = useState('');
  const [ message, setMessage ] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
