import Header from "./components/Header/Header";
import "./App.css";
import Planet from "./components/base/Planet";

function App() {
   return (
      <div className="min-h-screen bg-veryDarkBlue">
         <Header />
         <Planet />
      </div>
   );
}

export default App;
