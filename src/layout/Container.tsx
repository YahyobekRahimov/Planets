import { ReactComponentElement } from "react";

type propsType = {
   children: React.ReactElement;
   classes?: string;
};

export default function Container({ children, classes }: propsType) {
   return (
      <div className={`container mx-auto px-[2rem] ${classes}`}>
         {children}
      </div>
   );
}
