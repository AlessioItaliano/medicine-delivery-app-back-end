const { Order } = require('../models');

const addOrderService = async (user, body) => {
  const newOrder = {
    owner: user.id,
    totalPrice: body.totalPrice,
  };

  const result = await Order.create(newOrder);

  return result;
};

module.exports = {
  addOrderService,
};
