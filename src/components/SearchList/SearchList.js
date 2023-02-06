import React, { useEffect } from "react";
import styles from "./SearchList.module.scss";
import FootballCard from "../FootballCard/FootballCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortSearch } from "../../store/redusers/search";

const SearchList = () => {
  const searchPlayers = useSelector((state) => state.Search.searchPlayers);
  const players = useSelector((state) => state.Search.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortSearch());
  }, [dispatch, players]);
  // if (searchPlayers.length === 0) return "Гравця не знайдено";
  // else
  return (
    <>
      {searchPlayers.length === 0 ? (
        <div className={styles.notFound}>
          <h1>Ти якусь хєрню пишеш</h1>
          </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.list}>
            {searchPlayers.map((item) => (
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
      )}
    </>
  );
};

export default SearchList;
