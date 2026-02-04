var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {

  // Store name
  const storeName = "My Book Store";

  // Books array
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Clean Code", author: "Robert C. Martin" }
  ];

  // Send data to view
  res.render('index', {
    storeName: storeName,
    books: books
  });
});

module.exports = router;
