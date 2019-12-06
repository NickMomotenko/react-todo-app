import React, { useState } from 'react';
import Popup from '../Popup';

import './Sidebar.scss';

const Sidebar = ({ lists , isActivePopup, setIsActivePopup }) => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <div className="sidebar">
            <div className="sidebar__label">
                <span className="sidebar__title">
                    Все задачи
                </span>
            </div>
            <ul className="sidebar__list">
                {
                    lists.map(item=>{
                        return(
                            <SidebarItem 
                                key={item.id}
                                item={item} 
                                activeItem={activeItem}
                                setActiveItem={setActiveItem} 
                            />

                        )
                    })
                }
            </ul>
            <div className="sidebar__button">
                <button 
                    className="button button--add-list"
                    onClick={e=>{
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
                            />
                }
            </div>
        </div>
    );
}

export default Sidebar;


const SidebarItem = ({ item , activeItem, setActiveItem }) =>{
    return(
        <li className={activeItem === item ? 'sidebar__item sidebar__item--active' : 'sidebar__item'} key>
            <a href="#" className="sidebar__link" onClick={(e)=>{setActiveItem(item)}}>
                <span className="sidebar__color-bar">{item.colorId}</span>
                <div className="sidebar__title">
                    {item.name}
                </div>
                {
                    activeItem 
                        && 
                            <button 
                                className="button button--cross"
                                onClick={e=>{
                                    e.preventDefault();
                                    setActiveItem(null);
                                }}
                            >
                                X
                            </button>
                }
            </a>
        </li>
    )
}

