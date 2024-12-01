import React, { useContext } from "react";
import "./GraphRepresentation.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { UserTransactionContext } from "../../Store/StoreContext";

const GraphRepresentation = () => {
  const { transactions, totalIncome } = useContext(UserTransactionContext);

  return (
    <div className="graph-representation">
      <div className="graph">
        <p>Category Distribution</p>
      </div>
      <div className="total-expense">
        <p>Total Expense</p>
        {transactions.map((transaction, index) => {
          return (
            <div key={index}>
              <div className="total-expense-item">
                <div className="item-name">
                  <p>{transaction.description}</p>
                  <p className="percentage-total">
                    {(
                      (parseFloat(transaction.transactionAmount) /
                        parseFloat(totalIncome)) *
                      100
                    ).toFixed(2)}
                    % of your income
                  </p>
                </div>
                <div className="item-price">
                  <p>
                    <LiaRupeeSignSolid />
                    {transaction.transactionAmount}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GraphRepresentation;
