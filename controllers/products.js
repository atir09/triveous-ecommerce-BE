// Importing the Product model 
const res = require('express/lib/response');
const {Product} = require('../models/product');

// Controller function to get a list of products by category Id
const getProductList=async(req,res)=>{
    try {
        const {categoryId}=req.params;
        const products=await Product.find({categoryId})

        res.status(200).send(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Controller function to get product details by product Id
const getProductDetails = async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  module.exports = {
    getProductList,
    getProductDetails,
  };