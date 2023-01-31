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

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

const FootballCard = ({
  name,
  img,
  club,
  goldenBall,
  country,
  idfoot,
  likes,
  balls,
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
    };
    dispatch(addToFavourite(item));
  };

  const handleDecClick = () => {
    dispatch(decSearch(idfoot));
  };

  return (
    <>
      <div
        // onMouseEnter={() => dispatch(showClub(idfoot))}
        // onMouseLeave={() => dispatch(showClub(idfoot))}
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
        <div className={styles.club}>{club}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.position}>{goldenBall}</div>

        {showLable && <img className={styles.lable} src={img} alt="img"></img>}

        <div className={styles.likes}>
          {location.pathname !== "/favorite" &&
            location.pathname !== "/goldenBall" && (
              <>
                <img src={dislike} alt="dislike" onClick={handleDecClick}></img>
                {likes}
                <img src={like} alt="like" onClick={handleIncClick}></img>
              </>
            )}
          {location.pathname === "/goldenBall" && <>{balls}</>}
        </div>
      </div>
    </>
  );
};

export default FootballCard;
