import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Add checkout logic here
    alert('Checkout not implemented');
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
