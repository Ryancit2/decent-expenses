import React from 'react';

let AddExpenseForm = () => {
    let recordTransaction = (isEarning) => {
        var message = document.getElementById("expenseText").value;
        var amount = document.getElementById("expenseAmount").value;
        
        if (!message || message == "") {
            M.toast({html: "Please enter a valid message."});
            return;
        }

        if (!amount || amount <= 0) {
            M.toast({html: "Please enter a valid amount."});
            return;
        }

        window.expenseContract.methods.addExpense(message, amount, isEarning)
        .send({from: window.web3.givenProvider.selectedAddress})
        .on("sending", () => {
            M.toast({html: "Please confirm from wallet and wait."});
        })
        .on("receipt", () => {
            location.reload();
        })
        .on("error", (error) => {
            M.toast({html: error});
        });
    }

    return (
        <div class="col s12 m7">
            <h4 class="header">Add Expense</h4>
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <div class="row">
                            <form class="col s12">
                                <div class="row valign-wrapper">
                                    <div class="input-field col s5">
                                        <input id="expenseText" type="text" class="validate" />
                                        <label for="expenseText">Enter expense message</label>
                                    </div>
                                    <div class="input-field col s2">
                                        <input id="expenseAmount" type="number" min="0" class="validate" />
                                        <label for="expenseAmount">Expense amount</label>
                                    </div>
                                    <div class="col s5">
                                        <a class="waves-effect waves-light btn col s5" onClick={() => recordTransaction(true)}>+ Earning</a>
                                        <a class="waves-effect waves-light btn col s5 offset-s1 red darken-2" onClick={() => recordTransaction(false)}>- Spending</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddExpenseForm;