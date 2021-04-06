# decentExpenses
A decentralized expense tracker React WebApp on Ethereum Blockchain with custom smart contracts and integration with MetaMask wallet

## Smart contract
A simple smart contract is deployed on Ethereum's testnet with address `0xA9c4a7435e7866976aDc0fA209d159A9bD3969dF` which has following functions:
- addExpense(string memory message, uint256 amount, bool isEarning): adds an expense entry against the message sender
- getMyExpenses(): returns an array containing all the recorded expenses of the message sender
- getUserBalance(): returns an integer containing current balance of the message sender

## Integration with MetaMask
This WebApp is fully supprted by MetaMask wallet with signing of each transaction while sending to the network. Note that the contract is deployed on `Rinkeby testnet` and the user would therefore need some ethers in their account through faucet in order to perform transactions.

## Application layout
The application has a pretty straightfoward and simplest-possible interface for communication. To minimize hassle of login and signup, the application integrates with MetaMask and never asks for access again until the user revokes access from their wallet. The main interface has two main components:
- A simple webform to add expenses to their record by sending a signed transaction by their local MetaMask wallet
- A chronolgically sorted list of all their expense history with corresponding message and amount spent/earned

## Redistribution rights
This basic application is made for educational use and is not intended to be deployed on the mainnet. Doing so might cause unforeseen errors which the developer does not take responsibility of. As far as the learning goes, anyone is free to reuse this as a guide to making a complete dApp with wallet integration.