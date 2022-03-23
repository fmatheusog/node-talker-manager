const checkDateFormat = (value) => {
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  return dateRegex.test(value);
};

const checkEmailFormat = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

module.exports = {
  checkDateFormat,
  checkEmailFormat,
};
