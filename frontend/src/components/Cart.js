import React from 'react';
import axios from 'axios';
import './Cart.css'; // Import CSS file

const Cart = ({ cart }) => {
  const checkout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    axios.post("http://localhost:5000/api/cart/add", { cart })
      .then(response => {
        alert("Checkout Successful!");
        console.log(response.data);
      })
      .catch(error => {
        console.error("Checkout Error:", error.response?.data || error.message);
        alert("Error: " + (error.response?.data?.error || "Something went wrong"));
      });
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.product} - Quantity: {item.quantity}</span>
          </div>
        ))
      )}
      <button className="checkout-btn" onClick={checkout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
