const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

router.get('/talker', (req, res) => {
  fs.readFile('talker.json', 'utf-8')
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get();
// router.post();
// router.put();
// router.delete();
// router.get();

module.exports = router;
