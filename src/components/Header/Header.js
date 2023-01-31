import React from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showGolderBall, sortBall } from "../../store/redusers/search";
import { logOut } from "../../store/redusers/auth";

const Header = ({ setModal }) => {
  const isLogIn = useSelector((state) => state.Auth.isLogedIn);
  const nickname = useSelector((state) => state.Auth.nickname);
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      {isLogIn && <Search />}
      {location.pathname !== "/" && isLogIn && (
        <Link to="/">
          <button>Повернутися до списку гравців</button>
        </Link>
      )}
      {location.pathname === "/" && isLogIn && (
        <Link to="/goldenBall">
          <button
            onClick={() => {
              dispatch(showGolderBall());
              dispatch(sortBall());
            }}
          >
            Володарі Золотого м'яча
          </button>
        </Link>
      )}

      <Link to="/favorite">
        {isLogIn && location.pathname !== "/favorite"&&  <button>Особистий кабінет</button>}
      </Link>
      {!isLogIn ? (
        <button onClick={() => setModal(true)}>Вхід</button>
      ) : (
        <button
          onClick={() => {
            localStorage.removeItem("nickname");
            dispatch(logOut());
          }}
        >
          Вихід
        </button>
      )}
      {nickname}
    </div>
  );
};

export default Header;
