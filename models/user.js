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
    password: {
      type: String,
      match: regexHelpers.passwordRegex,
      required: [true, `Please fill valid password`],
    },
    email: {
      type: String,
      match: regexHelpers.emailRegex,
      required: [true, `Please fill valid email address`],
      unique: true,
    },
    token: String,
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', usersSchema);

module.exports = User;
