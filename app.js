const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/shopDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Home → Add product form
app.get("/", (req, res) => {
  res.render("add");
});

// Handle form submit
app.post("/add-product", async (req, res) => {
  const { name, quantity, price } = req.body;

  await Product.create({
    name,
    quantity,
    price
  });

  res.redirect("/products");
});

// Show all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  const totalProducts = products.length;

  res.render("list", { products, totalProducts });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
