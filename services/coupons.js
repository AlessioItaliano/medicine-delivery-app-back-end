const { Coupon } = require('../models');

const getAllCoupons = async () => {
  const result = await Coupon.find({}, '-createdAt -updatedAt');
  return result;
};

const getById = async id => {
  const result = await Coupon.findById(id, '-createdAt -updatedAt');
  return result;
};

module.exports = {
  getAllCoupons,
  getById,
};
