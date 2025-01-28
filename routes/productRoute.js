const express = require('express');
const {getProducts , searchProductByName , applyDiscount , sortLowToHigh ,sortHighToLow , sortByAlphabets} = require('../controllers/productsController')
const router = express.Router();
const Products = require('../models/productsModel.js');
router.get('/products', getProducts);

router.get('/products/searchProductByName' , searchProductByName)

router.put('/products/apply-discount', applyDiscount);

router.get('/products/sortLowToHigh', sortLowToHigh);

router.post('/addPorduct', (req, res)=> {
  

// Create a new product
const newProduct = new Products({
  id: 32,
  name: 'Dyning Table',
  price: 1500,
  availableQuantity: 20,
  image: '/dyning-table'
});

// Save the product
newProduct.save()
  .then(() => {
    console.log('Product saved successfully');
  })
  .catch((error) => {
    console.error('Error saving product:', error);
  });
})

router.get('/products/sortHighTolow' , sortHighToLow)

router.get('/prodcuts/sortByAlphabets', sortByAlphabets)

router.delete('/product/:id', (req,res)=> {
    console.log("deleting priducts")
})



module.exports = router;