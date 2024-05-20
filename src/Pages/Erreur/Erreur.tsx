import React from "react";
import '../Erreur/Erreur.scss';


export const Erreur = () => {
  return <div className="error"> <p className="notFound">404</p>
  <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
  <p className="comeBack"><a href="/">Retournez sur la page d'accueil.</a></p>
  404
  </div>;
 
};

