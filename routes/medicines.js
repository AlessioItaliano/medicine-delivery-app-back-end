const express = require('express');

const { medicineController } = require('../controllers');

const router = express.Router();

router.get('/', medicineController.getAll);

router.get('/:type', medicineController.getByType);

module.exports = router;
