import React, { useState } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showGolderBall, sortBall } from "../../store/redusers/search";
import { logOut } from "../../store/redusers/auth";

import user from "../../assets/user.svg";
import upArrow from "../../assets/upArrow.svg";
import close from "../../assets/close.png";
import menu from "../../assets/menu.png";

const Header = ({ setModal }) => {
  const [burger, setBurger] = useState(false);
  const isLogIn = useSelector((state) => state.Auth.isLogedIn);
  const nickname = useSelector((state) => state.Auth.nickname);
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      {burger && (
        <div className={styles.burgerHeader}>
          <img
            className={styles.closeIcon}
            src={close}
            alt="close"
            onClick={() => setBurger(false)}
          />
          <div className={styles.links}>
            {location.pathname !== "/" && isLogIn && (
              <Link onClick={() => setBurger(false)} to="/">
                <p>Повернутися до списку гравців</p>
              </Link>
            )}
            {(location.pathname === "/" || location.pathname === "/favorite") &&
              isLogIn && (
                <Link onClick={() => setBurger(false)} to="/goldenBall">
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

            <Link onClick={() => setBurger(false)} to="/favorite">
              {isLogIn && location.pathname !== "/favorite" && (
                <p>Улюблені гравці</p>
              )}
            </Link>
          </div>
        </div>
      )}
      {/* Обычное меню */}
      <div className={styles.header}>
        {isLogIn && (
          <img
            onClick={() => setBurger(true)}
            className={styles.burgerImage}
            src={menu}
            alt="burger"
          />
        )}
        {isLogIn && <Search />}
        {location.pathname !== "/" && isLogIn && (
          <Link to="/">
            <p>Повернутися до списку гравців</p>
          </Link>
        )}
        {(location.pathname === "/" || location.pathname === "/favorite") &&
          isLogIn && (
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
            <p>Улюблені гравці</p>
          )}
        </Link>
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
                localStorage.clear();
                dispatch(logOut());
              }}
            >
              Вихід
              <img src={upArrow} alt="arrow" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
