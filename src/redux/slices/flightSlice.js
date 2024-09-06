import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      console.log("İstek Başarısız", action.error);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default flightSlice.reducer;
