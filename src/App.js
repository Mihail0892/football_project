import React from "react";
import FootballList from "./components/FootballList/FootballList";

import Header from "./components/Header/Header";
// import Data from "./Data/data";

function App() {
//  const sortArray= Data.sort((a,b)=>a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0);
//  console.log(sortArray,"sortArray");

  return (
    <>
    <Header/>
    <FootballList/>
    </>
  );
}

export default App;
