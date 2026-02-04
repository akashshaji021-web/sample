var express = require('express');
var router = express.Router();
const User = require('../models/userModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form-page');
});

router.post('/savedb', (req, res) => {

  console.log(req.body);
  

  // const email = req.body.email;
  // const password = req.body.password;

  const {email, password} = req.body



  const newUser = new User({
    email,
    password
  });

  newUser.save()
    .then(() => {
      res.send('User created');
    })
    .catch((error) => {
      console.error(error);
      
    });
});

module.exports = router;
