import React from 'react';
import CardsList from './CardsList'
import CardForm from './CardForm'

class CardsApp extends React.Component {
   this.addCardsCard = this.addCardsCard.bind(this);
   state = { cards: [{ question: 'Who is the boss', answer: 'Tony Danza' }, 
   { question: 'Will I pass?', answer: 'maybe'} ], id: 0 }

  addCardsCard(name) {
      let id = ++this.state.id;
      this.setState({
        cards: [
            { name, id },
            ...this.state.cards
        ],
        id
      })
  }

  render() {
      return (
          <div>
             <CardForm addCardsCard={this.addCardsCard} />
             <CardsList cards={this.state.cards} />
          </div>
      )
  }
}

export default CardsApp;