

// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import AddToCart from './components/AddToCart';
//import AdminPanel from './components/AdminPanel';
//import PrivateRoute from './components/PrivateRoute';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import './App.css';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [filters, setFilters] = useState({ categories: [], priceRange: '' });
  const products = [
    { id: 1, name: 'Baby Toy', description: 'Tiny tots first plushie.', price: 15.99, imageUrl: 'baby toy1.jpeg', category: 'baby' },
    { id: 2, name: 'Baby Toy', description: 'Adorable rattling buddy.', price: 49.99, imageUrl: 'baby toy5.jpeg', category: 'baby' },
    { id: 3, name: 'Baby Toy', description: 'Mini stacking fun.', price: 29.99, imageUrl: 'baby toy4.jpeg', category: 'baby' },
    { id: 4, name: 'Board Game', description: 'Mystery solving quest.', price: 29.99, imageUrl: 'board game4.jpeg', category: 'board' },
    { id: 5, name: 'Board Game', description: 'Roll the dice fun.', price: 129.99, imageUrl: 'board game2.jpeg', category: 'board' },
    { id: 6, name: 'Board Game', description: 'Climb or slide.', price: 150.00, imageUrl: 'board game3.jpeg', category: 'board' },
    { id: 7, name: 'Craft Toy', description: 'Crafty Moments.', price: 150.00, imageUrl: 'craft toy4.jpeg', category: 'craft' },
    { id: 8, name: 'Craft Toy', description: 'Handmade magic.', price: 150.00, imageUrl: 'craft toy2.jpeg', category: 'craft' },
    { id: 9, name: 'Craft Toy', description: 'Create and play.', price: 150.00, imageUrl: 'craft toy3.jpeg', category: 'craft' },
    { id: 10, name: 'Electronic Toy', description: 'Power up play.', price: 150.00, imageUrl: 'electronic toy1.jpeg', category: 'electronic' },
    { id: 11, name: 'Electronic Toy', description: 'Robotic adventures.', price: 150.00, imageUrl: 'electronic toy2.jpeg', category: 'electronic' },
    { id: 12, name: 'Electronic Toy', description: 'Gadget playtime.', price: 150.00, imageUrl: 'electronic toy3.jpeg', category: 'electronic' },
    { id: 13, name: 'Outdoor Toy', description: 'Backyard adventures.', price: 150.00, imageUrl: 'outdoor toy1.jpeg', category: 'outdoor' },
    { id: 14, name: 'Outdoor Toy', description: 'Fresh air fun.', price: 150.00, imageUrl: 'outdoor toy2.jpeg', category: 'outdoor' },
    { id: 15, name: 'Outdoor Toy', description: 'Active playtime.', price: 150.00, imageUrl: 'outdoor toy3.jpeg', category: 'outdoor' },
    // { id: 16, name: 'Sport Toy', description: 'Game on.', price: 150.00, imageUrl: 'sports toy1.jpeg', category: 'sport' },
    // { id: 17, name: 'Sport Toy', description: 'Get into the Game.', price: 150.00, imageUrl: 'sports toy2.jpeg', category: 'sport' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.categories.length > 0 ? filters.categories.includes(product.category) : true;
    const priceMatch = filters.priceRange ? (
      (filters.priceRange === '0-25' && product.price <= 25) ||
      (filters.priceRange === '25-50' && product.price > 25 && product.price <= 50) ||
      (filters.priceRange === '50-100' && product.price > 50 && product.price <= 100) ||
      (filters.priceRange === '100+' && product.price > 100)
    ) : true;
    return categoryMatch && priceMatch;
  });

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Header />
          <div className="main-container">
            <Sidebar filters={filters} setFilters={setFilters} />
            <main className='content'>
              <Routes>
                <Route path="/" element={<Home products={filteredProducts} />} />
                <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route
          path="/user-dashboard"
          element={
            <PrivateRoute role="user">
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

const Home = ({ products }) => (
  <>
    <h1>Your Toy Paradise Awaits!</h1>
    <p>"From Dream to Reality, Find the Perfect Toy!"</p>
    <div className="product-grid">
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}>
          <AddToCart product={product} />
        </Product>
      ))}
    </div>
  </>
);

// PrivateRoute component to handle authentication
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
// src/components/PrivateRoute.jsx


// const PrivateRoute = ({ children, role }) => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated || (role && currentUser?.role !== role)) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };



export default App;
