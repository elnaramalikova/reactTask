import React from "react";

class Stars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundcolor: false,
            products:[this.props.details],
            favoriteCards: []
        };

    }

    addToLocalFavs = (e) => {
        const favCard = this.state.products[0].filter((card) => parseInt(e.target.parentElement.parentElement.parentElement.getAttribute('id')) === card.id);
        console.log(favCard);

        this.state.favoriteCards.push(favCard);
        this.setState({backgroundcolor:!this.state.backgroundcolor,favoriteCards: this.state.favoriteCards});
        // this.setState({ favoriteCards: this.state.favoriteCards});
        localStorage.setItem("Favorites", JSON.stringify(this.state.favoriteCards));
        console.log(this.state.favoriteCards);
    };
    render() {
        return (
            <>
                <a  className={this.state.backgroundcolor ? "colorTrue" : "colorFalse"} onClick={this.addToLocalFavs}><i className="fas fa-star" ></i></a>
                 </>
        )
    }
}
export default Stars;
