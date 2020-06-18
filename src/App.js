import React from 'react';
import './App.css';

const AccountDetailCard = (account, i) => (
  <div className="acc-details" key={i} data-simplebar>
    <p>
      Private Key:
      {' '}
      <code>{account.keypair.private_key_pretty()}</code>
    </p>
    <p>
      Public Key:
      {' '}
      <code>{account.keypair.public_key_pretty()}</code>
    </p>
  </div>
);

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
                (prevAccounts) => [
                  AccountDetailCard(generateAcc(), prevAccounts.size), ...prevAccounts,
                ],
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
