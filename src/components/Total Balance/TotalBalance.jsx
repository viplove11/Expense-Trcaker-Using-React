import React from "react";
import "./TotalBalance.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const TotalBalance = () => {
  return (
    <div className="total-balance-div">
      <div className="total-balance">
        <p>Total Balance</p>
        <span>$1234.45</span>
      </div>

      <div className="income-expense">
        <div className="income">
          <p>income <FaArrowUp />
          </p>
          <span>$12354</span>
        </div>
        <div className="expense">
          <p>expense <FaArrowDown /></p>
          <span>$23456</span>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
