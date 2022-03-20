const fs = require('fs').promises;

const getAll = async () => {
  const data = await fs.readFile('talker.json', 'utf-8');
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
