import React from "react";
import "./Home.css";

const Home = ({ products, onAddToCart }) => {
  const featured = products.slice(0, 4); // Display first 4 as featured

  return (
    <div className="home-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {featured.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button className="add-btn" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
