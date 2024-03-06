const Joi = require('joi');

const ordersSchemas = Joi.object({
  totalPrice: Joi.number().min(1).required().messages({
    'number.base': 'Price should be a number',
    'number.min': 'Price should be at least 1',
    'any.required': 'Price is required',
  }),
});

module.exports = ordersSchemas;
