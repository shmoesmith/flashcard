import React from 'react'
import Card from './Card'

    
const CardsList = ( props ) => {
    const cardslist = props.cards.map( (card) => {
      return <Card card={card} cardFlip={props.cardFlip} deleteCard={props.deleteCard} />
    });

  return(
    <ul>
      {cardslist}
    </ul>
  );
}

export default CardsList;