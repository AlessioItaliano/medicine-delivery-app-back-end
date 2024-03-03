const express = require('express');

const { validateBody } = require('../middlewares');
const { authController } = require('../controllers');
const { authSchemas } = require('../schemas');

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

router.post(
  '/logout',
  validateBody(authSchemas.logInScheme),
  authController.logout
);

module.exports = router;
