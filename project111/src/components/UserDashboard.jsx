// // src/components/UserDashboard.jsx
// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const UserDashboard = () => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <p>Welcome, {currentUser.name}. You are logged in as a user.</p>
//     </div>
//   );
// };

// export default UserDashboard;
// src/components/UserDashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const productData = [
  { name: 'Toy Car', purchases: 40 },
  { name: 'Doll', purchases: 30 },
  { name: 'Lego Set', purchases: 20 },
  { name: 'Puzzle', purchases: 50 },
  { name: 'Action Figure', purchases: 60 },
];

const UserDashboard = () => {
  const { isAuthenticated, currentUser } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      <Typography variant="h6">Welcome, {currentUser.name}. You are logged in as a user.</Typography>
      
      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>Most Purchased Products</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="purchases" fill="#00008B" /> {/* Changed to Dark Blue */}
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default UserDashboard;

