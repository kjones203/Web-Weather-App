import React from 'react';
import './PopUp.css'

const PopUp = props => {
    return (
        <div className = "popup-box">
            <div className="popup__open">
                <span className="popup__close" onClick={props.closeWindow}>X</span>
                {props.content}
            </div>
        </div>
    );
};

export default PopUp;