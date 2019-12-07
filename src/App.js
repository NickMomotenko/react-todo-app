import React , { useState } from 'react';
import { Sidebar , Tasks } from './components';


const App = () =>{
  const initialLists  = [
    {
      "name": "Продажи",
      "colorId": 5
    },
    {

      "name": "Фронтенд",
      "colorId": 4
    },
    {
      "name": "Фильмы и сериалы",
      "colorId": 3
    },
    {
      "name": "Книги",
      "colorId": 2
    },
    {
      "name": "Личное",
      "colorId": 1
    }
  ];

  const [ lists , setLists ] = useState(initialLists);
  const [ isActivePopup, setIsActivePopup ] = useState(false);
  const [ inputValueFromPopup , setInputValueFromPopup ] = useState('');
  const [activeColor, setActiveColor] = useState(null);

  const addNewList = () =>{
    let newList = [...lists , { name: inputValueFromPopup , color : activeColor }];
    setLists(newList);
  }

  const deleteList = (currentItem) =>{
    let newListWithChanges = lists.filter(item => item.name != currentItem.name );
    setLists(newListWithChanges);

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
           activeColor={activeColor}
           setActiveColor={setActiveColor}
           deleteList={deleteList}
        />
        <Tasks />
      </div>
    </div>
  ) 
}

export default App;
