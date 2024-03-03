const mongoose = require('mongoose');

const { regexHelpers } = require('../helpers');

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 1,
      maxlength: 20,
      required: true,
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
    token: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', usersSchema);

module.exports = User;
