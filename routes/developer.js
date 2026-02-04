const express = require('express');
const router = express.Router();

router.get('/developer', (req, res) => {
  res.sendFile(__dirname + '/public/developer.html');
});

module.exports = router;