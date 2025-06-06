import React from "react";
import "./Header.css";

const Header = ({ cartCount, onNavigate }) => {
  return (
    <header className="main-header">
      <div className="logo" onClick={() => onNavigate("home")}>
        ModernTrendz
      </div>
      <nav className="nav-links">
        <button onClick={() => onNavigate("home")}>Home</button>
        <button onClick={() => onNavigate("products")}>Products</button>
        <button onClick={() => onNavigate("cart")}>Cart ({cartCount})</button>
        <button onClick={() => onNavigate("login")}>Login</button>
      </nav>
    </header>
  );
};

export default Header;
