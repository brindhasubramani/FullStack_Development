
// import React, { useState, useEffect } from 'react';
// import { useCart } from '../context/CartContext';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();
//   const [discountCode, setDiscountCode] = useState('');
//   const [discountApplied, setDiscountApplied] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const calculateTotal = () => {
//       console.log('Cart:', cart); // Debugging
//       return cart.reduce((acc, item) => {
//         const itemTotal = parseFloat(item.price) * parseInt(item.quantity, 10);
//         console.log(`Item Total for ${item.name}:`, itemTotal); // Debugging
//         return acc + itemTotal;
//       }, 0);
//     };

//     setTotal(calculateTotal());
//   }, [cart]);

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity > 0) {
//       updateQuantity(id, newQuantity);
//     }
//   };

//   const handleRemoveItem = (id) => {
//     removeFromCart(id);
//   };

//   const handleApplyDiscount = () => {
//     // Implement discount logic
//     setDiscountApplied(true); // Just an example
//   };

//   if (cart.length === 0) {
//     return <Typography>Your cart is empty.</Typography>;
//   }

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h4" gutterBottom>Cart</Typography>
//       <Box>
//         {cart.map(item => (
//           <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
//             <img src={item.imageUrl} alt={item.name} style={{ width: 50, height: 50, marginRight: 16 }} />
//             <Box sx={{ flexGrow: 1 }}>
//               <Typography variant="h6">{item.name}</Typography>
//               <Typography>Price: Rs{parseFloat(item.price).toFixed(2)}</Typography>
//               <Typography>Subtotal: Rs{(parseFloat(item.price) * parseInt(item.quantity, 10)).toFixed(2)}</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <TextField
//                 type="number"
//                 value={item.quantity}
//                 onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
//                 inputProps={{ min: 1 }}
//                 sx={{ width: 60, marginRight: 2 }}
//               />
//               <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
//                 <DeleteIcon />
//               </IconButton>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//       <Box sx={{ marginTop: 2, padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
//         <Typography variant="h6">Total: Rs{total.toFixed(2)}</Typography> 
//         <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
//           <TextField
//             label="Discount Code"
//             variant="outlined"
//             value={discountCode}
//             onChange={(e) => setDiscountCode(e.target.value)}
//             sx={{ marginRight: 2 }}
//           />
//           <Button variant="contained" onClick={handleApplyDiscount}>Apply Discount</Button>
//         </Box>
//         {discountApplied && (
//           <Typography sx={{ marginTop: 2 }}>Discount applied!</Typography>
//         )}
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 2 }}
//           onClick={() => console.log('Proceed to Checkout')} // Replace with actual checkout navigation
//         >
//           Proceed to Checkout
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CartPage;
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      console.log('Cart:', cart); // Debugging
      return cart.reduce((acc, item) => {
        const itemTotal = parseFloat(item.price) * parseInt(item.quantity, 10);
        console.log(`Item Total for ${item.name}:`, itemTotal); // Debugging
        return acc + itemTotal;
      }, 0);
    };

    setTotal(calculateTotal());
  }, [cart]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleApplyDiscount = () => {
    // Implement discount logic
    setDiscountApplied(true); // Just an example
  };

  if (cart.length === 0) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Your cart is empty.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: '100vh', padding: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>Cart</Typography>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {cart.map(item => (
          // <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
          //   <img src={item.imageUrl} alt={item.name} style={{ width: 100, height: 100, marginRight: 850 }} />
          //   <Box sx={{ flexGrow: 1 }}>
          //     <Typography variant="h6" sx={{ marginLeft: -2 }}>{item.name}</Typography>
          //     <Typography>Price: Rs{parseFloat(item.price).toFixed(2)}</Typography>
          //     <Typography>Subtotal: Rs{(parseFloat(item.price) * parseInt(item.quantity, 10)).toFixed(2)}</Typography>
          //   </Box>
          //   <Box sx={{ display: 'flex', alignItems: 'center' }}>
          //     <TextField
          //       type="number"
          //       value={item.quantity}
          //       onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
          //       inputProps={{ min: 1 }}
          //       sx={{ width: 60, marginRight: 2 }}
          //     />
          //     <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
          //       <DeleteIcon />
          //     </IconButton>
          //   </Box>
          // </Box>
          <Box
  key={item.id}
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
    marginBottom: 2,
    padding: 2,
    border: '1px solid #ddd',
    marginRight:20,
    width:1010,
    borderRadius: 1,
    backgroundColor: '#fff', // Optional: for better visual separation
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
    <img
      src={item.imageUrl}
      alt={item.name}
      style={{ width: 100, height: 100 }}
    />
  </Box>
  <Box sx={{ flexGrow: 1, textAlign: 'center',marginBottom: 5 }}>
    <Typography variant="h6" sx={{ marginBottom: 1 }}>
      {item.name}
    </Typography>
    <Typography>Price: Rs{parseFloat(item.price).toFixed(2)}</Typography>
    <Typography>Subtotal: Rs{(parseFloat(item.price) * parseInt(item.quantity, 10)).toFixed(2)}</Typography>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <TextField
      type="number"
      value={item.quantity}
      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
      inputProps={{ min: 1 }}
      sx={{ width: 90, marginRight: 2 }}
    />
    <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
      <DeleteIcon />
    </IconButton>
  </Box>
</Box>

        ))}
      </Box>
      <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
        <Typography variant="h6">Total: Rs{total.toFixed(2)}</Typography> 
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <TextField
            label="Discount Code"
            variant="outlined"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            sx={{ marginRight: 2 }}
          />
          <Button variant="contained" onClick={handleApplyDiscount}>Apply Discount</Button>
        </Box>
        {discountApplied && (
          <Typography sx={{ marginTop: 2 }}>Discount applied!</Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => console.log('Proceed to Checkout')} // Replace with actual checkout navigation
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;




