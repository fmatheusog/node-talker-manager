const { checkDateFormat } = require('../util/validations');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({
      message: 'Token não encontrado',
    });
  }

  if (authorization !== 16) {
    return res.status(401).send({
      message: 'Token inválido',
    });
  }

  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  
  if (!name) {
    return res.status(400).send({
      message: 'O campo "name" é obrigatório',
    });
  }

  if (name.length < 3) {
    return res.status(400).send({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    res.status(400).send({
      message: 'O campo "age" é obrigatório',
    });
  }

  if (age.length < 18) {
    res.status(400).send({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (!watchedAt) {
    res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  if (checkDateFormat(watchedAt) === false) {
    res.status(400).send({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  
  if (!rate) {
    res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateWatchedAt,
  validateRate,
};
