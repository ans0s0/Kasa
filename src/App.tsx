import "./styles/App.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home.tsx";
import { Apropos } from "./Pages/Apropos/Apropos.tsx";
import { Logement } from "./Pages/Logement/Logement.tsx";
import { Erreur } from "./Pages/Erreur/Erreur.tsx";



export const App=()=> {
    return (
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement" element={<Logement />} />
          <Route path="/Erreur" element={<Erreur />} />
        </Routes>
     
    );
  };

