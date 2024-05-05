import React, {useState} from "react";

const Collapsible = () => {
    const [open, setOPen] = useState(false)

export const toggle = (open) => {
    setOpen(!open);



    return (
        <div>
            <button onClick={toggle}>Fiabilité</button>
            {open && <div>Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                     </div>}
        </div>);

 };};






