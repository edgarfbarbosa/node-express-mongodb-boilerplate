const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

module.exports = app;
