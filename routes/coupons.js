const express = require('express');

const router = express.Router();

const { couponsController } = require('../controllers');

router.get('/', couponsController.getAll);

router.get('/:id', couponsController.getById);

module.exports = router;
