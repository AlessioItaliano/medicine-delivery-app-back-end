const express = require('express');

router = express.Router();

const { ordersSchemas } = require('../schemas');
const { validateBody, authenticate } = require('../middlewares');

const { ordersController } = require('../controllers');

router.get('/user', authenticate, ordersController.getUserOrders);

router.post(
  '/',
  authenticate,
  validateBody(ordersSchemas),
  ordersController.addOrder
);

module.exports = router;
