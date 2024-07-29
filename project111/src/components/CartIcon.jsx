// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { FaShoppingCart } from 'react-icons/fa'; // Make sure you install react-icons

// const CartIcon = () => {
//   const { cart } = useCart();

//   return (
//     <div className="cart-icon">
//       <FaShoppingCart size={24} />
//       {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
//     </div>
//   );
// };

// export default CartIcon;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className="cart-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <FaShoppingCart size={24} />
      {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
    </div>
  );
};

export default CartIcon;
