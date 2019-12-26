import React, { useState, useEffect } from 'react';
import { Sidebar, Tasks } from './components';

import data from './assets/db.json';
const randomColor = require('randomcolor');

const App = () => {

  const [lists, setLists] = useState(data.lists);
  const [items, setItems] = useState(data.tasks);

  const [activeItem, setActiveItem] = useState(null);//active list
  const [activeTask, setActiveTask] = useState(null);//active task
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [inputValueFromPopup, setInputValueFromPopup] = useState('');
  const [activeColor, setActiveColor] = useState(null);
  const [allTasksComplited, setAllTasksComplited] = useState(false);

  let addNewList = () => {
    let newIDForList = lists[lists.length - 1].id + 1;
    let newList = [...lists, { id: newIDForList, name: inputValueFromPopup }];
    setLists(newList);
  }

  let deleteItem = (currentItem) => {
    let newListWithChanges = lists.filter(list => list.id !== currentItem.id);
    setLists(newListWithChanges);
  }

  let editList = (activeItem, name) => {
    const newList = lists.map(list => {
      if (list.id === activeItem.id) {
        list.name = name;
      }
      return list;
    });
    setLists(newList);
  }

  let addNewTask = (taskName) => {
    let newItem = {
      id: items[items.length - 1].id + 1,
      text: taskName,
      listId: activeItem.id
    }

    let newItems = [...items, newItem];
    setItems(newItems);
  }

  let deliteTask = (id) => {
    let newItemsWithChanges = items.filter(item => item.id !== id);
    setItems(newItemsWithChanges);
  }

  let chechAllTaskOnComplited = () => {
    let arr = document.getElementById('tasks');
    let arritems = Array.from(arr.elements.all);

    if (Array.prototype.every.call(arritems, function (e) { 
      return e.checked == true; 
    })) {
      setAllTasksComplited(true);
    } else {
      setAllTasksComplited(false);
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Sidebar
          lists={lists}
          setLists={setLists}

          isActivePopup={isActivePopup}
          setIsActivePopup={setIsActivePopup}

          inputValueFromPopup={inputValueFromPopup}
          setInputValueFromPopup={setInputValueFromPopup}

          addNewList={addNewList}
          deleteItem={deleteItem}

          activeColor={activeColor}
          setActiveColor={setActiveColor}

          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Tasks
          items={items}
          editList={editList}
          activeItem={activeItem}
          addNewTask={addNewTask}
          chechAllTaskOnComplited={chechAllTaskOnComplited}
          allTasksComplited={allTasksComplited}
          deliteTask={deliteTask}

          activeTask={activeTask}
          setActiveTask={setActiveTask}
        />
      </div>
    </div>
  )
}

export default App;
