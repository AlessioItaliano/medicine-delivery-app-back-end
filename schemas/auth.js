const Joi = require('joi');

const { regexHelpers } = require('../helpers');

const registerScheme = Joi.object({
  name: Joi.string().min(1).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.pattern.base': 'Invalid name format',
    'string.min': 'Name must be at least 3 characters',
    'string.max': 'Name cannot be more than 20 characters',
    'any.required': 'Missing required name field',
  }),
  phone: Joi.string().pattern(regexHelpers.phoneRegex).allow('').messages({
    'string.pattern.base': 'Valid number is format +38000124567',
  }),
  email: Joi.string().pattern(regexHelpers.emailRegex).required().messages({
    'string.base': 'Email should be a string',
    'string.pattern.base': 'Invalid email format',
    'any.required': 'Missing required email field',
  }),
  password: Joi.string()
    .pattern(regexHelpers.passwordRegex)
    .min(6)
    .required()
    .messages({
      'string.base': 'Password should be a string',
      'string.pattern.base': 'Invalid password format',
      'string.min': 'Password must be at least 6 characters',
      'any.required': 'Missing required password field',
    }),
});

const logInScheme = Joi.object({
  email: Joi.string().pattern(regexHelpers.emailRegex).required().messages({
    'string.base': 'Email should be a string',
    'string.pattern.base': 'Invalid email format',
    'any.required': 'Missing required email field',
  }),
  password: Joi.string()
    .pattern(regexHelpers.passwordRegex)
    .min(6)
    .required()
    .messages({
      'string.base': 'Password should be a string',
      'string.pattern.base': 'Invalid password format',
      'string.min': 'Password must be at least 6 characters',
      'any.required': 'Missing required password field',
    }),
});

module.exports = {
  registerScheme,
  logInScheme,
};
