import React from 'react';

import './Popup.scss';

const Popup = ({ setIsActivePopup }) =>{
    return(
        <div className="popup">
            <div className="popup__input">
                <input type="text" className="input"/>
            </div>
            <ul className="popup__colors">
                <li className="popup__colors-item">1</li>
                <li className="popup__colors-item">2</li>
                <li className="popup__colors-item">3</li>
            </ul>
            <div className="popup__colors-button">
                <button 
                        className="button button--green"
                        onClick={e=>{
                            
                        }}
                    >
                        Добавить
                </button>
                <button 
                    className="button button--cross"
                    onClick={e=>{
                        e.preventDefault();
                        setIsActivePopup(false);
                    }}
                >
                    X
                </button>
            </div>
        </div>
    )
}

export default Popup;