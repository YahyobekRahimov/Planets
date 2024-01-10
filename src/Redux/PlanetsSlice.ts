import { createSlice } from "@reduxjs/toolkit";

const PlanetsSlice = createSlice({
   name: "PlanetsSlice",
   initialState: "Mercury",
   reducers: {
      fetchPlanetData: (state, { payload }) => payload,
   },
});

export const { fetchPlanetData } = PlanetsSlice.actions;
export default PlanetsSlice.reducer;
