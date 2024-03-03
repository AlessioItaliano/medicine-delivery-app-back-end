const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema(
  {
    urlToImage: {
      type: String,
    },
    name: {
      type: String,
      minLength: 1,
      maxLength: 20,
      required: true,
    },
    description: {
      type: String,
      minLength: 1,
      maxLength: 300,
      required: true,
    },
    made: {
      type: String,
      minLength: 1,
      maxLength: 20,
      required: true,
    },
    typeOfMedicine: {
      type: String,
      enum: [
        'gel',
        'ointment',
        'syrup',
        'extract',
        'elixir',
        'emulsion',
        'decoction',
      ],
      required: true,
    },
    price: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Medicine = mongoose.model('medicine', medicineSchema);

module.exports = Medicine;
