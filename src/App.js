import React from 'react';
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

class App extends React.Component{

  state = {
    "lists": [
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
    ]
  };

  render(){
    const { lists } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <Sidebar lists={lists} />
          <Tasks />
        </div>
      </div>
    )
  } 
}

export default App;
