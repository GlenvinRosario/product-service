const Products = require('../models/productsModel');

const getProducts = async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).send(allProducts);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const searchProductByName = async (req, res) => {
    try {
        const {searchProdName } = req.body;
        const allProducts = await Products.find();
        const filteredProducts = allProducts.filter((product)=> product.name.toLowerCase().includes(searchProdName.toLowerCase()) );
        res.status(200).send(filteredProducts)
    }catch(error) {
        console.log(" Eror while getting product ", error)
    }
}

const applyDiscount = async (req, res) => {
    try {
        let products = await Products.find(); 

       
        const discountPromises = products.map(async (item) => {
            const discountedPrice = item.price * 0.9; 
            
            
            await Products.updateOne(
                { _id: item._id },  
                { $set: { price: discountedPrice } }  
            );
        });

        await Promise.all(discountPromises);


        let updatedProducts = await Products.find();
        console.log("Updated products with discount:", updatedProducts);
        
        res.status(200).send(updatedProducts);
    } catch (error) {
        console.log("Error while giving Discount", error);
        res.status(500).send({ error: "Error while giving the discount" });
    }
};

const sortLowToHigh = async(req,res) => {
    try {
        const allProducts = await Products.find();
       
        console.log("All Products: ", allProducts);
        const sortedProducts = allProducts.sort((a, b) => a.price - b.price);
        res.status(200).send(sortedProducts);
 
    }catch(error) {
        console.log(" Eroor", error)
    }
}


const sortHighToLow =async (req,res) => {
    try {
        const productCollection = await Products.find();

        const sortedProducts = [...productCollection].sort((a,b)=> b.price - a.price);
        console.log(" sortedProducts ", sortedProducts);
        res.status(200).send(sortedProducts)
    }catch(error) {
        console.log(" Eroor", error)
    }

}

const sortByAlphabets =async (req,res) => {
    try {
        const productCollection = await Products.find();

        const sortedProducts = [...productCollection].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA > nameB) return 1;
            if (nameA < nameB) return -1;
            return 0;
        });
        console.log(" sortedProducts ", sortedProducts);
        res.status(200).send(sortedProducts)
    }catch(error) {
        console.log(" Eroor", error)
    }

}


module.exports = { getProducts , searchProductByName ,applyDiscount , sortLowToHigh , sortHighToLow  , sortByAlphabets};
