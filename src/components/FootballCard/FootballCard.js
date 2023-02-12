import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  incSearch,
  decSearch,
  addToFavourite,
  removeFromFavourite,
} from "../../store/redusers/search";
import styles from "./FootballCard.module.scss";

import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import line from "../../assets/line.png";
import golden from "../../assets/golden.svg";
import deleteIcon from "../../assets/deleteIcon.svg";

const FootballCard = ({
  name,
  img,
  club,
  goldenBall,
  country,
  idfoot,
  likes,
  balls,
  imgClub,
  imgCountry,
}) => {
  // window.matchMedia();
  const [showLable, setShowLable] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleIncClick = () => {
    dispatch(incSearch(idfoot));
    const item = {
      name,
      img,
      club,
      goldenBall,
      country,
      idfoot,
      likes,
      balls,
      imgClub,
      imgCountry,
    };
    dispatch(addToFavourite(item));
  };

  const handleDecClick = () => {
    dispatch(decSearch(idfoot));
  };

  return (
    <>
      <div
        onMouseEnter={() => setShowLable(true)}
        onMouseLeave={() => setShowLable(false)}
        className={styles.box}
      >
        {location.pathname === "/favorite" && (
          <div className={styles.delete}>
            <img
              src={deleteIcon}
              alt="delete"
              onClick={() => dispatch(removeFromFavourite(idfoot))}
            />
          </div>
        )}
        <div className={styles.photo}>
          <img src={img} alt="player"></img>
        </div>
        <div className={styles.name}>{name}</div>
        <img className={styles.line} src={line} alt="line" />
        <div className={styles.club}>{club}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.position}>{goldenBall}</div>

        {showLable && (
          <>
            <img className={styles.lable} src={imgClub} alt="img" />
            <img className={styles.flag} src={imgCountry} alt="img" />
          </>
        )}

        <div className={styles.likes}>
          {location.pathname !== "/favorite" &&
            location.pathname !== "/goldenBall" && (
              <div>
                <img src={dislike} alt="like" onClick={handleIncClick}></img>
                {likes}
                <img src={like} alt="dislike" onClick={handleDecClick}></img>
              </div>
            )}
        </div>
        <div className={styles.balls}>
          {location.pathname === "/goldenBall" && (
            <>
              {balls}
              <img
                className={styles.golden}
                src={golden}
                alt="golden ball"
              ></img>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FootballCard;
