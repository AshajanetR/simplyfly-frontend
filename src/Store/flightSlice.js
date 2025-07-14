import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: '',
  to: '',
  date: null,
  adults: 1,
  minors: 0
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setAdults: (state, action) => {
      state.adults = action.payload;
    },
    setMinors: (state, action) => {
      state.minors = action.payload;
    }
  }
});

export const { setFrom, setTo, setDate, setAdults, setMinors } = flightSlice.actions;
export default flightSlice.reducer;
