const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const jsend = require('jsend');

const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

const handleError = require('./utils/handleError');
const AppError = require('./utils/AppError');

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

app.all('*', (req, res, next) => {
  next(
    new AppError(
      'Rota não encontrada! Por favor, verifique se digitou a URL corretamente.',
      404
    )
  );
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
