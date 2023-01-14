import React from "react";
import FootballList from "./components/FootballList/FootballList";
import Header from "./components/Header/Header";
import SearchList from "./components/SearchList/SearchList";
import {Route,Routes} from 'react-router-dom'
import MyFavorite from "./components/MyFavorite/MyFavorite";
// import Data from "./Data/data";

function App() {
//  const sortArray= Data.sort((a,b)=>a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0);
//  console.log(sortArray,"sortArray");

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element= {<FootballList/>} />
    <Route path="/search" element= {<SearchList/>} />
    <Route path="/favorite" element={<MyFavorite/>}/>
    </Routes>
    

    </>
  );
}

export default App;
