import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <ProductList cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
