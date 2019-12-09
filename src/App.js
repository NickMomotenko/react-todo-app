import React , { useState } from 'react';
import { Sidebar , Tasks } from './components';


const App = () =>{
  const initialLists  = [
    {   
      "id":1 ,
      "name": "Фронтенд",
      "tasks" : [
        'Изучить JavaScript' , 
        'Изучить паттерны проектирования' , 
        'ReactJS Hooks (useState, useReducer, useEffect и т.д.)' , 
      ]
    },
    {   
      "id":2 ,
      "name": "Продажи",
      "tasks" : [1,2,3]
    },
    {   
      "id":3 ,
      "name": "Фильмы и сериалы",
      "tasks" : [1,2,3]
    },
    {   
      "id":4 ,
      "name": "Книги",
      "tasks" : [1,2,3]
    },
    {   
      "id":5 ,
      "name": "Личное",
      "tasks" : [1,2,3]
    }
  ];

  const [ lists , setLists ] = useState(initialLists);
  const [ activeItem, setActiveItem ] = useState(null);
  const [ isActivePopup, setIsActivePopup ] = useState(false);
  const [ inputValueFromPopup , setInputValueFromPopup ] = useState('');
  const [ activeColor, setActiveColor ] = useState(null);

  const addNewList = () =>{
    let newList = [...lists , { name: inputValueFromPopup , color : activeColor }];
    setLists(newList);
  }

  const deleteList = (currentItem) =>{
    let newListWithChanges = lists.filter(item => item.name !== currentItem.name );
    setLists(newListWithChanges);
  }

  const editList = (activeItem, name) =>{
    const newList = lists.map(item => {
      if (item.id === activeItem.id) {
        item.name = name;
      }
      return item;
    });
    setLists(newList);
  }
  
  // addNewTask = () =>{
      
  // }

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
           activeColor={activeColor}
           setActiveColor={setActiveColor}
           deleteList={deleteList}

           activeItem={activeItem}
           setActiveItem={setActiveItem}
        />
        <Tasks
          lists={lists}
          editList={editList}
          activeItem={activeItem}
        />
      </div>
    </div>
  ) 
}

export default App;
