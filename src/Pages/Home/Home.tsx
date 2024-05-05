import React from "react";
import {Header} from "../../components/Header/Header.tsx";

import {Banner} from "../../components/Banner/Banner.tsx";
import {CardsList} from "../../components/Cards/Cards.tsx";

import {Footer} from "../../components/Footer/Footer.tsx";

export const Home=()=> {
  return (
    <div>
      
      <Header />
       <Banner />
     
      <CardsList/>
      <Footer/>

    </div>
  );
}


