import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import ProductGrid from "./Components/ProductGrid";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
