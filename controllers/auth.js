const { ctrlWrapper } = require('../helpers');

const { authService } = require('../services');

const register = async (req, res) => {
  const result = await authService.register(req.body);
  res.status(200).json(result);
};

const login = async (req, res) => {
  const result = await authService.login(req.params.type);
  res.status(200).json(result);
};

const logout = async (req, res) => {
  const result = await authService.logout(req.params._id);
  res.status(200).json(result);
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
};
