import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css"; // Optional CSS for styling

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
    </div>
  );
}

export default ProductCard;
