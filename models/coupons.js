const mongoose = require('mongoose');

const couponsSchema = new mongoose.Schema(
  {
    urlToImage: {
      type: String,
    },
    description: {
      type: String,
      minLength: 1,
      maxLength: 300,
      required: true,
    },
    discount: {
      type: Number,
      min: 1,
      max: 100,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Coupon = mongoose.model('coupon', couponsSchema);

module.exports = Coupon;
