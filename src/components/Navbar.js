import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <div className="header">
        <h1>Employee record</h1>
      </div>
      <div className="button">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
