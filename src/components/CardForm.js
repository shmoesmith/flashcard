import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
  super(props);
  this.addCard = this.addCard.bind(this);
}
addCard(e) {
    e.preventDefault();
    let card = this.refs.card.value;
    this.props.addCardsCard(card);
    this.refs.form.reset();
}
render() {
    return(
    <form ref="form" onSubmit={this.addCard}>
    <input ref="item" placeholder="add a card" />
    </form>
    )
 }
}
export default CardForm;