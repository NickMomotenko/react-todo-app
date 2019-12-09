import React from 'react';

import './Tasks.scss';

const Tasks = () => {
    return(
        <div className="tasks">
            <div className="tasks__head">
                <div className="tasks__head-title">Имя категории</div>
                <div className="tasks__head-button">
                    <button className="button button--edit">Изменить</button>
                </div>
            </div>
            <ul className="tasks__list">
                <li className="tasks__item">
                    <input type="checkbox" className="tasks__input input"/>
                    <div className="tasks__name">Имя таски</div>
                </li>
            </ul>
            <div className="tasks__button">
                <button className="button button--add-task">Новая задача</button>
            </div>
        </div>
    );
}

export default Tasks;