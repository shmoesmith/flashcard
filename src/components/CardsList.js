import React from 'react'

class CardsList extends React.Component {
  render() {
    let cards = this.props.cards.map( (card) => {
      return (<li>{card.question}</li>)
    });
    return (
    <ul>
        {cards}
    </ul>
    )
  }
}

export default CardsList;