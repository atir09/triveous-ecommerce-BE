const mongoose=require("mongoose")

//Schema for the Categories collection

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String
});
  

const Category=mongoose.model("Category",categorySchema)

module.exports={
    Category
}
