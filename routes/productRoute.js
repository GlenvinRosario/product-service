const express = require('express');
const {getProducts , searchProductByName , applyDiscount , sortLowToHigh ,sortHighToLow , sortByAlphabets} = require('../controllers/productsController')
const router = express.Router();
const Products = require('../models/productsModel.js');
router.get('/products', getProducts);

router.get('/products/searchProductByName' , searchProductByName)

router.put('/products/apply-discount', applyDiscount);

router.get('/products/sortLowToHigh', sortLowToHigh);

router.get('/products/sortHighTolow' , sortHighToLow)

router.get('/prodcuts/sortByAlphabets', sortByAlphabets)

router.delete('/product/:id', (req,res)=> {
    console.log("deleting priducts")
})



module.exports = router;