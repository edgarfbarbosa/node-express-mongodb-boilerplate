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
  collection: String,
  price: {
    type: Number,
    required: [true, 'O produto deve ter um preço']
  },
  discountPercentage: {
    type: Number,
    required: [true, 'O produto deve ter um percentual de desconto'],
    min: [0, 'O desconto não pode ser negativo'],
    max: [100, 'O desconto não pode ser maior que 100']
  },
  description: {
    type: String,
    trim: true
  },
  productDetails: {
    type: [String],
    default: undefined
  },
  stock: {
    type: Number,
    required: [true, 'Informe o número disponível de venda para este produto'],
    min: [0, 'O estoque não pode ser negativo']
  },
  images: {
    type: [String],
    default: undefined
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
