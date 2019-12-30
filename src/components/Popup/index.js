import React , { useState } from 'react';
import './Popup.scss';

import button_cross from '../../assets/img/Vector.svg';


const randomColor = require('randomcolor');
const colors = randomColor({count: 8});

const Popup = ({ 
        setIsActivePopup ,
        setInputValueFromPopup , 
        inputValueFromPopup, 
        addNewList,
        activeColor,
        setActiveColor,
        error
    }) => {

    return(
        <div className="popup">
            <div className="popup__input">
                {error.input}
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
            {error.color}
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
                    <img src={button_cross} alt="" className="button__cross-img"/>
                </button>
            </div>
        </div>
    )
}

export default Popup;