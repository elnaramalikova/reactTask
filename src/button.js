import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Button = ({text,onClick,backgroundcolor})=> {
    return (
        <button className="button" style={{backgroundcolor}}  onClick={onClick}>{text}</button>
    );
    Button.propTypes ={
        text: PropTypes.string,
        backgroundcolor: PropTypes.string,
        onClick: PropTypes.func
    }
}

export default Button;
