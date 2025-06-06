// server.js

const express = require('express');
const cors = require('cors');
const products = require('./models/Product'); // Make sure Product.js exports an array

const app = express();

// Use environment variable PORT or default to 5000
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint to get product by ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
