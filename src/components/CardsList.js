import React from 'react'

class CardsList extends React.Component {
  
  render() {
    const cards = this.props.cards.map( (card) => {
      return (
        <li>
          { card.isFlipped? card.answer : card.question } 
          <button onClick={ () => this.props.cardFlip(card.id)}>Show Answer!</button>
          {''}
          <button onClick={ () => this.props.deleteCard(card.id)}>Delete Card</button>
        </li>
      )
     }   
   );

    return(
    <ul>
        {cards}
    </ul>
    )
  }
}

export default CardsList;