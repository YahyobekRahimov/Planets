import { Planets } from "../../types/types";
import Data from "../../service/data.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetData } from "../../Redux/PlanetsSlice";
import { stateType } from "../../types/types";

export default function Nav() {
   const planets: Planets = Data;
   const dispatch = useDispatch();
   const planetOnDisplay = useSelector(
      (state: stateType) => state.planet
   );
   function handlePlanetClick(planetName: string): void {
      dispatch(fetchPlanetData(planetName));
   }
   return (
      <div className="flex items-center justify-between">
         <div className="uppercase font-antonio text-white text-[1.75rem]">
            The planets
         </div>
         <nav>
            <ul className="list-none flex gap-8">
               {planets.map((planet) => {
                  return (
                     <li
                        className={`text-justWhite uppercase text-[1rem] cursor-pointer bold hover:text-lightBlue duration-200 ${
                           planet.name === planetOnDisplay
                              ? "text-lightBlue"
                              : "text-justWhite"
                        }`}
                        key={planet.name}
                        onClick={() => handlePlanetClick(planet.name)}
                     >
                        {planet.name}
                     </li>
                  );
               })}
            </ul>
         </nav>
      </div>
   );
}
