import React from "react";

import {Collapse} from "../../components/Collapse/Collapse.tsx";
import {Banner} from "../../components/Banner/Banner.tsx";
import bannerImg from "../Apropos/banner.png";

export const Apropos=()=> {
  return (
    <div>
<></>
<Banner bannerImg={bannerImg} />
<></>
       <Collapse  title="Introduction" description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
   
    <Collapse title="Respect" description=" La bienveillance fait partie des valeurs fondatrices de Kasa. 
  Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>
  
    <Collapse title="Service" description=" La bienveillance fait partie des valeurs fondatrices de Kasa. 
  Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
   
    <Collapse title="Sécurité" description="  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. "/>

    </div>
  )};
