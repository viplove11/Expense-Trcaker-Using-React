import React from "react";
import "./RecentTransaction.css";

const RecentTransaction = () => {
  return (
    <div className="recent-transaction">
      <div className="recentTransaction-head">
        <p>Recent Transaction</p>
        <form className="search-transaction">
          <input
            type="text"
            placeholder="Search Transaction"
            className="form-control form-control-sm"
          />
          <button className="btn btn-light">Search</button>
        </form>
      </div>

      <div className="recent-entry">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">14-09-2024</th>
              <td>Fueled my Vehicle</td>
              <td ><p className="vehicle">vehicle and transaportation</p> </td>
              <td>$200</td>
            </tr>
            <tr>
              <th scope="row">14-09-2024</th>
              <td>Fueled my Vehicle</td>
              <td ><p className="housing">housing and utilites</p> </td>
              <td>$200</td>
            </tr>
            <tr>
              <th scope="row">14-09-2024</th>
              <td>Fueled my Vehicle</td>
              <td ><p className="grocery">Food and grocery</p> </td>
              <td>$200</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransaction;
