const express = require('express');
const { validateEmail, validatePassword } = require('../middlewares/login');
const tokenGenerator = require('../util/tokenGenerator');

const router = express.Router();

router.post('/login', validateEmail, validatePassword, (req, res) => {
  const token = tokenGenerator();
  res.status(200).send({
    token,
  });
});

module.exports = router;