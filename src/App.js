import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

const App = () => {
  const [page, setPage] = useState("home"); // pages: home, products, cart, login, checkout
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleLogin = () => {
    setPage("home");
  };

  return (
    <>
      <Header cartCount={cart.length} onNavigate={setPage} />

      <main className="main-content" style={{ padding: "2rem" }}>
        {page === "home" && <Home products={products} onAddToCart={handleAddToCart} />}
        {page === "products" && (
          <ProductList products={products} onAddToCart={handleAddToCart} />
        )}
        {page === "cart" && (
          <Cart cartItems={cart} onRemove={handleRemoveFromCart} onNavigate={setPage} />
        )}
        {page === "login" && <Login onLogin={handleLogin} />}
        {page === "checkout" && (
          <Checkout cartItems={cart} onNavigate={setPage} setCart={setCart} />
        )}
      </main>
    </>
  );
};

export default App;
