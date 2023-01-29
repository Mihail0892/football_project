import React from "react";
import FootballList from "./components/FootballList/FootballList";
import Header from "./components/Header/Header";
import SearchList from "./components/SearchList/SearchList";
import { Route, Routes } from "react-router-dom";
import MyFavorite from "./components/MyFavorite/MyFavorite";
import GoldenBallList from "./components/GoldenBallList/GoldenBallList";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<FootballList />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/favorite" element={<MyFavorite />} />
        <Route path="/goldenBall" element={<GoldenBallList />} />
      </Routes>
    </>
  );
}

export default App;
