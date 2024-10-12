const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const jsend = require('jsend');

const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

const handleError = require('./utils/handleError');

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

app.all('*', (req, res, next) => {
  res.status(404).json(
    jsend.fail({
      message:
        'Rota não encontrada! Por favor, verifique se digitou a URL corretamente.'
    })
  );
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
