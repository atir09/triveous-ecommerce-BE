
// ...........Importing NPM Packages............

const express = require('express');


// ............Importing Controller Function from Controllers Folder..........

const {
  placeOrder,
  getOrderDetails,
  getOrderHistory
} = require('../controllers/order');


// Defining Route
const orderRouter = express.Router();

// Route to place an order
orderRouter.post('/place', placeOrder);

// Route to view the user's order history
orderRouter.get('/history', getOrderHistory);

// Route to get order details by order Id
orderRouter.get('/:orderId', getOrderDetails);

module.exports = {orderRouter};