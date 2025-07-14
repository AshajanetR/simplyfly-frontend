import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import authReducer from './authSlice';
import flightReducer from './flightSlice';
const store = configureStore({
  reducer: {
    signup: signupReducer,
    auth: authReducer,
    flight: flightReducer,
  },
});

export default store;
