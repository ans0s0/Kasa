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

    if(indexCurrent === 1 ) {
      // assigner l'index de la dernière image
      setIndexCurrent(length);
    } else {

          setIndexCurrent(indexCurrent - 1);
    }
      }


  const onNext = () => {
    // logique à ajouter pour le défilement infini
    
      console.log({indexCurrent,length})

    if(indexCurrent === length ) {
      // assigner l'index de la dernière image
      console.log(setIndexCurrent);
      setIndexCurrent(0);
    
    } else {
      setIndexCurrent(indexCurrent + 1);
    }
    
  }

    return (      
      
        <div className='Slideshow'>
       
          <img src={pictures[indexCurrent]} />
       
        <div className="arrows">
        <img src={logob} className="arrowSlide" onClick={onPrevious} />
        <img src={logon} className="arrowSlide" onClick={onNext} />
        </div>
        <h3>{indexCurrent+1}/{pictures.length}</h3> 
     </div>
    );
  };

 

  
  