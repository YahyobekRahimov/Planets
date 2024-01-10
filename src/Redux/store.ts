import { configureStore } from "@reduxjs/toolkit";
import PlanetsSlice from "./PlanetsSlice";

const store = configureStore({
   reducer: {
      planets: PlanetsSlice,
   },
});

export default store;
