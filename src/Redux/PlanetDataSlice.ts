import { createSlice } from "@reduxjs/toolkit";

const PlanetDataSlice = createSlice({
   name: "Planet Data Slice",
   initialState: "overview",
   reducers: {
      changeInfo: (state, { payload }) => payload,
   },
});

export const { changeInfo } = PlanetDataSlice.actions;

export default PlanetDataSlice.reducer;
