const { ctrlWrapper } = require('../helpers');

const { couponsService } = require('../services');

const getAll = async (_, res) => {
  const result = await couponsService.getAllCoupons();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await couponsService.getById(req.params.id);
  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
