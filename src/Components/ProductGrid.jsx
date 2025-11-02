import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="grid">
      {products.length > 0 ? (
        products.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <p>Loading products...</p>
      )}
    </section>
  );
}

export default ProductGrid;
