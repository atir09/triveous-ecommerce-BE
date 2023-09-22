// Importing the Order and Cart models from  models folder
const {Order} = require('../models/order');
const {Cart} = require('../models/cart');

// Controller function to place an order
const placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the user's cart
    const cart = await Cart.findOne({ userId }).populate('items.productId', 'title price');
    if (!cart || cart.items.length === 0) {
      return res.status(400).send({ message: 'Cart is empty' });
    }

    // Calculate the total price of the order
    const totalPrice = cart.items.reduce(
      (total, item) => {return (total + (item.productId.price * item.quantity))},
      0
    );

    // Create a new order
    const order = new Order({
      userId,
      items: cart.items,
      totalPrice,
    });

    await order.save();

    // Clear the user's cart after placing the order
    await Cart.findOneAndUpdate({ userId }, { items: [] });

    res.status(201).send(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get the user's order history
const getOrderHistory = async (req, res) => {
  try {
    const { userId } = req.body;

    // Finding and populating the user's orders with order details
    const orders = await Order.find({ userId }).populate('items.productId', 'title price');

    res.status(200).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get order details by order Id
const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Find the order by Id and populate it with order details
    const order = await Order.findById(orderId).populate('items.productId', 'title price');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).send(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  placeOrder,
  getOrderHistory,
  getOrderDetails,
};
