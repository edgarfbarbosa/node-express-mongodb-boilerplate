const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  postProduct,
  updateProduct,
  deleteProduct
} = require('./../controllers/product.controller');

router.route('/').get(getAllProducts).post(postProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct);

module.exports = router;
