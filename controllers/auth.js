const { ctrlWrapper } = require('../helpers');

const { authService } = require('../services');

const register = async (req, res) => {
  const result = await authService.register(req.body);
  res.status(201).json(result);
};

const login = async (req, res) => {
  const result = await authService.login(req.body);
  res.status(200).json(result);
};

const logout = async (req, res) => {
  await authService.logout(req.user);
  res.status(204).end();
};

const current = async (req, res) => {
  const result = await authService.current(req.user);
  res.status(200).json(result);
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  current: ctrlWrapper(current),
};
