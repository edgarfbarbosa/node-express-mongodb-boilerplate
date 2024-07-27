const jsend = require('jsend');
const Product = require('../models/product.model');

const postProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(jsend.success(newProduct));
  } catch (error) {
    res.status(400).json(jsend.fail(error.message));
  }
};

module.exports = { postProduct };
