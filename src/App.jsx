import React from "react";
import "./style.css";
import ProductGrid from "./Components/ProductGrid";


function App() {
  return (
    <main>
      <header className="header">
        <h1>Product Listing Page</h1>
      </header>

      <section className="content">
        <ProductGrid />
      </section>

      <footer className="footer">
        <p>© 2025 Appscrip Task - Your Name</p>
      </footer>
    </main>
  );
}

export default App;
