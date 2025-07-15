import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import authReducer from './authSlice';
import flightReducer from './flightSlice';
import seatReducer from './seatSlice'
const store = configureStore({
  reducer: {
    signup: signupReducer,
    auth: authReducer,
    flight: flightReducer,
    seat: seatReducer,
  },
});

export default store;
