const express = require('express');
const cors = require('cors');

const {
  medicinesRouter,
  authRouter,
  ordersRouter,
  couponsRouter,
} = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', medicinesRouter);
app.use('/auth', authRouter);
app.use('/orders', ordersRouter);
app.use('/coupons', couponsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.use((err, _, res, __) => {
  const { statusCode = 500, message = 'Internal server error' } = err;
  res.status(statusCode).json({ message });
});

module.exports = app;
