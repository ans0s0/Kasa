import React from "react";
import {Carrousel} from '../../components/Carrousel/Carrousel.tsx'
import {logementList} from '../../data/data.ts'
import { Collapse } from "../../components/Collapse/Collapse.tsx";

import { useParams, useNavigate } from "react-router-dom";
import '../Logement/Logement.scss'
import { Button } from "../../components/Button/Button.tsx";

export const Logement=() =>{
  const { id } = useParams()
  const navigate = useNavigate();

  // récupération d'un logement via son id
  const detailLogement = logementList.find(logement => logement.id === id);

  console.log({id, detailLogement});

  if (!detailLogement) {
    navigate('/erreur');
  }

  return (
    <div className="global">
      <h1>Page Logement</h1>
      <Carrousel pictures={detailLogement.pictures} />

<h1>{detailLogement?.title}</h1>
{detailLogement?.location}
{detailLogement?.tags}

      <Collapse  title="Description" description={detailLogement?.description} />
      <Collapse  title="Equipements" description={detailLogement?.equipments} />
      
   </div>
  );
}
