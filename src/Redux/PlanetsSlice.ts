import { createSlice } from "@reduxjs/toolkit";

const PlanetsSlice = createSlice({
   name: "PlanetsSlice",
   initialState: "Mercury",
   reducers: {
      fetchPlanetData: (state, { payload }) => {
         state = payload;
         return state;
      },
   },
});

export const { fetchPlanetData } = PlanetsSlice.actions;
export default PlanetsSlice.reducer;
