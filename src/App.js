import React , { useState } from 'react';
import { Sidebar , Tasks } from './components';

const App = () =>{
  const initialLists  = [
    {
      "id": 1,
      "name": "Продажи",
      "colorId": 5
    },
    {
      "id": 2,
      "name": "Фронтенд",
      "colorId": 4
    },
    {
      "id": 3,
      "name": "Фильмы и сериалы",
      "colorId": 3
    },
    {
      "id": 4,
      "name": "Книги",
      "colorId": 2
    },
    {
      "id": 5,
      "name": "Личное",
      "colorId": 1
    }
  ];

  const [ lists , setLists ] = useState(initialLists);
  const [ isActivePopup, setIsActivePopup ] = useState(false);


  return (
    <div className="wrapper">
      <div className="container">
        <Sidebar
           lists={lists} 
           isActivePopup={isActivePopup}
           setIsActivePopup={setIsActivePopup}
        />
        <Tasks />
      </div>
    </div>
  ) 
}

export default App;
