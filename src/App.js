import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import FootballList from "./components/FootballList/FootballList";
import SearchList from "./components/SearchList/SearchList";
import MyFavorite from "./components/MyFavorite/MyFavorite";
import GoldenBallList from "./components/GoldenBallList/GoldenBallList";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import Header from "./components/Header/Header";

function App() {
  const [modal, setModal] = useState(false);
  const isLogIn = useSelector((state) => state.Auth.isLogedIn);

  return (
    <div>
      <Header setModal={setModal}/>
      <HomeComponent modal={modal} setModal={setModal}/>
      {isLogIn && (
        <>
          <Routes>
            <Route path="/" element={<FootballList />} />
            <Route path="/search" element={<SearchList />} />
            <Route path="/favorite" element={<MyFavorite />} />
            <Route path="/goldenBall" element={<GoldenBallList />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
