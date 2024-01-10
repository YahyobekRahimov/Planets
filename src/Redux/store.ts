import { configureStore } from "@reduxjs/toolkit";
import PlanetsSlice from "./PlanetsSlice";
import PlanetDataSlice from "./PlanetDataSlice";

const store = configureStore({
   reducer: {
      planet: PlanetsSlice,
      planetData: PlanetDataSlice,
   },
});

export default store;
