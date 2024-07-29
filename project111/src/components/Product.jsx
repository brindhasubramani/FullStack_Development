// // src/components/Product.js
 import React from 'react';
import './Product.css';
const Product = ({ id, name, description, price, imageUrl,children }) => {
  const addToCart = () => {
 //Implement your logic for adding the product to cart
    console.log(`Added Rs{name} to cart!`);
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name}  style={{ maxWidth: '30%', height: 'auto' }}/>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: Rs{price}</p>
        {/* <button onClick={addToCart}>Add to Cart</button> */}
           {children}
        </div>
    </div>
   );
 };

 export default Product; 
