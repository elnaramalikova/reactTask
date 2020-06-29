import React, {Component} from 'react';
const ModalWindow =({closeicon, actions, text, close})=> {
    return (
        <div className="modal-box">
            <div className="header">
                {text}
                {closeicon && <button onClick={close} className="close">X</button>}
            </div>
            {actions}
        </div>
    );

}

export default ModalWindow;
