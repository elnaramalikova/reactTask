import React, {Component, useState,useEffect} from 'react';
import Stars from "./starts";
import ModalWindow from "./ModalWindow";
import Button from "./button";

class CardBody extends Component{
    constructor(){
        super()
        this.state = {
            show: false,
            selectedcard:[]
        }
    }
    addToLocal = (e) => {

    }
    openModal() {
        this.setState( prevState => (
            {show: !prevState.show}))
    }

    closeModal(e) {
        if(e.target.id === "modal") {
            this.setState({show: false})
        }
    }


    render() {
        return (
            <div className="card-body">
                <div className="h3_span"><span className="title">{this.props.title}</span><i className="by">by Artist</i></div>

                <Stars addToLocalFavs={this.props.addToLocalFavs} backgroundcolor={this.props.backgroundcolor} details={this.props.details}/>

                <p className="body-content">{this.props.text}</p>
                <h4 className="cost">{this.props.price}</h4>

                <button id="button" onClick={() => this.openModal()} >Add to cart</button>
                {this.state.show && <div id='modal' onClick={(e) => this.closeModal(e)}>
                    <ModalWindow
                        text="Do you want to add this product ?"
                        closeicon={true}
                        close={this.closeModal}
                        actions={[
                            <div id="btn">
                                <button className="button" onClick={this.props.addToLocal}>Add</button>
                                <button className="button" onClick={() => this.openModal()} >Cancel</button>
                            </div>
                        ]}

                    />
                </div>}

            </div>
        )
    }
}
export  default  CardBody;
