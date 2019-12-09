import React from 'react';
import Popup from '../Popup';

import './Sidebar.scss';

const Sidebar = ({  
        lists , 
        isActivePopup,
        setIsActivePopup,
        inputValueFromPopup,
        setInputValueFromPopup,
        addNewList,
        activeColor,
        setActiveColor,
        deleteList,
        activeItem,
        setActiveItem
    }) => {
    
    return (
        <div className="sidebar">
            <div className="sidebar__label">
                <span className="sidebar__title">
                    Все задачи
                </span>
            </div>
            <ul className="sidebar__list">
                {
                    lists.map((item, index)=>{
                        return(
                            <SidebarItem 
                                key={index}
                                item={item} 
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                deleteList={deleteList}
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


const SidebarItem = ({ item , activeItem, deleteList, setActiveItem }) =>{
    return(
        <li className={activeItem === item ? 'sidebar__item sidebar__item--active' : 'sidebar__item'} key>
            <a href="#" className="sidebar__link" onClick={e=>{setActiveItem(item)}}>
                <span className="sidebar__color-bar"></span>
                <div className="sidebar__title">
                    {item.name}
                </div>
                {
                    activeItem === item
                        && 
                            <button 
                                className="button button--cross"
                                onClick={e=>{
                                    e.preventDefault();
                                    deleteList(item);
                                }}
                            >
                                X
                            </button>
                }
            </a>
        </li>
    )
}

