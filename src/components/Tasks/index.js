import React, { useRef, useState } from 'react';
import Dragula from 'react-dragula';

import './Tasks.scss';
import button_cross from '../../assets/img/Vector.svg';
import button_edit from '../../assets/img/edit.svg';
import button_accept from '../../assets/img/accept.svg';


const Tasks = ({
    items,
    editList,
    activeItem,
    addNewTask,
    chechAllTaskOnComplited,
    allTasksComplited,
    deliteTask,
    activeTask,
    setActiveTask
}) => {

    const inputRef = useRef();
    const taskTextRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [inputIsActive, setInputIsAsctive] = useState(false);

    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };


    return (
        <form className="tasks" id="tasks">
            <div className="tasks__head">
                <div
                    className="tasks__head-title"
                    style={{ color: activeItem && activeItem.color, width: inputIsActive ? '0' : 'auto', visibility: inputIsActive ? 'hidden' : 'visible' }}
                >
                    {activeItem && activeItem.name}{allTasksComplited && ' (все задания выполнены) '}
                </div>
                {
                    inputIsActive &&
                    <>
                        <input
                            className="tasks__head-input input"
                            type="text"
                            placeholder="Изменить"
                            ref={inputRef}
                            value={inputValue}
                            onChange={e => {
                                setInputValue(e.target.value);
                            }}
                        />
                        <button className="button" onClick={e => {
                            e.preventDefault();
                            if(inputRef.current.value.length){
                                editList(activeItem, inputRef.current.value);
                                setInputValue('');
                                setInputIsAsctive(false);
                            }else{
                                inputRef.current.placeholder = 'Введите новое значение';
                                inputRef.current.style.borderColor = 'red';
                            }
                        }}>
                            <img src={button_accept} alt="Accept" className="button__accept" />
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
                            <img src={button_edit} alt="Edit" className="button__edit" />
                        </button>
                    }

                </div>
            </div>
            <ul className="tasks__list" ref={dragulaDecorator}>
                {!activeItem
                    ?
                    items.map((item) => {
                        return (
                            <TasksItem
                                key={item.id}
                                item={item}
                                activeTask={activeTask}
                                setActiveTask={setActiveTask}
                                chechAllTaskOnComplited={chechAllTaskOnComplited}
                                deliteTask={deliteTask}
                            />
                        );
                    })
                    :
                    items.map((item) => {
                        if (item.listId == activeItem.id) {
                            return (
                                <TasksItem
                                    key={item.id}
                                    item={item}
                                    activeTask={activeTask}
                                    setActiveTask={setActiveTask}
                                    chechAllTaskOnComplited={chechAllTaskOnComplited}
                                    deliteTask={deliteTask}
                                />
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


const TasksItem = ({ item, activeTask, setActiveTask, chechAllTaskOnComplited, deliteTask }) => {
    return (
        <li className={activeTask == item ? "tasks__item tasks__item--active" : "tasks__item"} key onClick={e => { setActiveTask(item) }} >
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
                style={{ opacity: activeTask == item ? 1 : 0, pointerEvents: activeTask == item ? 'auto' : 'none' }}
            >
                <img src={button_cross} alt="" className="button__cross" />
            </button>
        </li>
    )
}