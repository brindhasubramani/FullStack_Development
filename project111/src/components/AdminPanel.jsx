// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const AdminPanel = () => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated || currentUser?.role !== 'admin') {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <p>Welcome, {currentUser.name}. You have admin privileges.</p>
//     </div>
//   );
// };

// export default AdminPanel;
