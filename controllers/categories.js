// Importing the Category model
const {Category} = require('../models/category');

// Controller function to get a list of categories

const getCategoryList=async(req,res)=>{
    try {
        const categories=await Category.find()
        res.status(200).send(categories)
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Internal server error' })
    }
}


module.exports={
    getCategoryList
}