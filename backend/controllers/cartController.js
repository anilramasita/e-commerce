const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    try {
        const { cart } = req.body;

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return res.status(400).json({ error: "Cart cannot be empty" });
        }

        const savedItems = await Cart.insertMany(cart);
        res.status(201).json({ message: "Checkout Successful!", data: savedItems });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
