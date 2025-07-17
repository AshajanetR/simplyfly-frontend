

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSeats: [],
};

const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    addSeat: (state, action) => {
      const seat = action.payload;
      if (!state.selectedSeats.includes(seat)) {
        state.selectedSeats.push(seat);
      }
    },
    removeSeat: (state, action) => {
      const seat = action.payload;
      state.selectedSeats = state.selectedSeats.filter((s) => s !== seat);
    },
    resetSeats: (state) => {
      state.selectedSeats = [];
    },
  },
});

export const { addSeat, removeSeat, resetSeats } = seatSlice.actions;
export default seatSlice.reducer;
