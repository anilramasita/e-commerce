const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', CartSchema);
