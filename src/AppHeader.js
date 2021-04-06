import React, {useState} from 'react';

let AppHeader = () => {
    const [balance, setBalance] = useState(-1);

    window.expenseContract.methods.getUserBalance().call({from: window.web3.givenProvider.selectedAddress}).then((data) => {
        setBalance(data);
    })

    return (
        <div className="center-align">
            <h3>decentExpenses</h3>
            <h6 className="teal-text text-lighten-2">Current Balance: <strong>${balance}</strong></h6>
            <p className="teal-text text-lighten-2">Currently signed in as {window.web3.givenProvider.selectedAddress}</p>
        </div>
    );
}

export default AppHeader;