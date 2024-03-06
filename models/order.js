const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
      min: 1,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    // medicinesList: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'medicine',
    //   },
    // ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
