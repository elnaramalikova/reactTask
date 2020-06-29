import React, {Component, useState} from "react";
import CardBody from "./cardbody";
import CardHeader from "./cardheader";

class Card extends Component {
    render() {
        return (
            <article className="card" id={this.props.details.id}>
                <CardHeader category={this.props.details.category} image={this.props.details.image}
                            property={this.props.details.property}/>
                <CardBody title={this.props.details.title} text={this.props.details.text}
                          price={this.props.details.price}
                          addToLocal={this.props.addToLocal}
                          addToLocalFavs={this.props.addToLocalFavs}
                          backgroundcolor={this.props.backgroundcolor}
                          details={this.props.data}

                />

            </article>
        )
    }
}

export  default Card;