import Container from "../../layout/Container";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Nav from "./Nav";

export default function Header() {
   return (
      <header className="bg-veryDarkBlue">
         <Container>
            <Nav />
         </Container>
      </header>
   );
}
