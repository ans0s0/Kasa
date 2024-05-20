import React from "react";


import {Banner} from "../../components/Banner/Banner.tsx";
import {ListLogement} from "./Logements/ListLogement.tsx";
import {Picture} from "../../components/Pictures/pictures.tsx"

import bannerImg from './banner.png';

export const Home=()=> {
  return (
    <>
      <Banner bannerImg={bannerImg} />
      <ListLogement />
    </>
  );
}


