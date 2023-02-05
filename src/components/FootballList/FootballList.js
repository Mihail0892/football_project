import React, { useEffect } from "react";
import FootballCard from "../FootballCard/FootballCard";
import styles from "./FootballList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { sortSearch } from "../../store/redusers/search";

const FootballList = () => {
  const players = useSelector((state) => state.Search.players);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortSearch());
  }, [dispatch, players]);

  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {players.map((item) => (
          <FootballCard
            key={item.id}
            idfoot={item.id}
            name={item.name}
            country={item.country}
            club={item.club}
            goldenBall={item.goldenBall}
            img={item.img}
            likes={item.likes}
            balls={item.quantityOfBalls}
            imgClub={item.imgClub}
            imgCountry={item.imgCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default FootballList;
