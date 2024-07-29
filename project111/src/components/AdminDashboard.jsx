// // src/components/AdminDashboard.jsx
// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated || currentUser?.role !== 'admin') {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, {currentUser.name}. You have admin privileges.</p>
//     </div>
//   );
// };

// export default AdminDashboard;
// // src/components/AdminDashboard.jsx
// import React from 'react';
// import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const data = [
//   { name: 'Jan', products: 30 },
//   { name: 'Feb', products: 45 },
//   { name: 'Mar', products: 60 },
//   { name: 'Apr', products: 50 },
//   { name: 'May', products: 70 },
//   { name: 'Jun', products: 90 },
//   { name: 'Jul', products: 85 },
// ];

// const recentOrders = [
//   { id: 1, product: 'Toy Car', date: '2024-07-25', quantity: 3 },
//   { id: 2, product: 'Doll', date: '2024-07-24', quantity: 2 },
//   { id: 3, product: 'Lego Set', date: '2024-07-23', quantity: 1 },
// ];

// const AdminDashboard = () => {
//       const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated || currentUser?.role !== 'admin') {
//     return <Navigate to="/login" />;
//   }
//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
//       <p>Welcome, {currentUser.name}. You have admin privileges.</p>
//       <Grid container spacing={4}>
//         {/* Products Purchased Chart */}
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ padding: 2 }}>
//             <Typography variant="h6" gutterBottom>Products Purchased</Typography>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="products" stroke="#8884d8" activeDot={{ r: 8 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>

//         {/* Recent Orders */}
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ padding: 2 }}>
//             <Typography variant="h6" gutterBottom>Recent Orders</Typography>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Order ID</TableCell>
//                     <TableCell>Product</TableCell>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Quantity</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {recentOrders.map((order) => (
//                     <TableRow key={order.id}>
//                       <TableCell>{order.id}</TableCell>
//                       <TableCell>{order.product}</TableCell>
//                       <TableCell>{order.date}</TableCell>
//                       <TableCell>{order.quantity}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Paper>
//         </Grid>

//         {/* User Management Section */}
//         <Grid item xs={12}>
//           <Paper sx={{ padding: 2 }}>
//             <Typography variant="h6" gutterBottom>User Management</Typography>
//             <Typography>Placeholder for user management features.</Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AdminDashboard;
// src/components/AdminDashboard.jsx
// src/components/AdminDashboard.jsx
// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const productData = [
  { id: 1, name: 'Toy Car', purchases: 40 },
  { id: 2, name: 'Doll', purchases: 30 },
  { id: 3, name: 'Lego Set', purchases: 20 },
  { id: 4, name: 'Puzzle', purchases: 50 },
  { id: 5, name: 'Action Figure', purchases: 60 },
];

const AdminDashboard = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const [products, setProducts] = useState(productData);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState('');

  if (!isAuthenticated || currentUser.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setEditedProductName(product.name);
  };

  const handleSaveProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, name: editedProductName } : product
      )
    );
    setEditingProductId(null);
    setEditedProductName('');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Typography variant="h6">Welcome, {currentUser.name}. You are logged in as an admin.</Typography>
      
      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>Most Purchased Products</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="purchases" fill="#00008B" /> {/* Changed to Dark Blue */}
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>Product List</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Purchases</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {editingProductId === product.id ? (
                      <TextField
                        value={editedProductName}
                        onChange={(e) => setEditedProductName(e.target.value)}
                        variant="standard"
                      />
                    ) : (
                      product.name
                    )}
                  </TableCell>
                  <TableCell align="right">{product.purchases}</TableCell>
                  <TableCell align="right">
                    {editingProductId === product.id ? (
                      <IconButton color="primary" onClick={() => handleSaveProduct(product.id)}>
                        <SaveIcon />
                      </IconButton>
                    ) : (
                      <IconButton color="primary" onClick={() => handleEditProduct(product)}>
                        <EditIcon />
                      </IconButton>
                    )}
                    <IconButton color="secondary" onClick={() => handleRemoveProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;

