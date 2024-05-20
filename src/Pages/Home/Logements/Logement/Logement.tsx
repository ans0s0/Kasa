import React from "react";
import { logementList } from "../../../../data/data";
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

type LogementProps = {
  title: string;
  cover: string;
  id:number;
}

export const Logement = ({title, cover,id}: LogementProps) => {
  return (
      <Link to={`/logement/${id}`}>
				<h3 key={title} id="titleLogement">{title}</h3> 
				<img src={cover} alt='Kasa' />
         
			</Link>
  )
}


