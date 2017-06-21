import React from 'react'

class CardsList extends React.Component {
  
  render() {
    let cards = this.props.cards.map( (card) => {
      let show = false;

      showAnswer = () => {
        show = !show;
      }

      return (<li>{card.question} <button onClick={showAnswer}>Show Answer!</button></li>
        if show? { <li>{card.answer}</li> }
      )
     }   
    )
        return (
        <ul>
            {cards}
        </ul>
        )
  }
}

export default CardsList;