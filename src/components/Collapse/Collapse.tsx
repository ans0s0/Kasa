import React, {useState} from "react";
import logo from '../../Images/arrow_back.png'
import '../../styles/App.scss';

type CollapseProps = {
  title: string;
  description: string;
}

// TODO : remplacer <img /> par un composant qui retourn le SVG de l'icon -> il faut donc 2 composnats pour la flèche
export const Collapse = ({ title, description }: CollapseProps) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

    return (

<div className="Collapse">
         <button>{title}<img onClick={toggle} src={logo} alt='Kasa' className='arrow' /></button>
         {open && <p>{description}</p>}
    </div>
    )
  }




  