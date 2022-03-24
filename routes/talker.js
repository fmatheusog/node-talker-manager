const express = require('express');
const { 
  getAll,
  getTalkerById,
  searchTalker,
  addTalker,
  updateTalker,
  deleteTalker } = require('../services/talkerService');
const { 
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate } = require('../middlewares/talkerValidation');

const router = express.Router();

router.get('/talker', async (req, res) => {
  res.status(200).send(await getAll());
});

router.get('/talker/search', validateToken, async (req, res) => {
  const { q } = req.query;
  const result = await searchTalker(q);

  res.status(200).send(result);
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

router.post('/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const talker = await addTalker(name, age, watchedAt, rate);
    
    res.status(201).send(talker);
});

router.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const talker = await updateTalker({ id, name, age, talk });

    res.status(200).send(talker);
  });
  
  router.delete('/talker/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    await deleteTalker(id);
    
    res.sendStatus(204);
  });

// router.get();

module.exports = router;
