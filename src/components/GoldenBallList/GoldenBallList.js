import React, { useEffect } from "react";
import styles from "./GoldenBallList.module.scss";
import FootballCard from "../FootballCard/FootballCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortSearch} from "../../store/redusers/search";


const GoldenBallList = () => {
  const goldenPlayers = useSelector((state) => state.Search.goldenBall);
  const players = useSelector((state) => state.Search.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortSearch());
  }, [dispatch, players]);
 return (
    <>
      <div className={styles.list}>
        {goldenPlayers.map((item) => (
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
    </>
  );
};

export default GoldenBallList;