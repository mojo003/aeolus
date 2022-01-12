import React from 'react';
import '../index.css';





const Presentation = ({ presentation }) => {
  return (
    <div className='container div_mission' >
      <h1 className='h1'>Mission de l'ensemble</h1>
      <p className='p_mission'>Quinette de cuivre, Notre mission est de faire découvrir la musique sous un autre angle en utilisant les winstruments de cuivres afin 
        d’interpréter la musique déjà connue. Musique éclectique, issue du classique, du jazz, de la pop et même des jeux vidéo, c’est l’approche 
        que nous avons choisie pour être en mesure de personnaliser vos événements avec des pièces connues et moins connues. </p>

    </div>
    
  ); 
}

Presentation.defaultProps = {
  presentation: 'Mission',
}




export default Presentation