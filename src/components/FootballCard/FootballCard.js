import React from "react";
import { useDispatch } from "react-redux";
import { inc, dec } from "../../store/redusers/count";
import styles from "./FootballCard.module.scss";



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
  // const amount = useSelector((state) => state.LikesAmount);
  // console.log(amount);
  // const like = amount.map((item) => item.likes);
  
  // const hahdleLikes= ()=>{
  //   console.log(likes,'likes');
  //   dispatch(inc(idfoot));
  // }

  // const allLikes = JSON.parse(localStorage.getItem("allLikes"));
  // const like=allLikes.map((item)=>item.likes);
  return (
    <>
      <div className={styles.box}>
        <div className={styles.photo}>{img}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.club}>{club}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.position}>{position}</div>
        <button onClick={() => dispatch(dec(idfoot))}>-</button>
        {likes}
        <button onClick={() => dispatch(inc(idfoot))}>+</button>
      </div>
    </>
  );
};

export default FootballCard;
