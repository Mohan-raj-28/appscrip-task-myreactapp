import React from 'react';
import "./index.css";


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Discover Our Products</h1>
      <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <input type="text" placeholder="Search products..." className="search-bar" />
    </header>
  );
};

export default Header;
