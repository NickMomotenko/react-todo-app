import React from 'react';
import './Popup.scss';

const randomColor = require('randomcolor');
const colors = randomColor({count: 8});

const Popup = ({ 
        setIsActivePopup ,
        setInputValueFromPopup , 
        inputValueFromPopup, 
        addNewList,
        activeColor,
        setActiveColor
    }) => {
    
    return(
        <div className="popup">
            <div className="popup__input">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Название папки"
                    onChange={(e) => {
                        setInputValueFromPopup(e.target.value);
                    }}
                    value={inputValueFromPopup}
                />
            </div>
            <ul className="popup__colors">
                {
                   colors.map((color , index)=>(
                        <li 
                            key={index}
                            className={activeColor === color ? 'popup__colors-item popup__colors-item--active' : 'popup__colors-item'}
                            style={{background:`${color}`}}
                            onClick={e=>{setActiveColor(color)}}
                        >
                        </li>
                   )) 
                } 
            </ul>
            <div className="popup__colors-button">
                <button 
                        className="button button--green"
                        onClick={e=>{
                            addNewList();
                            setInputValueFromPopup('');  
                            setActiveColor(null);
                        }}
                    >
                        Добавить
                </button>
                <button 
                    className="button button--cross"
                    onClick={e=>{
                        e.preventDefault();
                        setIsActivePopup(false);
                        setInputValueFromPopup('');  
                        setActiveColor(null);
                    }}
                >
                    X
                </button>
            </div>
        </div>
    )
}

export default Popup;