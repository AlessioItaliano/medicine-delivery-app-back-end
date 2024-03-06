const express = require('express');

const { medicineController } = require('../controllers');

const router = express.Router();

router.get('/', medicineController.getAll);

router.get('/type/:type', medicineController.getByType);

router.get('/price/:price', medicineController.getByPrice);

router.get('/name/:name', medicineController.getByName);

module.exports = router;
