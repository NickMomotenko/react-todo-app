import React , { useState, useEffect } from 'react';
import { Sidebar , Tasks } from './components';

import data from './assets/db.json';
const randomColor = require('randomcolor');

const App = () =>{

  const [ lists , setLists ] = useState(data.lists);
  const [ items , setItems ] = useState(data.tasks);

  const [ activeItem, setActiveItem ] = useState(null);
  const [ isActivePopup, setIsActivePopup ] = useState(false);
  const [ inputValueFromPopup , setInputValueFromPopup ] = useState('');
  const [ activeColor, setActiveColor ] = useState(null);

  let addNewList = () =>{
    let newIDForList = lists[lists.length -1].id + 1;
    let newList = [...lists , {id: newIDForList, name: inputValueFromPopup}];
    setLists(newList);
  }

  let deleteList = (currentItem) =>{
    let newListWithChanges = lists.filter(item => item.id !== currentItem.id );
    setLists(newListWithChanges);    
  }

  let editList = (activeItem, name) =>{
    const newList = lists.map(list => {
      if (list.id === activeItem.id) {
        list.name = name;
      }
      return list;
    });
    setLists(newList);
  }
  
  let addNewTask = (taskName) =>{
    let newItem = { 
      id:  items[items.length -1].id + 1, 
      text: taskName , 
      listId : activeItem.id
    }

    let newItems = [ ...items , newItem];
    setItems(newItems);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Sidebar
           lists={lists}

           isActivePopup={isActivePopup}
           setIsActivePopup={setIsActivePopup}

           inputValueFromPopup={inputValueFromPopup}
           setInputValueFromPopup={setInputValueFromPopup}

           addNewList={addNewList}
           deleteList={deleteList}

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
        />
      </div>
    </div>
  ) 
}

export default App;
