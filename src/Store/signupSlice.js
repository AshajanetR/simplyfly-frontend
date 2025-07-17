
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: null, 
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupSuccess: (state, action) => {
      state.userDetails = action.payload;
    },
    clearSignup: (state) => {
      state.userDetails = null;
    },
  },
});

export const { signupSuccess, clearSignup } = signupSlice.actions;
export default signupSlice.reducer;
