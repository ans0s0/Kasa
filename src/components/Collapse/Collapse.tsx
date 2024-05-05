import React, {useState} from "react";

export const Collapse = (props) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

    return (

<div className="Collapses">
   
         <button onClick={toggle}>{props.Introduction}Fiabilité</button>
        {open && 
  <div>
  <p>
  Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
  </p></div>
  }
</div>)};

export const Collapse2 = (props) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

    return (

<div className="Collapses">
   
<button onClick={toggle}>{props.Respect}Respect</button>
        {open && 
  <div>
  <p>
  La bienveillance fait partie des valeurs fondatrices de Kasa. 
  Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
  </p></div>
  }
</div>)};


export const Collapse3 = (props) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

    return (

<div className="Collapses">
   
<button onClick={toggle}>{props.Service}Service</button>
        {open && 
  <div>
  <p>
  La bienveillance fait partie des valeurs fondatrices de Kasa. 
  Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
  </p></div>
  }
</div>)};


export const Collapse4 = (props) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

    return (

<div className="Collapses">
   
<button onClick={toggle}>{props.Sécurité}Sécurité</button>
        {open && 
  <div>
  <p>
  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
  </p></div>
  }
     
</div>)};






  