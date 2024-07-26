const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'O produto deve ter uma categoria']
  },
  name: {
    type: String,
    required: [true, 'O produto deve ter um nome'],
    unique: true,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'O produto deve ter um preço']
  },
  discountPercentage: {
    type: Number,
    min: [0, 'O desconto não pode ser negativo'],
    max: [100, 'O desconto não pode ser maior que 100']
  },
  description: {
    type: String,
    trim: true
  },
  productDetails: [String],
  stock: {
    type: Number,
    required: [true, 'Informe o número disponível de venda para este produto'],
    min: [0, 'O estoque não pode ser negativo']
  },
  collection: String,
  images: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
