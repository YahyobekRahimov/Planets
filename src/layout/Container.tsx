type propsType = {
   children: React.ReactElement;
   classes?: string;
   hasCustomPadding?: boolean;
};

export default function Container({
   children,
   classes,
   hasCustomPadding = false,
}: propsType) {
   return (
      <div
         className={`container mx-auto ${
            hasCustomPadding ? "" : "px-[2rem]"
         } ${classes}`}
      >
         {children}
      </div>
   );
}
