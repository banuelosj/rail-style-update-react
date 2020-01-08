import React from 'react';
import RailList from './RailList';
import AppHeader from './AppHeader';
import axios from 'axios';

class App extends React.Component {

    state = {cards: [], selectedCards: []};

    componentDidMount = async() => {
        //load the rails via axios
        const response = await axios.get(process.env.PUBLIC_URL + "./rail-card-items.json");
        this.setState({
            cards: response.data.items
        });
    }

    onClickHandler = (card) => {
        //console.log(card.target.id);
        if(this.state.selectedCards.length < 0 || !this.state.selectedCards.includes(card.target.id)) {
            //add the card to the selected cards
            card.target.style.backgroundColor = "#5889B3";
            this.setState({
                selectedCards: this.state.selectedCards.concat([card.target.id])
            });
        } else if(this.state.selectedCards.length > 0 && this.state.selectedCards.includes(card.target.id)) {
            //card already exists so we are going to have to remove
            //change the color to olive
            card.target.style.backgroundColor = "#B5CC18";
            this.setState({
                selectedCards: this.state.selectedCards.filter((data) => data !== card.target.id)
            });
        } else {
            //TODO: do nothing
        }
        
    }

    render() {
        return (
            <div>
                <AppHeader />
                <div className="ui three column grid">
                    <div className="column">
                        <div className="ui olive segment">
                            Form
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui right very close rail">
                            <RailList onClick={this.onClickHandler} cards={this.state.cards}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    };
};

export default App;