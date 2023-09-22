// Importing the Cart model from models folder
const {Cart}=require("../models/cart")

// Importing the Product model from models folder
const {Product}=require("../models/product")


// Controller function to add a product to the user's cart
const addToCart = async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
  
      // Checking if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
  
      // Checking if the user has an existing cart
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }
  
      // Checking if the product is already in the cart
      const existingItem = cart.items.find((item) => item.productId === productId);
  
      if (existingItem) {
        // Updating the quantity if the product is already in the cart
        existingItem.quantity += quantity;
      } else {
        // Adding a new item to the cart
        cart.items.push({ productId, quantity });
      }
  
      await cart.save();
  
      res.status(200).send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Controller function to view the user's cart
  const viewCart = async (req, res) => {
    try {
      const { userId } = req.body;
  
      // Find and populate the cart with product details
      const cart = await Cart.findOne({ userId }).populate('items.productId', 'title price');
  
      res.status(200).send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  };
  

// Controller function for updating the quantity of a cart item
const updateCartItem = async (req, res) => {
    try {
      const { cartItemId } = req.params;
      const { quantity } = req.body;
  
      const cartItem = await Cart.findOneAndUpdate(
        { 'items._id': cartItemId },
        {
          $set: {
            'items.$.quantity': quantity,
          },
        },
        { new: true }
      );
  
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
  
      res.status(200).send(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Controller function to remove an item from the cart
  const removeCartItem = async (req, res) => {
    try {
      const { cartItemId } = req.params;
  
      const cartItem = await Cart.findOneAndUpdate(
        { 'items._id': cartItemId },
        {
          $pull: {
            items: {
              _id: cartItemId,
            },
          },
        },
        { new: true }
      );
  
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
  
      res.status(200).send(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  module.exports = {
    addToCart,
    viewCart,
    updateCartItem,
    removeCartItem,
  };