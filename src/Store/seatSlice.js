import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSeats: [],      // Stores selected seat numbers
  allowedSeats: 0
}

const seatSlice = createSlice({
    name : 'seat',
    initialState,
    reducers : {
        setAllowedSeats: (state, action) => {
      state.allowedSeats = action.payload;
    },
    selectSeats: (state, action) => {
  state.selectedSeats = action.payload; // ✅ overwrite with full array
}
    }
});

export const {setAllowedSeats,selectSeats} = seatSlice.actions;
export default seatSlice.reducer;