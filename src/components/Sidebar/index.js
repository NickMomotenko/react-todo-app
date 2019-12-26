import React, { useEffect, useRef } from 'react';
import Dragula from 'react-dragula';
import Popup from '../Popup';


import './Sidebar.scss';
import button_cross from '../../assets/img/Vector.svg';

const Sidebar = ({
    lists,
    isActivePopup,
    setIsActivePopup,
    inputValueFromPopup,
    setInputValueFromPopup,
    addNewList,
    activeColor,
    setActiveColor,
    deleteItem,
    activeItem,
    setActiveItem,
}) => {

    let dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__label">
                <span className="sidebar__title">
                    Все задачи
                </span>
            </div>
            <ul className="sidebar__list" ref={dragulaDecorator}>
                {
                    lists.map((item, index) => {
                        return (
                            <SidebarItem
                                key={index}
                                item={item}
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                deleteItem={deleteItem}
                            />

                        )
                    })
                }
            </ul>
            <div className="sidebar__button">
                <button
                    className="button button--add-list"
                    onClick={e => {
                        e.preventDefault();
                        setIsActivePopup(true);
                    }}
                >
                    Добавить папку
                </button>
                {
                    isActivePopup
                    &&
                    <Popup
                        setIsActivePopup={setIsActivePopup}
                        inputValueFromPopup={inputValueFromPopup}
                        setInputValueFromPopup={setInputValueFromPopup}
                        addNewList={addNewList}
                        activeColor={activeColor}
                        setActiveColor={setActiveColor}
                    />
                }
            </div>
        </div>
    );
}

export default Sidebar;


const SidebarItem = ({ item, activeItem, deleteItem, setActiveItem }) => {
    return (
        <li className={activeItem === item ? 'sidebar__item sidebar__item--active' : 'sidebar__item'} key onClick={e => { setActiveItem(item) }}>
            <div className="sidebar__block">
                <span className="sidebar__color-bar" style={{ background: `${item.color} ` }}></span>
                <div className="sidebar__title">
                    {item.name}
                </div>
            </div>
            <button
                className="button"
                onClick={e => {
                    e.preventDefault();
                    deleteItem(item);
                }}
                style={{ opacity: activeItem == item ? 1 : 0, pointerEvents: activeItem == item ? 'auto' : 'none' }}
            >
                <img src={button_cross} alt="" className="button__cross" />
            </button>
        </li>
    )
}

