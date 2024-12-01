import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalBalance from "./components/Total Balance/TotalBalance";
import AddTransactions from "./components/Add Transactions/AddTransactions";
import RecentTransaction from "./components/Recent Transaction/RecentTransaction";
import GraphRepresentation from "./components/Graph Representation/GraphRepresentation";
import UserCreation from "./components/User Creation/UserCreation";

import { UserTransactionProvider } from "./Store/StoreContext";


const App = () => {
  const [userCreated, setUserCreated] = useState(false);

  return (
    <div className="app">
      <UserTransactionProvider>
        <Navbar />
        {!userCreated ? (
          <UserCreation setUserCreated={setUserCreated} />
        ) : (
          <div className="inside-app">
            <TotalBalance />
            <AddTransactions />
            <RecentTransaction />
            <GraphRepresentation />
          </div>
        )}
      </UserTransactionProvider>
    </div>
  );
};

export default App;
