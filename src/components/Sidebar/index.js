import React, { useState } from 'react';

import './Sidebar.scss';

const Sidebar = (props) => {
    const [activeItem, setActiveItem] = useState(null);

    const { lists } = props;

    return (
        <div className="sidebar">
            <div className="sidebar__label">
                <span className="sidebar__title">
                    Все задачи
                </span>
            </div>
            <ul className="sidebar__list">
                {
                    lists.map((item) => (
                        <li className={activeItem ? 'sidebar__item sidebar__item--active' : 'sidebar__item'} key={item.id}>
                            <a href="#" className="sidebar__link" onClick={()=>{setActiveItem(item)}}>
                                <span className="sidebar__color-bar">{item.colorId}</span>
                                <div className="sidebar__title">
                                    {item.name}
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Sidebar;

