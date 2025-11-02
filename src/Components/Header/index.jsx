import React from 'react';
import "./index.css";


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">ShopEase</h1>
      <input type="text" placeholder="Search products..." className="search-bar" />
    </header>
  );
};

export default Header;
