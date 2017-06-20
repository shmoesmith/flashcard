import React from 'react';
import CardsList from './CardsList'
import CardForm from './CardForm'

class CardsApp extends React.Component {
   state = { cards: [{ question: 'Who is the boss', answer: 'Tony Danza' }], id: 0 }

  addCardsCard = (newQuestion, newAnswer) => { 
      let id = ++this.state.id;
      this.setState({
        cards: [...this.state.cards,
            { question: newQuestion, answer: newAnswer}],
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