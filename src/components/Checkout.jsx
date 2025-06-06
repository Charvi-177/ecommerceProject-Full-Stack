import React, { useEffect, useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-summary">
            <h3>Total: ₹{totalAmount}</h3>
            <button className="place-order-btn">Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
