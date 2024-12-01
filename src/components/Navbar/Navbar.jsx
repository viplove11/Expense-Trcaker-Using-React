import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import "./Navbar.css";
import { UserTransactionContext } from "../../Store/StoreContext";

const Navbar = () => {
  const { userName } = useContext(UserTransactionContext);
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="myTitle">
          Expense<span>Ease</span>
        </a>
        <form className="d-flex m-2" role="search">
          {userName !== "" ? (
            <p className="userName">Hello, <span>{userName}</span></p>
          ) : (
            <button className="btn btn-secondary" id="mtButton" type="submit">
              <FaPlus /> New Transaction
            </button>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
