import React from 'react';
import "./index.css";


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
