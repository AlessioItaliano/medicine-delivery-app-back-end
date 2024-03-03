const { User } = require('../models');

// const { HttpError } = require('../helpers');

const register = async () => {
  const result = await User.create(req.body);

  return result;
};

const login = async type => {
  const result = await User.find(
    { typeOfMedicine: type },
    '-createdAt -updatedAt'
  );
  return result;
};

const logout = async type => {
  const result = await User.find(
    { typeOfMedicine: type },
    '-createdAt -updatedAt'
  );
  return result;
};

module.exports = {
  register,
  login,
  logout,
};
