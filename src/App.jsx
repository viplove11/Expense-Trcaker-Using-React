import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalBalance from "./components/Total Balance/TotalBalance";
import AddTransactions from "./components/Add Transactions/AddTransactions";
import RecentTransaction from "./components/Recent Transaction/RecentTransaction";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="inside-app">
        <TotalBalance />
        <AddTransactions />
        <RecentTransaction />
      </div>
    </div>
  );
};

export default App;
