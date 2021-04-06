import React from 'react';

let PreloaderSpinner = ({message}) => {
    let ABI = [ { "inputs": [ { "internalType": "string", "name": "message", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "isEarning", "type": "bool" } ], "name": "addExpense", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getMyExpenses", "outputs": [ { "components": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "string", "name": "message", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "isEarning", "type": "bool" } ], "internalType": "struct ExpenseTracker.expenseInstance[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getUserBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];
    window.expenseContract = new window.web3.eth.Contract(ABI, "0xA9c4a7435e7866976aDc0fA209d159A9bD3969dF");

    return (
        <div className="center-align">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <h4>{message}</h4>
        </div>
    );
}

export default PreloaderSpinner;