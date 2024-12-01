import React, { useContext } from "react";
import "./TotalBalance.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";

import { UserTransactionContext } from "../../Store/StoreContext";

const TotalBalance = () => {
  const { totalIncome, transactions, balance, totalExpenses } = useContext(
    UserTransactionContext
  );

  console.log(transactions);
  console.log(totalIncome);
  console.log(balance);

  const calculateTotalExpense = () => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  return (
    <div className="total-balance-div">
      <div className="total-balance">
        <p>Total Balance</p>
        <span>
          <LiaRupeeSignSolid />
          {balance}
        </span>{" "}
        {/* Ensure balance is shown with 2 decimal places */}
      </div>

      <div className="income-expense">
        <div className="income">
          <p>
            Income <FaArrowUp />
          </p>
          <span>
            <LiaRupeeSignSolid />
            {parseFloat(totalIncome || 0).toFixed(2)}
          </span>{" "}
          {/* Ensure totalIncome is a number */}
        </div>
        <div className="expense">
          <p>
            Expense <FaArrowDown />
          </p>
          <span>
            <LiaRupeeSignSolid />
            {totalExpenses}
          </span>
          {/* Ensure expense is shown with 2 decimal places */}
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
