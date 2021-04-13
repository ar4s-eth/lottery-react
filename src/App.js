import React, { useState, useEffect } from 'react';
import './App.css';
import web3 from './web3'
import lottery from './lottery';

function App() {
  
  const [ manager, setManager ] = useState('');
  const [ players, setPlayers ] = useState([]);
  const [ balance, setBalance ] = useState('');
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    async function asyncCalls() {

      await lottery.methods.manager().call().then(result => setManager(result));
      await lottery.methods.getPlayers().call().then(result => setPlayers(result));
      await web3.eth.getBalance(lottery.options.address).then(result => setBalance(result));

    }
    asyncCalls();
  }, []);

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
