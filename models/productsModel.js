const mongoose = require('mongoose');
const productCollection = require('../config/connection.js');

// Define the schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  availableQuantity: { type: Number, required: true },
  image: { type: String, required: true }
});

// Create the model and export it
const Products = productCollection.model('Product', productSchema);

module.exports = Products;
