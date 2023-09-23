const mongoose=require("mongoose")

// Schema for Single Item in a List of Items in a Cart 
const cartItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})


// Schema for User's Cart

const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    items:[cartItemSchema]
})

const Cart=mongoose.model("Cart",cartSchema)

module.exports={
    Cart
}