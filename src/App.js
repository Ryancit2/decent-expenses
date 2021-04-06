import React, {createContext, useContext, useState} from 'react';
import Web3 from 'web3';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import PreloaderSpinner from './PreloaderSpinner';
import AddExpenseForm from './AddExpenseForm';
import ExpenseHistory from './ExpenseHistory';
import AppHeader from './AppHeader';

let PageContext = createContext("preloader");

let Preloader = () => {
    let {currentPage, setDashboard, setPreloader} = useContext(PageContext);
    let hideClass = (currentPage == "preloader" ? "" : "hide");
    let [preloaderMessage, setPreloaderMessage] = useState("Initializing decentExpenses...");

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        if (ethereum.isConnected()) {
            setDashboard();
        } else {
            ethereum.enable().then(() => {
                setDashboard();
            });
        }
    } else {
        setPreloaderMessage("Client wallet not found, consider installing MetaMask browser extension");
    }

    return (
        <div className={`preloader ${hideClass}`}>
            <PreloaderSpinner message={preloaderMessage} />
        </div>
    );
}

let DashboardScreen = () => {
    let {currentPage} = useContext(PageContext);
    let hideClass = (currentPage == "dashboard" ? "" : "hide");

    return (
        <center>
            <div className={`left-align dashboard ${hideClass}`}>
                <AppHeader />
                <br/>
                <AddExpenseForm />
                <br/>
                <ExpenseHistory />
            </div>
        </center>
    );
}

let App = () => {
    let [currentPage, setPage] = useState("preloader");
    let setDashboard = () => setPage("dashboard");
    let setPreloader = () => setPage("preloader");
    M.AutoInit();

    return (
        <PageContext.Provider value={{currentPage, setDashboard, setPreloader}}>
            <Preloader />
            <DashboardScreen />
        </PageContext.Provider>
    );
}

export default App;