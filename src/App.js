import React, { useState } from "react";
import FootballList from "./components/FootballList/FootballList";
import Header from "./components/Header/Header";
import SearchList from "./components/SearchList/SearchList";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import MyFavorite from "./components/MyFavorite/MyFavorite";
import GoldenBallList from "./components/GoldenBallList/GoldenBallList";
import AuthForm from "./components/AuthForm/AuthForm";
import styles from "./App.module.scss";

function App() {
  const [modal, setModal] = useState(false);
  const isLogIn = useSelector((state) => state.Auth.isLogedIn);

  return (
    <div className={styles.box}>
      <Header setModal={setModal} />

      {modal && <AuthForm setModal={setModal} />}
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
