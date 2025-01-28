const mongoose = require('mongoose');

const productCollection = mongoose.createConnection('mongodb://127.0.0.1:27017/ecommerce',);


productCollection.on('connected', () => {
    console.log('Connected to MongoDB using productCollection');
});

productCollection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = productCollection;
