// Import required modules
const express = require("express"); // Express framework for building the API
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing
const path = require("path"); // Node.js module for handling file paths

// Create an Express app instance
const app = express();
app.use(cors()); // Allow cross-origin requests from frontend
app.use(express.json()); // Parse incoming JSON requests

// Hardcoded list of products available in the store
const products = [
  {
    id: 1,
    name: "Sneakers",
    price: 15000,
    description: "Cool sneakers",
    image: "",
    stock: 10,
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 5000,
    description: "Nice t-shirt",
    image: "",
    stock: 20,
  },
  {
    id: 3,
    name: "Cap",
    price: 3000,
    description: "Stylish cap",
    image: "",
    stock: 15,
  },
];

// Get products
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend API!");
});

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, "public")));

// For any other route, serve the React app's index.html (Express 5.x+ syntax)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
