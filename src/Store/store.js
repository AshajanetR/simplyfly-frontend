import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import authReducer from './authSlice'
const store = configureStore({
  reducer: {
    signup: signupReducer,
    auth: authReducer,
  },
});

export default store;
