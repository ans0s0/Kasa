import React, { useState } from 'react';
import '../Carrousel/Carrousel.scss'
import logob from '../../Images/arrow_back.png'
import logon from '../../Images/arrow_next.png'

type CarrouselProps = {
  pictures: string[];
}

export const Carrousel = ({ pictures }: CarrouselProps ) => {

  const [indexCurrent, setIndexCurrent] = useState(0);
  const length = pictures.length;

  const onPrevious = () => {
    // logique à ajouter pour le défilement infini
    setIndexCurrent(indexCurrent - 1);
 
    if(indexCurrent === 1 ) {
      // assigner l'index de la dernière image
      setIndexCurrent(indexCurrent === 1 ? length : indexCurrent -1 );
    }
    
  }

  const onNext = () => {
    // logique à ajouter pour le défilement infini
    
    setIndexCurrent(indexCurrent + 1);
   
    if(indexCurrent === length ) {
      // assigner l'index de la dernière image
      setIndexCurrent(indexCurrent === length ? 1 : indexCurrent + 1);
    }
    
  }

    return (      
        <div className='Carrousel'>
        <div className='Slideshow'>
        {pictures.map((picture,id) => (
          <img src={picture} className={id === indexCurrent ? "indexCurrent":"indexCurrent-hidden"} key={id} />
        ))}
        <div className="arrows">
        <img src={logob} className="arrowSlide" onClick={onPrevious} />
        <img src={logon} className="arrowSlide" onClick={onNext} />
        </div></div>
        <h3>{indexCurrent}/{pictures.length}</h3> 
     </div>
    );
  };

 

  
  