
// ...........Importing NPM Packages............
const express = require('express');

// ............Importing Controller Functions..........
const {
    addToCart,
    viewCart,
    updateCartItem,
    removeCartItem
} = require('../controllers/cart');

// Defining Route
const cartRouter = express.Router();


// Route to view the user's cart
cartRouter.get('/view', viewCart);

// Route to add a product to the user's cart
cartRouter.post('/add', addToCart);

// Route to update the quantity of a cart item
cartRouter.put('/update/:cartItemId', updateCartItem);

// Route to remove an item from the cart
cartRouter.delete('/remove/:cartItemId', removeCartItem);

module.exports = {
    cartRouter
};