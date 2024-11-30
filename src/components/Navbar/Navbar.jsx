import React from 'react'
import { FaPlus } from "react-icons/fa6";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <p className='logo-title'>Expense <span className='navbar-logo-span'>Ease</span></p>
        </div>
        <div className="new-transaction">
            <button className="new-transaction-btn"><FaPlus /> New Transaction</button>
        </div>
      
    </div>
  )
}

export default Navbar
