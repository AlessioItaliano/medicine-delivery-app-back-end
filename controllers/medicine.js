const { ctrlWrapper } = require('../helpers');

const { medicinesService } = require('../services');

const getAll = async (_, res) => {
  const result = await medicinesService.getAllMedicines();
  res.status(200).json(result);
};

const getByType = async (req, res) => {
  const result = await medicinesService.getMedicinesByType(req.params.type);
  res.status(200).json(result);
};

const getByPrice = async (req, res) => {
  const result = await medicinesService.getMedicinesByPrice(req.params.price);
  res.status(200).json(result);
};

const getByName = async (req, res) => {
  const result = await medicinesService.getMedicinesByName(req.params.name);
  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getByType: ctrlWrapper(getByType),
  getByPrice: ctrlWrapper(getByPrice),
  getByName: ctrlWrapper(getByName),
};
