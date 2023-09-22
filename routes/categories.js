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
