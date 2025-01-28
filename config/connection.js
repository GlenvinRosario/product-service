const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://glenrosario84:Rosario123@cluster0.ikbvffu.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose;
