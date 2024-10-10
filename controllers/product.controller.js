const jsend = require('jsend');
const Product = require('../models/product.model');
const setFields = require('../utils/setFields');
const setPagination = require('../utils/setPagination');
const setSort = require('../utils/setSort');

const getAllProducts = async (req, res) => {
  try {
    let queryParams = { ...req.query };
    const { fields, page, limit, sort } = queryParams;

    let query = Product.find();

    if (fields) setFields(fields, query);
    if (page && limit) setPagination(page, limit, query);
    if (sort) setSort(sort, query);

    const products = await query;

    res.status(200).json(jsend.success(products));
  } catch (error) {
    res.status(404).json(jsend.fail(error.message));
  }
};

const postProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(jsend.success(newProduct));
  } catch (error) {
    res.status(400).json(jsend.fail(error.message));
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json(jsend.success(product));
  } catch (error) {
    res.status(404).json(jsend.fail(error.message));
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json(jsend.success({ message: 'Produto removido' }));
  } catch (error) {
    res.status(400).json(jsend.fail(error.message));
  }
};

module.exports = { getAllProducts, postProduct, updateProduct, deleteProduct };
