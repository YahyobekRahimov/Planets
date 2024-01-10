export default function Button({
   classes,
   children,
   onClick,
}: {
   classes: string;
   children: React.ReactElement;
   onClick?: any;
}) {
   return (
      <button onClick={onClick} className={` ${classes}`}>
         {children}
      </button>
   );
}
