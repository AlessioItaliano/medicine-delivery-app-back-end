const { ctrlWrapper } = require('../helpers');

const { ordersService } = require('../services');

// const getAll = async (_, res) => {
//   const result = await medicinesService.getAllMedicines();
//   res.status(200).json(result);
// };

const addOrder = async (req, res) => {
  const result = await ordersService.addOrderService(req.user, req.body);
  res.status(201).json(result);
};

module.exports = {
  //   getAll: ctrlWrapper(getAll),
  addOrder: ctrlWrapper(addOrder),
  //   getByPrice: ctrlWrapper(getByPrice),
  //   getByName: ctrlWrapper(getByName),
};
