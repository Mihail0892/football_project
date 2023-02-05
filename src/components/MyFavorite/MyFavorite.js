import React from "react";
import { useSelector } from "react-redux";
import FootballCard from "../FootballCard/FootballCard";
import styles from "./MyFavorite.module.scss";

const MyFavorite = () => {
  const favouritePlayers = useSelector((state) => state.Search.favourite);
  return (
    <>
    <div className={styles.main}>
      <div className={styles.list}>
        {favouritePlayers.map((item) => (
          <FootballCard
            key={item.idfoot}
            idfoot={item.idfoot}
            name={item.name}
            country={item.country}
            club={item.club}
            position={item.position}
            img={item.img}
            likes={item.likes}
            balls={item.quantityOfBalls}
            imgClub={item.imgClub}
            imgCountry={item.imgCountry}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default MyFavorite;
