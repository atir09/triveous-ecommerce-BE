
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



// ..............Swagger Specs........

/**
 * @swagger
 * /orders/place:
 *   post:
 *     summary: Place an order
 *     description: Place an order with products from the user's cart.
 *     security:
 *       - jwt_auth: []      
 *     requestBody:
 *       description: The UserID of the user placing an order.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user placing the order.
 *     responses:
 *       201:
 *         description: Order placed successfully.
 *       400:
 *         description: Cart is empty.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /orders/history:
 *   get:
 *     summary: View order history
 *     description: Retrieve the order history for authenticated users.
 *     requestBody:
 *       description: The UserID of the user placing an order.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user placing the order.
 *     security:
 *       - jwt_auth: [] 
 *     responses:
 *       200:
 *         description: List of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               description: List of user's orders.
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The ID of the order.
 *                   userId:
 *                     type: string
 *                     description: The ID of the user who placed the order.
 *                   orderDate:
 *                     type: string
 *                     description: The date and time the order was placed.
 *                   totalPrice:
 *                     type: number
 *                     description: The price of the order.
 *                   items:
 *                     type: array
 *                     description: List of items in the order.
 *                     items:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           description: The title of the product in the order.
 *                         price:
 *                           type: number
 *                           description: The price of the product in the order.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Get order details
 *     description: Retrieve detailed information about a specific order by its ID.
 *     security:
 *       - jwt_auth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the order to retrieve.
 *     responses:
 *       200:
 *         description: Detailed information about the order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the order.
 *                 userId:
 *                   type: string
 *                   description: The ID of the user who placed the order.
 *                 orderDate:
 *                   type: string
 *                   description: The date and time the order was placed.
 *                 totalPrice:
 *                   type: number
 *                   description: The price of the order.
 *                 items:
 *                   type: array
 *                   description: List of items in the order.
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the product in the order.
 *                       price:
 *                         type: number
 *                         description: The price of the product in the order.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       404:
 *         description: Order not found.
 *       500:
 *         description: Internal server error.
 */