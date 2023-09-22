const mongoose=require("mongoose")


// Schema for the Products collection
const productSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    description: {
        type:String
    },
    availability: {
        type:Boolean,
        default: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', // Reference to the Categories collection
    },
  });

  const Product=mongoose.model("Product",productSchema)

  module.exports={Product}