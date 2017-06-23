import React from 'react';
import CardsList from './CardsList'
import CardForm from './CardForm'

class CardsApp extends React.Component {
  state = { cards: [{ question: 'Who is the boss', answer: 'Tony Danza', id: 0 , isFlipped: false}], id: 1 }

  addCardsCard = (newQuestion, newAnswer) => {
		console.log(newQuestion, newAnswer) 
		let id = ++this.state.id;
		this.setState({
			cards: [...this.state.cards,
				{ question: newQuestion, answer: newAnswer, id, isFlipped: false }],
			id
		})
	}

//create a function that takes in question, answer, and ID

    updateCard = (editedQ, editedA, existingID) => {
      this.setState({
		  cards: [...this.state.cards, {question: editedQ, answer: editedA, id: existingID, isFlipped:false }]
	  })
	  
	  //run component did mount
      //find out if there is an id
      //if no id, set state to a default and render blank form
      //if id, populate form so id can be updated
    }

	//create a function that takes an id and update state of that card to isFlipped true
	cardFlip = (id) => {
		const flashcards = this.state.cards.map( (card) => {
			if (card.id === id)
				return { ...card, isFlipped: !card.isFlipped };
			return card;
		});
		this.setState({ cards: flashcards })
	}

	//create a function to pass down to cardlist that takes in a card idea and deletes that card
	//use filter?
	deleteCard = (id) => {
		const allCards = this.state.cards
		const removedCard = allCards.filter( (card) => {
			return card.id !== id
		})
		this.setState({ cards: removedCard })
	}

  render() {
		return (
			<div>
				<h3>Begin flashcards by adding a question and answer!</h3>
				<CardForm addCardsCard={this.addCardsCard} />
				<CardsList cards={this.state.cards} cardFlip={this.cardFlip} deleteCard={this.deleteCard}
				updateCard={this.updateCard} />
			</div>
		)
  }
}

export default CardsApp;