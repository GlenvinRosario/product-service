const mongoose = require('mongoose');
const productCollection = require('../config/connection.js')


const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  availableQuantity: { type: Number, required: true },
  image: { type: String, required: true }
});


const Products = productCollection.model('Product', productSchema);

module.exports = Products ;
