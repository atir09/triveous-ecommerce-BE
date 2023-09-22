
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



// ...........Swagger Specs..........

/**
 * @swagger
 * /cart/add:
 *   post:
 *     summary: Add a product to the cart
 *     description: Add a product to the user's cart.
 *     security:
 *       - jwt_auth: []
 *     requestBody:
 *       description: The product details to add to the cart.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user.
 *               productId:
 *                 type: string
 *                 description: The ID of the product to add to the cart.
 *               quantity:
 *                 type: number
 *                 description: The quantity of the product to add.
 *     responses:
 *       200:
 *         description: Product added to the cart successfully.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /cart/view:
 *   get:
 *     summary: View the cart
 *     description: Retrieve the user's cart contents.
 *     security:
 *       - jwt_auth: []
 *     requestBody:
 *       description: The product details to add to the cart.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user.
 *     responses:
 *       200:
 *         description: The user's cart.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: The ID of the user.
 *                 items:
 *                   type: array
 *                   description: List of items in the cart.
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the product in the cart.
 *                       price:
 *                         type: number
 *                         description: The price of the product in the cart.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /cart/update/{cartItemId}:
 *   put:
 *     summary: Update the quantity of a cart item
 *     description: Update the quantity of a specific item in the user's cart.
 *     security:
 *       - jwt_auth: []
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the cart item to update.
 *     requestBody:
 *       description: The updated quantity for the cart item.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *                 description: The updated quantity of the cart item.
 *     responses:
 *       200:
 *         description: Updated cart item.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: string
 *                   description: The ID of the product in the cart.
 *                 quantity:
 *                   type: number
 *                   description: The updated quantity of the product in the cart.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       404:
 *         description: Cart item not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /cart/delete/{cartItemId}:
 *   delete:
 *     summary: Remove a product from the cart
 *     description: Remove a specific item from the user's cart.
 *     security:
 *       - jwt_auth: []
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the cart item to remove.
 *     responses:
 *       200:
 *         description: Cart item removed successfully.
 *       401:
 *         description: Unauthorized. User not authenticated.
 *       404:
 *         description: Cart item not found.
 *       500:
 *         description: Internal server error.
 */