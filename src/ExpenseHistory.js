import React, {useState, useEffect} from 'react';

let ExpenseHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        window.expenseContract.methods.getMyExpenses().call({ from: window.web3.givenProvider.selectedAddress }).then((data) => {
            setTransactions(data);
        });
    });

    return (
        <div class="col s12 m7">
            <h4 class="header">Expense History</h4>
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <div class="collection">
                            {
                                transactions.map((txn) => {
                                    var badgeColor = txn[3] ? "blue" : "red";
                                    var badgeText = txn[3] ? "Earned" : "Spent";
                                    return (<a class="collection-item"><span class={`new badge ${badgeColor}`} data-badge-caption={badgeText}>${txn[2]}</span>{txn[1]}</a>);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseHistory;