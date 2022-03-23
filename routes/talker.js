const express = require('express');
const { getAll, getTalkerById } = require('../services/talkerService');
const { 
  validateToken,
  validateName,
  validateAge,
  validateWatchedAt,
  validateRate } = require('../middlewares/talkerValidation');

const router = express.Router();

router.get('/talker', async (req, res) => {
  res.status(200).send(await getAll());
});

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerById(id);

  if (!data) {
    res.status(404).send({
      message: 'Pessoa palestrante não encontrada',
    });
  }

  res.status(200).send(data);
});

router.post('/talker', validateToken, validateName, (req, res) => {
    res.status(200).send({
      teste: 'ok',
    });
});
// router.put();
// router.delete();
// router.get();

module.exports = router;
