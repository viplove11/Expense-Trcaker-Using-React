import React, { useContext, useState } from "react";
import { UserTransactionContext } from "../../Store/StoreContext";

const UserCreation = ({ setUserCreated }) => {
  // Destructure required functions and state from context
  const { setUserName, setTotalIncome, userName, totalIncome } = useContext(UserTransactionContext);

  // Validation states
  const [userNameError, setUserNameError] = useState("");
  const [incomeError, setIncomeError] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Reset error states
    setUserNameError("");
    setIncomeError("");

    // Validate userName
    if (!userName || userName.trim() === "") {
      setUserNameError("User name is required.");
      return; // Prevent submission
    }

    // Validate totalIncome
    if (!totalIncome || isNaN(totalIncome) || parseFloat(totalIncome) <= 0) {
      setIncomeError("Please enter a valid income greater than 0.");
      return; // Prevent submission
    }

    console.log(`Username: ${userName}`);
    console.log(`User Income: ${totalIncome}`);
    setUserCreated(true); // Update the parent component state
  };

  return (
    <div className="user-creation">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter name"
            onChange={(event) => setUserName(event.target.value)} // Update context state
          />
          {userNameError && <p className="text-danger">{userNameError}</p>} {/* Error message */}
        </div>
        <div className="mb-3">
          <label htmlFor="totalIncome" className="form-label">
            Total Income
          </label>
          <input
            type="text"
            className="form-control"
            id="totalIncome"
            placeholder="Enter your income"
            onChange={(event) => setTotalIncome(event.target.value)} // Update context state
          />
          {incomeError && <p className="text-danger">{incomeError}</p>} {/* Error message */}
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserCreation;
