// ...........Importing NPM Packages............
const express=require("express")


// ............Importing Controller Function from Controllers Folder..........

const { getCategoryList } = require('../controllers/categories');


// Defining Route
const categoryRouter=express.Router()

// Route to get a list of categories
categoryRouter.get("/",getCategoryList)


module.exports={
    categoryRouter
}


// ....................Swagger Specs....................

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get a list of categories
 *     description: Retrieve a list of categories with details => Name, Description.
 *     responses:
 *       200:
 *         description: A list of categories.
 *       500:
 *         description: Internal server error.
 */