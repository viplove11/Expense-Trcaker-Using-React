import React from "react";
import "./AddTransactions.css";

const AddTransactions = () => {
  return (
    <div className="add-transaction">
      <p className="add-transation-title m-0">Add Amount</p>
      <form>
        <div className="add-transaction-form-element">
          <div class="form-floating mb-3 amount-input">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="0.00"
            />
            <label for="floatingInput">Amount</label>
          </div>

          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="1">Housing and Utilities</option>
            <option value="2">Food and Groceries</option>
            <option value="3">Vehicle and Transportation</option>
          </select>
        </div>
        <input
          type="text"
          class="form-control form-control-lg mb-3"
          id="floatingInput"
          placeholder="Description"
        />
        <input
          type="date"
          class="form-control form-control-lg mb-3"
          id="floatingInput"
        />
        {/* button tag */}
        <button type="submit" class="btn btn-primary ">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactions;
