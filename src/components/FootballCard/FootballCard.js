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
          <div onClick={() => dispatch(removeFromFavourite(idfoot))}>X</div>
        )}
        <div className={styles.photo}>
          <img src={img} alt="player"></img>
        </div>
        <div className={styles.name}>{name}</div>
        <img className={styles.line} src={line} alt="line"/>
        <div className={styles.club}>{club}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.position}>{goldenBall}</div>

        {showLable && (
          <img className={styles.lable} src={imgClub} alt="img"></img>
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
          {location.pathname === "/goldenBall" && <>{balls}</>}
        </div>
      </div>
    </>
  );
};

export default FootballCard;
