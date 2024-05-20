import React from "react";
import './banner.scss'

type BannerProps = {
  bannerImg: string
}

export const Banner = ({bannerImg}: BannerProps) => {
  return (
    <div className="banner">
      <p>Chez vous, partout et ailleurs</p>
      <img src={bannerImg}  alt=""/>
    </div>
  );
};


