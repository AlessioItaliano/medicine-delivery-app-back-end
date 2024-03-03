const express = require('express');
const cors = require('cors');

const { medicinesRouter } = require('./routes');
const { authRouter } = require('./routes');

const app = express();

app.use(cors());

app.use('/', medicinesRouter);
app.use('/auth', authRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.use((err, _, res, __) => {
  const { statusCode = 500, message = 'Internal server error' } = err;
  res.status(statusCode).json({ message });
});

module.exports = app;
