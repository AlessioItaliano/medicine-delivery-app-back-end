const Joi = require('joi');

const ordersSchemas = Joi.object({
  totalPrice: Joi.number().min(1).required().messages({
    'number.base': 'Price should be a number',
    'number.min': 'Price should be at least 1',
    'any.required': 'Price is required',
  }),
  orderList: Joi.array().items(Joi.string()).required().messages({
    'array.base': 'Order list should be an array',
    'any.required': 'Order list is required',
  }),
});

module.exports = ordersSchemas;
