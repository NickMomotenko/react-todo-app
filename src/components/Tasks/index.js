import React, { useRef, useState } from 'react';

import './Tasks.scss';

const Tasks = ({
        lists,
        editList,
        activeItem
    }) => {

    let inputRef = useRef();
    const [ inputValue, setInputValue ] = useState('');
    const [ inputIsActive, setInputIsAsctive ] = useState(false);
    
    return(
        <form className="tasks">
            <div className="tasks__head">
                    <div className="test">
                        {activeItem && activeItem.name}
                    </div>
                    {
                        inputIsActive && 
                            <>
                                <input 
                                    className="tasks__head-title"
                                    type="text"
                                    placeholder="Название категории"
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={e=>{
                                        setInputValue(e.target.value);
                                    }}
                                />
                                <button onClick={e=>{
                                    editList(activeItem , inputRef.current.value);
                                }}>
                                    Да изменить
                                </button>
                            </>
                    }
                    
                <div className="tasks__head-button">
                    {
                        !inputIsActive 
                            &&
                                <button className="button button--edit" onClick={e=>{
                                    e.preventDefault();
                                    setInputIsAsctive(true);                        
                                }}>
                                    Изменить
                                </button>
                    }
                    
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
        </form>
    );
}

export default Tasks;