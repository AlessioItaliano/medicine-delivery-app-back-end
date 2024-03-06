const mongoose = require('mongoose');

const { regexHelpers } = require('../helpers');

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 1,
      maxlength: 20,
      required: [true, `Please fill valid user name`],
    },
    phone: {
      type: String,
      match: regexHelpers.phoneRegex,
      required: [true, `Please fill valid phone number`],
    },
    email: {
      type: String,
      match: regexHelpers.emailRegex,
      required: [true, `Please fill valid email address`],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: '',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', usersSchema);

module.exports = User;
