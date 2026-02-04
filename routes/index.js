var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/akash', function(req, res) {
  res.render('akash');
});

module.exports = router;