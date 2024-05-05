import React from "react";
import logo from '../../Images/logo_red.png'


export const Header = () => {
    return (
<div className="header">
            
        <img src={logo} alt='Kasa' className='logo_header' />

            <nav className="menu">

                <div className="first-element-menu"><a href="#accomodations">Accueil</a></div>
                <div className="second-element-menu"><a href="#activities">A Propos</a></div>

            </nav>



</div>
  );
};