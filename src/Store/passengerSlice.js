import { createSlice } from "@reduxjs/toolkit";

const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengers: [],
  },
  reducers: {
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
  },
});

export const { setPassengers } = passengerSlice.actions;
export default passengerSlice.reducer;
