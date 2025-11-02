import React from "react";

function ProductCard({ product }) {
  return (
    <article className="card">
      <img src={product.image} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <button>Add to Cart</button>
    </article>
  );
}

export default ProductCard;
