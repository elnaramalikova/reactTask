import React from 'react';
import Card from "./card";
import "./App.scss";
// Start App

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            show: false,
            selectedCards: [],

        }

    }

    addToLocal = (e) => {

        const selectedCard = this.state.posts.filter((card) => parseInt(e.target.parentElement.parentElement.getAttribute('id')) === card.id);
        console.log(selectedCard);
        // let selectedCards= this.state.selectedCards.push(selectedCard);
        this.state.selectedCards.push(selectedCard);
        this.setState({show: true, selectedCards: this.state.selectedCards});
        console.log(this.state.selectedCards);
        localStorage.setItem("Cards", JSON.stringify(this.state.selectedCards));
        console.log(selectedCard)
    };


    componentDidMount() {
        fetch('/data.json'
        ).then(r => r.json())
            .then(data => {
                this.setState({
                    posts: data
                });

            }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });;

    }

    render() {
        console.log(this.state.posts)
        const data= Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}
                              addToLocal={this.addToLocal}
                              addToLocalFavs={this.addToLocalFavs}
                              backgroundcolor={this.state.backgroundcolor}
                              data={this.state.posts}


            />)

        return <div>
            <div className="app-card-list" id="app-card-list">
                {
                    data
                }

            </div>
        </div>
    }
}

export default App;
