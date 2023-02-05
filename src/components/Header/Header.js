import React from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showGolderBall, sortBall } from "../../store/redusers/search";
import { logOut } from "../../store/redusers/auth";

import user from "../../assets/user.svg";
import upArrow from "../../assets/upArrow.svg";

const Header = ({ setModal }) => {
  const isLogIn = useSelector((state) => state.Auth.isLogedIn);
  const nickname = useSelector((state) => state.Auth.nickname);
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {isLogIn && <Search />}
        <div className={styles.headerLeft}>
          <div className={styles.user}>
            {nickname}
            {nickname && <img src={user} alt="user logo" />}
          </div>

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
              <img src={upArrow} alt="arrow" />
            </button>
          )}
        </div>
        {location.pathname !== "/" && isLogIn && (
          <Link to="/">
            <p>Повернутися до списку гравців</p>
          </Link>
        )}
        {location.pathname === "/" && isLogIn && (
          <Link to="/goldenBall">
            <p
              onClick={() => {
                dispatch(showGolderBall());
                dispatch(sortBall());
              }}
            >
              Володарі Золотого м'яча
            </p>
          </Link>
        )}

        <Link to="/favorite">
          {isLogIn && location.pathname !== "/favorite" && (
            <p>Особистий кабінет</p>
          )}
        </Link>
        {/* <div className={styles.headerLeft}>
        <div className={styles.user}>
          {nickname}
          {nickname && <img src={user} alt="user logo" />}
        </div>

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
            <img src={upArrow} alt="arrow" />
          </button>
        )}
      </div> */}
      </div>
    </div>
  );
};

export default Header;
