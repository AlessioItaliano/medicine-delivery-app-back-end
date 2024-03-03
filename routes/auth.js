const express = require('express');

const { validateBody } = require('../middlewares');

const { authSchemas } = require('../schemas');
const { authController } = require('../controllers');

const router = express.Router();

router.post(
  '/register',
  validateBody(authSchemas.registerScheme),
  authController.register
);

router.post(
  '/login',
  validateBody(authSchemas.logInScheme),
  authController.login
);

router.post('/logout', authController.logout);

module.exports = router;
