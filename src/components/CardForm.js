import React from 'react';

class CardForm extends React.Component {
    state = { question: '', answer: '' }

    
    handleSubmit = (event) => {
        event.preventDefault();
        const { question, answer } = this.state;
        this.props.addCardsCard(question, answer);
        this.setState({ question: '', answer:'' });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <input
                name='question'
                placeholder="add a question"
                value={this.state.question}
               onChange={this.handleInputChange}
            />
            <input 
                name='answer'
                placeholder="add a answer"
                value={this.state.answer}
                onChange={this.handleInputChange}
            />
            <button value="Submit">Submit</button>
        </form>
        );
    }
}
export default CardForm;