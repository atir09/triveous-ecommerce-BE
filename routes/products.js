// ...........Importing NPM Packages............
const express=require("express")


// ............Importing Custom Modules..........

const { getProductList, getProductDetails } = require('../controllers/products');


//  Defining Route

const productsRouter=express.Router()

// Route to get a list of products by category Id
productsRouter.get("/category/:categoryId",getProductList)

// Route to get product details by product Id
productsRouter.get("/:productID",getProductDetails)

module.exports={
    productsRouter
}