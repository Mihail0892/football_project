import React from "react";
import { useDispatch } from "react-redux";
import { inc, dec } from "../../store/redusers/count";
import styles from "./FootballCard.module.scss";

import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

const FootballCard = ({
  name,
  img,
  club,
  position,
  country,
  idfoot,
  likes,
}) => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div className={styles.box}>
        <div className={styles.photo}>
          <img src={img} alt="player"></img>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.club}>{club}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.likes}>
          <img src={dislike} alt='dislike' onClick={() => dispatch(dec(idfoot))}></img>
          {likes}
          <img src={like} alt="like" onClick={() => dispatch(inc(idfoot))}></img>
        </div>
      </div>
    </>
  );
};

export default FootballCard;
