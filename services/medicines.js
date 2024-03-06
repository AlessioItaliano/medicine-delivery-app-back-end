const { Medicine } = require('../models');

// const { HttpError } = require('../helpers');

const getAllMedicines = async () => {
  const result = await Medicine.find({}, '-createdAt -updatedAt');
  return result;
};

const getMedicinesByType = async type => {
  const result = await Medicine.find(
    { typeOfMedicine: type },
    '-createdAt -updatedAt'
  );
  return result;
};

const getMedicinesByPrice = async sortOrder => {
  const sortDirection = sortOrder === 'low' ? 1 : -1;
  return await Medicine.find().sort({ price: sortDirection });
};

const getMedicinesByName = async medicineName => {
  return await Medicine.find({
    name: { $regex: medicineName, $options: 'i' },
  });
};

module.exports = {
  getAllMedicines,
  getMedicinesByType,
  getMedicinesByPrice,
  getMedicinesByName,
};
