const express = require('express');
const { getAll } = require('../services/talkerService');

const router = express.Router();

router.get('/talker', async (req, res) => {
  res.status(200).send(await getAll());
});

// router.get();
// router.post();
// router.put();
// router.delete();
// router.get();

module.exports = router;
