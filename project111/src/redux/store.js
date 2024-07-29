import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import your auth slice

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add your reducers here
  },
});

export default store;
