import React, { useContext } from "react";
import "./GraphRepresentation.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { UserTransactionContext } from "../../Store/StoreContext";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

const GraphRepresentation = () => {
  const { transactions, totalIncome } = useContext(UserTransactionContext);

  // Group transactions by category and calculate the total for each category
  const categoryData = transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    const amount = parseFloat(transaction.transactionAmount) || 0;

    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }

    return acc;
  }, {});

  const doughnutOptions = {
    responsive: true, // Makes the chart responsive
  maintainAspectRatio: false, // Allows control over chart size using CSS
  plugins: {
    legend: {
      display: true,
      position: "right", // Change legend position if needed
      labels: {
        font: {
          size: 14,
        },
        color: "#333",
      },
    },
  },// Allow flexible resizing
  };
  

  // Prepare data for Doughnut Chart
  const doughnutData = {
    labels: Object.keys(categoryData), // Categories
    datasets: [
      {
        data: Object.values(categoryData), // Total amounts for each category
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className="graph-representation">

      {/* Doughnut Chart for Category Contribution */}
      <div className="graph">
        <p>Expense Contribution by Category</p>
        <Doughnut options={doughnutOptions}  data={doughnutData} />
      </div>

      <div className="total-expense">
        <p>Total Expense</p>
        {transactions.map((transaction, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default GraphRepresentation;
