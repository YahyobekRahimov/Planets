import { configureStore } from "@reduxjs/toolkit";
import PlanetsSlice from "./PlanetsSlice";

const store = configureStore({
   reducer: {
      planet: PlanetsSlice,
   },
});

export default store;
