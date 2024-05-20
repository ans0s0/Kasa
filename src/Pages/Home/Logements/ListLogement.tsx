import React from "react";
import { logementList} from '../../../data/data.ts';
import { Logement } from './Logement/Logement.tsx';


export const ListLogement = () => {
    return (
        <div className="container">
			<div className="sousContainer">
			{logementList.map((logement) => (
			  <Logement key={logement.id} title={logement.title} cover={logement.cover} id={logement.id} />
			   ))
			}
		</div>
	</div>
    );
};

