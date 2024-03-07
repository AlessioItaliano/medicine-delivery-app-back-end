const { Order } = require('../models');

const getByIdService = async user => {
  const orders = await Order.find({ owner: user._id }, ' -updatedAt')
    .populate('owner')
    .populate('orderList');
  return orders;
};

const addOrderService = async (user, body) => {
  const newOrder = {
    owner: user.id,
    totalPrice: body.totalPrice,
    orderList: body.orderList,
  };

  return await Order.create(newOrder);
};

module.exports = {
  addOrderService,
  getByIdService,
};
