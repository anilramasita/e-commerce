import React from 'react';
import './ProductList.css';

const products = [
  { name: "Product 1", image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-delivery-img.png" },
  { name: "Product 2", image: "https://via.placeholder.com/200" },
  { name: "Product 3", image: "https://via.placeholder.com/200/FF5733" },
  { name: "Product 4", image: "https://via.placeholder.com/200/33FF57" },
  { name: "Product 5", image: "https://via.placeholder.com/200/3357FF" }
];

const ProductList = ({ cart, setCart }) => {
  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.product === product.name);

    if (existingItem) {
      // Update quantity if product already exists
      const updatedCart = cart.map(item =>
        item.product === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Add new product to cart
      setCart([...cart, { product: product.name, quantity: 1 }]);
    }
  };

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <p className="product-name">{product.name}</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
