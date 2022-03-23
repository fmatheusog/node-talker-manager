const fs = require('fs').promises;

const fileName = 'talker.json';

const getAll = async () => {
  const data = await fs.readFile(fileName, 'utf-8');
  return JSON.parse(data);
};

const getTalkerById = async (id) => {
  const data = await fs.readFile(fileName, 'utf-8');
  const res = JSON.parse(data);
  return res.find((talker) => talker.id === Number(id));
};

const addTalker = async (entry) => {
};

module.exports = {
  getAll,
  getTalkerById,
  addTalker,
};
