const express = require('express');

const router = express.Router();

router.get('/teste', (req, res) => {
  res.status(200).json({
    message: 'teste ok',
  });
});

// router.get();
// router.post();
// router.post();
// router.put();
// router.delete();
// router.get();

module.exports = router;
