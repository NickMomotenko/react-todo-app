import React, { useRef, useState } from 'react';

import './Tasks.scss';
import button_cross from '../../assets/img/Vector.svg';


const Tasks = ({
    items,
    editList,
    activeItem,
    deleteItem,
    addNewTask,
    chechAllTaskOnComplited,
    allTasksComplited,
    deliteTask
}) => {

    const inputRef = useRef();
    const taskTextRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [inputIsActive, setInputIsAsctive] = useState(false);


    return (
        <form className="tasks" id="tasks">
            <div className="tasks__head">
                {activeItem ? activeItem.name : 'Все задачи'}{allTasksComplited && ' (все задания выполнены) '}
                {
                    inputIsActive &&
                    <>
                        <input
                            className="tasks__head-title"
                            type="text"
                            placeholder="Название категории"
                            ref={inputRef}
                            value={inputValue}
                            onChange={e => {
                                setInputValue(e.target.value);
                            }}
                        />
                        <button onClick={e => {
                            editList(activeItem, inputRef.current.value);
                            setInputValue('');
                            setInputIsAsctive(false);
                        }}>
                            Да изменить
                            </button>
                    </>
                }
                <div className="tasks__head-button">
                    {
                        !inputIsActive
                        &&
                        <button className="button button--edit" onClick={e => {
                            e.preventDefault();
                            setInputIsAsctive(true);
                        }}>
                            Изменить
                                </button>
                    }

                </div>
            </div>
            <ul className="tasks__list">
                {!activeItem
                    ?
                    items.map((item) => {
                        return (
                            <li className="tasks__item" key={item.id}>
                                <label className="tasks__label">
                                    <input type="checkbox" name="all" className="tasks__input input" onClick={e => { chechAllTaskOnComplited() }} />
                                    <span className="tasks__fake-input" ></span>
                                    <div className="tasks__name">{item.text}</div>
                                </label>
                                <button
                                    className="button"
                                    onClick={e => {
                                        e.preventDefault();
                                        deliteTask(item.id);
                                    }}
                                >
                                    <img src={button_cross} alt="" className="button__cross" />
                                </button>
                            </li>
                        );
                    })
                    :
                    items.map((item) => {
                        if (item.listId == activeItem.id) {
                            return (
                                <li className="tasks__item" key={item.id} >
                                    <label className="tasks__label">
                                        <input type="checkbox" name="all" className="tasks__input input" onClick={e => { chechAllTaskOnComplited() }} />
                                        <span className="tasks__fake-input" ></span>
                                        <div className="tasks__name">{item.text}</div>
                                    </label>
                                    <button
                                        className="button"
                                        onClick={e => {
                                            e.preventDefault();
                                            deliteTask(item.id);
                                        }}
                                    >
                                        <img src={button_cross} alt="" className="button__cross" />
                                    </button>
                                </li>
                            );
                        }
                    })
                }
            </ul>
            <div className="tasks__button">
                {
                    !inputIsActive &&
                    <button
                        className="button button--add-task"
                        onClick={e => {
                            e.preventDefault();
                            setInputIsAsctive(true);
                        }}
                    >
                        Новая задача
                        </button>
                }
                {
                    inputIsActive &&
                    <div className="tasks__add-block">
                        <input type="text" className="tasks__add-block_input" ref={taskTextRef} />
                        <div className="tasks__add-block_buttons">
                            <button
                                className="button"
                                onClick={e => {
                                    e.preventDefault();
                                    addNewTask(taskTextRef.current.value);
                                    setInputValue('');
                                }}
                            >
                                Добавить задачу
                            </button>
                            <button className="button" onClick={e => { setInputIsAsctive(false) }}>Отмена</button>
                        </div>
                    </div>
                }
            </div>
        </form>
    );
}

export default Tasks;