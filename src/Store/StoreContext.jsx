import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
export const UserTransactionContext = createContext();

// Create a provider component
export const UserTransactionProvider = ({ children }) => {
  // User state
  const [userName, setUserName] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);

  // Set balance initially to totalIncome
  const [balance, setBalance] = useState(totalIncome);

  // Transaction state
  const [transactions, setTransactions] = useState([]);

  // expense state
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Function to add a transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setBalance((prev)=>prev-transaction.transactionAmount);
    setTotalExpenses((prev)=>prev+transaction.transactionAmount);

  };

  

  // Sync balance with totalIncome when totalIncome changes
  useEffect(() => {
    setBalance(totalIncome); // Set balance to totalIncome initially
  }, [totalIncome]);

  return (
    <UserTransactionContext.Provider
      value={{
        userName,
        setUserName,
        totalIncome,
        setTotalIncome,
        transactions,
        addTransaction,
        balance,
        setBalance,
        totalExpenses,
        setTotalExpenses,
      }}
    >
      {children}
    </UserTransactionContext.Provider>
  );
};
