import React from 'react';
import './App.css';

const AccountDetailCard = (account) => {
  const keypairJSON = account.keypair.json_pretty();

  return (
    <div className="acc-details" key={keypairJSON.public_key} data-simplebar>
      <p>
        Private Key:
        {' '}
        <code>{keypairJSON.private_key}</code>
      </p>
      <p>
        Public Key:
        {' '}
        <code>{keypairJSON.public_key}</code>
      </p>
    </div>
  );
};

const App = () => {
  const [accounts, setAccountDetails] = React.useState([]);
  const [wasm, setWasm] = React.useState(null);

  const generateAcc = () => wasm.Account.new();

  import('@swaply/core')
    .then((loaded) => setWasm(loaded));

  return (
    <div className="content flex">
      <div className="header-section">
        <p>
          Swaply Account Genenerator
        </p>
        <button
          onClick={
              () => setAccountDetails(
                (prevAccounts) => [...prevAccounts, AccountDetailCard(generateAcc())],
              )
            }
          className="gen-button"
          type="button"
        >
          Generate Account
        </button>
      </div>
      {accounts}
    </div>
  );
};

export default App;
