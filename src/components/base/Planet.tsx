import Planets from "../../service/data.json";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../types/types";
import Container from "../../layout/Container";
import Button from "./Button";
import { changeInfo } from "../../Redux/PlanetDataSlice";

export default function planet() {
   const planetInfo = useSelector(
      (state: { planetData: string }) => state.planetData
   );
   const planetName = useSelector((state: stateType) => state.planet);
   const planetOnDisplay =
      Planets[
         Planets.findIndex((planet) => planet.name == planetName)
      ];
   const dispatch = useDispatch();
   function handleChangeData(dataLabel: string) {
      dispatch(changeInfo(dataLabel));
   }
   let imageSource, description, source, geologyImage;
   if (planetInfo == "overview") {
      imageSource = planetOnDisplay.images.planet;
      description = planetOnDisplay.overview.content;
      source = planetOnDisplay.overview.source;
   } else if (planetInfo == "internal structure") {
      imageSource = planetOnDisplay.images.internal;
      description = planetOnDisplay.structure.content;
      source = planetOnDisplay.structure.source;
   } else if (planetInfo == "surface geology") {
      imageSource = planetOnDisplay.images.planet;
      description = planetOnDisplay.geology.content;
      source = planetOnDisplay.geology.source;
      geologyImage = planetOnDisplay.images.geology;
   }
   return (
      <main className="bg-veryDarkBlue">
         <Container
            classes="text-justWhite px-[10.3rem]"
            hasCustomPadding={true}
         >
            <>
               <div className="grid custom-grid items-center">
                  <div className="w-[70%] mx-auto flex flex-col items-center">
                     <img
                        className="w-[18rem] h-[18rem]"
                        src={imageSource}
                        alt={planetOnDisplay.name}
                     />
                     {geologyImage && (
                        <img
                           className="w-[7.75rem]"
                           src={geologyImage}
                           alt="Geology"
                        />
                     )}
                  </div>
                  <div>
                     <h1 className="font-antonio text-[5rem] mb-6 uppercase">
                        {planetOnDisplay.name}
                     </h1>
                     <p className="text-[1.1rem] mb-6">
                        {description}
                     </p>
                     <h3 className="opacity-50">
                        Source:{" "}
                        <a
                           className="bold text-underline"
                           target="_blank"
                           href={source}
                        >
                           Wikipedia
                        </a>
                     </h3>
                     <div className="flex flex-col mt-7 gap-4">
                        <Button
                           classes={`flex gap-7 px-7 py-3 ${
                              planetInfo == "overview"
                                 ? "bg-lightBlue"
                                 : "bg-transparent border-whiteButtonBorder border-2 border-solid"
                           }`}
                           onClick={() =>
                              handleChangeData("overview")
                           }
                        >
                           <>
                              <span>01</span>
                              {` `}
                              <span className="uppercase">
                                 Overview
                              </span>
                           </>
                        </Button>
                        <Button
                           classes={`flex gap-7 px-7 py-3 ${
                              planetInfo == "internal structure"
                                 ? "bg-lightBlue"
                                 : "bg-transparent border-whiteButtonBorder border-2 border-solid"
                           }`}
                           onClick={() =>
                              handleChangeData("internal structure")
                           }
                        >
                           <>
                              <span>02</span>
                              {` `}
                              <span className="uppercase">
                                 Internal Structure
                              </span>
                           </>
                        </Button>
                        <Button
                           classes={`flex gap-7 px-7 py-3 ${
                              planetInfo == "surface geology"
                                 ? "bg-lightBlue"
                                 : "bg-transparent border-whiteButtonBorder border-2 border-solid"
                           }`}
                           onClick={() =>
                              handleChangeData("surface geology")
                           }
                        >
                           <>
                              <span>03</span>
                              {` `}
                              <span className="uppercase">
                                 Surface Geology
                              </span>
                           </>
                        </Button>
                     </div>
                  </div>
               </div>
            </>
         </Container>
      </main>
   );
}
