const express = require('express');

const { validateBody, authenticate } = require('../middlewares');

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

router.post('/logout', authenticate, authController.logout);

router.get('/current', authenticate, authController.current);

module.exports = router;
