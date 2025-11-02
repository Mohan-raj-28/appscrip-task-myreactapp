import React from 'react';
import "./index.css";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <label><input type="checkbox" /> Men</label>
      <label><input type="checkbox" /> Women</label>
      <label><input type="checkbox" /> Electronics</label>
      <label><input type="checkbox" /> Jewelry</label>
    </aside>
  );
};

export default Sidebar;
