import React, { useContext } from "react";
import "./RecentTransaction.css";
import { UserTransactionContext } from "../../Store/StoreContext";
import { LiaRupeeSignSolid } from "react-icons/lia";

const RecentTransaction = () => {
  const { transactions } = useContext(UserTransactionContext);

  return (
    <div className="recent-transaction">
      <div className="recentTransaction-head">
        <p>Recent Transactions</p>
        <form className="search-transaction">
          <input
            type="text"
            placeholder="Search Transaction"
            className="form-control form-control-sm"
          />
          <button type="button" className="btn btn-light">
            Search
          </button>
        </form>
      </div>

      <div className="recent-entry">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>
                  <p className="transaction-category">{transaction.category}</p>
                </td>
                <td><LiaRupeeSignSolid />{transaction.transactionAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransaction;
