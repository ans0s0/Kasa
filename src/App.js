import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Apropos from "./Pages/Apropos/Apropos";
import Logement from "./Pages/Logement/Logement";
import Erreur from "./Pages/Erreur/Erreur";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/Erreur" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
