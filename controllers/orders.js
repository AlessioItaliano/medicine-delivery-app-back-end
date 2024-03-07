const { ctrlWrapper } = require('../helpers');

const { ordersService } = require('../services');

const getUserOrders = async (req, res) => {
  const result = await ordersService.getByIdService(req.user);
  res.status(200).json(result);
};

const addOrder = async (req, res) => {
  const result = await ordersService.addOrderService(req.user, req.body);
  res.status(201).json(result);
};

module.exports = {
  getUserOrders: ctrlWrapper(getUserOrders),
  addOrder: ctrlWrapper(addOrder),
};
