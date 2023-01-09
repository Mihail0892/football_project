import React from "react";
import FootballCard from "../FootballCard/FootballCard";
import styles from "./FootballList.module.scss";
import { useSelector } from "react-redux";

const FootballList = () => {
  const data = useSelector((state) => state.LikesAmount);
  const searchData = useSelector((state) => state.Search);
  console.log(data);
  
  return (
    <div className={styles.list}>
      {
      searchData
        ? searchData.map((item) => (
            <FootballCard
              key={item.id}
              idfoot={item.id}
              name={item.name}
              country={item.country}
              club={item.club}
              position={item.position}
              img={item.img}
              likes={item.likes}
            />
          )):
         data.map((item) => (
            <FootballCard
              key={item.id}
              idfoot={item.id}
              name={item.name}
              country={item.country}
              club={item.club}
              position={item.position}
              img={item.img}
              likes={item.likes}
            />
          ))}
    </div>
  );
};

export default FootballList;
