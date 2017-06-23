import React from 'react';

class Card extends React.Component {
  state = { }
  render() {
    const { card } = this.props
    return (
      <div>
          <li>
          { card.isFlipped? card.answer : card.question } 
          <button onClick={ () => this.props.cardFlip(card.id)}>Show Answer!</button>
          {''}
          <button onClick={ () => this.props.deleteCard(card.id)}>Delete Card</button>
          <button>Edit Question/Answer</button>
        </li>  
      </div>
    )
  }
}
export default Card;