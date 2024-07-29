// import React from 'react';
// import { useCart } from '../context/CartContext';

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   const removeItemFromCart = (item) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: item });
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button onClick={() => removeItemFromCart(item)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React from 'react';
// import { useCart } from '../context/CartContext';
// import '../components/car'

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   const removeItemFromCart = (item) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: item });
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price.toFixed(2)}
//               <button onClick={() => removeItemFromCart(item)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useCart } from '../context/CartContext';

import styles from './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeItemFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartHeader}>Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.cartMainContent}>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartProductList}>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartProductCard}>
              <img
                src={item.image}
                alt={item.name}
                width="50"
                height="50"
                style={{ marginRight: 10 }}
              />
              {item.name} - ${item.price.toFixed(2)}
              <button className={styles.cartProductCardButton} onClick={() => removeItemFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;