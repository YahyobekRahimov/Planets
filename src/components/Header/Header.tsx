import Container from "../../layout/Container";
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
