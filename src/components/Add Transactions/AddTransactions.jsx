import React, { useContext, useState } from "react";
import "./AddTransactions.css";
import { UserTransactionContext } from "../../Store/StoreContext";

const AddTransactions = () => {
  const { addTransaction, totalIncome } = useContext(UserTransactionContext);

  // State variables for user input
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      transactionAmount: parseFloat(amount),
      description: description,
      category: category,
      date: date,
    };

    // Call the context function to add a new transaction
    addTransaction(transaction);

    // Reset all form fields
    setAmount("");
    setDescription("");
    setCategory("");
    setDate("");
  };

  return parseFloat(totalIncome) === 0 ? (
    <div className="no-income-amount">
      <p className="no-income-message">
        Please set an income before adding transactions.
      </p>
    </div>
  ) : (
    <div className="add-transaction">
      <p className="add-transaction-title m-0">Add Amount</p>
      <form onSubmit={handleSubmit}>
        <div className="add-transaction-form-element">
          <div className="form-floating mb-3 amount-input">
            <input
              required
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="0.00"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <label htmlFor="floatingInput">Amount</label>
          </div>

          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Housing and Utilities">Housing and Utilities</option>
            <option value="Food and Groceries">Food and Groceries</option>
            <option value="Vehicle and Transportation">
              Vehicle and Transportation
            </option>
          </select>
        </div>

        <input
          required
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          required
          type="date"
          className="form-control form-control-lg mb-3"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactions;
