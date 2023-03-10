const { checkDateFormat } = require('../util/validations');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({
      message: 'Token não encontrado',
    });
  }

  if (authorization.length !== 16) {
    return res.status(401).send({
      message: 'Token inválido',
    });
  }

  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  
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
    return res.status(400).send({
      message: 'O campo "age" é obrigatório',
    });
  }

  if (age < 18) {
    return res.status(400).send({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  
  if (!talk || talk === undefined) {
    return res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (!watchedAt) {
    return res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  if (checkDateFormat(watchedAt) === false) {
    return res.status(400).send({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (!rate && rate !== 0) {
    console.log(rate);
    return res.status(400).send({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  if (rate < 1 || rate > 5) {
    return res.status(400).send({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};
