import React from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showGolderBall, sortBall } from "../../store/redusers/search";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <Search />
      {location.pathname !== "/" && (
        <Link to="/">
          <button>Повернутися до списку гравців</button>
        </Link>
      )}
      {location.pathname === "/" && (
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
        <button>Особистий кабінет</button>
      </Link>
    </div>
  );
};

export default Header;
