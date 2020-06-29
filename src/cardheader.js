import React from "react";

class CardHeader extends React.Component {
    render() {
        return (
            <img className="card-header" src={this.props.image}/>
        )
    }
}

export default CardHeader;
