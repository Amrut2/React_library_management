import React, { useState } from "react";
import './Logout.css';
import company_logo from './company_logo.png';
import logo from './logo.png'
import { Link } from "react-router-dom";

function Logout() {

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="logo1">
          <img src={require('./logo.png')} alt="Company Logo" />
        </div>
        <div>
            <h3 className="dt">You have Successfully logged out !!</h3>
        </div> 
        <button>
        <Link to="/">Login</Link>
      </button>
      </div>
    </div>
  );
}

export default Logout;
