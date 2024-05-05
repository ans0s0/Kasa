import React from "react";
import {Header} from "../../components/Header/Header.tsx";
import {Collapse} from "../../components/Collapse/Collapse.tsx";
import {Collapse2} from "../../components/Collapse/Collapse.tsx";
import {Collapse3} from "../../components/Collapse/Collapse.tsx";
import {Collapse4} from "../../components/Collapse/Collapse.tsx";
import {Banner} from "../../components/Banner/Banner.tsx";

import {Footer} from "../../components/Footer/Footer.tsx";

export const Apropos=()=> {
  return (
    <div>
      
      <Header />
       <Banner />
       <Collapse label="Introduction" />
    <hr />
    <Collapse2 label="Respect" />
    <hr />
    <Collapse3 label="Service" />
    <hr />
    <Collapse4 label="Sécurité" />
      <Footer/>

    </div>
  )};
