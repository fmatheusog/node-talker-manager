const tokenGenerator = () => {
  let token = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i += 1) {
      token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return token;
};

module.exports = tokenGenerator;