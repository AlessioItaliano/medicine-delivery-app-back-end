const express = require('express');

router = express.Router();

const { ordersSchemas } = require('../schemas');
const { validateBody, authenticate } = require('../middlewares');

const { ordersController } = require('../controllers');

// router.get('/orders/:id', ordersController.getById);

router.post(
  '/',
  authenticate,
  validateBody(ordersSchemas),
  ordersController.addOrder
);

module.exports = router;
