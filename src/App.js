import React, { useState, useEffect } from 'react';
import './App.css';
import web3 from './web3'
import lottery from './lottery';

function App() {
  
  // Contract functions && states
  const [ admin, setAdmin ] = useState('');
  const [ players, setPlayers ] = useState([]);
  const [ balance, setBalance ] = useState('');
  const [ message, setMessage ] = useState('');

  // Set states based on contract instance state(s)
  useEffect(() => {
    const asyncCalls = async () => {
      await lottery.methods.admin().call().then(result => setAdmin(result));
      await lottery.methods.getPlayers().call().then(result => setPlayers(result));
      await web3.eth.getBalance(lottery.options.address).then(result => setBalance(result));

      // console.log(`admin`, admin);
    }
 
    asyncCalls();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    setMessage('Waiting for the transaction to be mined...');
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether'),
    });
    setMessage('You have been entered into the lottery! Good luck!!');
  };

  const pickWinner = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    setMessage('Waiting for the transaction to be mined...');
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    setMessage('A winner has been picked!');
  };

  const isAdmin = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    return accounts[0] === admin;
  };
  
  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>
        This contract is managed by {admin}.
        There are currently {players.length} people in the pool,
        competing to win {web3.utils.fromWei(balance, 'ether')} ether!
      </p>
      <hr />
      <form onSubmit={onSubmit}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Each lottery ticket costs exactly 1 Ether.</label>
        </div>
        <button>Enter</button>
      </form>
      { isAdmin &&
        <>
          <hr />
          <h4>Ready to pick a winner?</h4>
          <button onClick={pickWinner}>Pick a winner!</button>
        </>
      }
      <hr />
      <h2>{message}</h2>
    </div>
  );
}


export default App;
