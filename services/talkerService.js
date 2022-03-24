const fs = require('fs').promises;

const fileName = 'talker.json';

const getAll = async () => {
  const file = await fs.readFile(fileName, 'utf-8');
  return JSON.parse(file);
};

const getTalkerById = async (id) => {
  const file = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(file);
  return data.find((talker) => talker.id === Number(id));
};

const addTalker = async (name, age, watchedAt, rate) => {
  const file = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(file);
  
  const id = data.length + 1;
  const newTalker = { id, name, age, talk: { watchedAt, rate } };
  const newData = [...data, newTalker];
  await fs.writeFile(fileName, JSON.stringify(newData));

  return newTalker;
};

const updateTalker = async ({ id, name, age, talk }) => {
  const file = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(file);

  const convertedId = Number(id);

  const newTalker = { id: convertedId, name, age, talk };
  const newData = data.map((talker) => (talker.id === convertedId ? newTalker : talker));
  await fs.writeFile(fileName, JSON.stringify(newData));

  return newTalker;
};

const deleteTalker = async (id) => {
  const file = await fs.readFile(fileName, 'utf-8');
  const data = JSON.parse(file);

  const newData = data.filter((talker) => talker.id !== Number(id));
  await fs.writeFile(fileName, JSON.stringify(newData));
};

module.exports = {
  getAll,
  getTalkerById,
  addTalker,
  updateTalker,
  deleteTalker,
};
