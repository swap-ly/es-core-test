import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Account} from '@swaply/core';

function generateAcc() {
	return Account.new();
}

function AccountDetailCard(privateKey, publicKey) {
  return (
    <div className="acc-details">
      <p>
        Private Key:
        <code>{privateKey}</code>
      </p>
      <p>
        Public Key:
        <code>{publicKey}</code>
      </p>
    </div>
  );
}

function App() {
  const [accountDetails, setAccountDetails] = React.useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Swaply Account Gen
        </p>
      </header>
      {accountDetails}
      <button onClick=""
    </div>
  );
}

export default App;
