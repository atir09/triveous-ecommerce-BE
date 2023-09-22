// ...........Importing NPM Packages............
const express=require("express")


// ............Importing Controller Functions..........

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



// ..................Swagger Specs..............

/**
 * @swagger
 * /products/category/{categoryId}:
 *   get:
 *     summary: Get a list of products under a Catgeory
 *     description: Retrieve a list of products with essential details => Title, Price, Description, Availability, Category-ID .
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Products Category to retrieve.
 *     responses:
 *       200:
 *         description: A list of products.
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Get product details
 *     description: Retrieve detailed information about a specific product by its ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to retrieve.
 *     responses:
 *       200:
 *         description: Detailed information about the product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the product.
 *                 title:
 *                   type: string
 *                   description: The title of the product.
 *                 price:
 *                   type: number
 *                   description: The price of the product.
 *                 description:
 *                   type: string
 *                   description: A description of the product.
 *                 availability:
 *                   type: boolean
 *                   description: Indicates if the product is available.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */