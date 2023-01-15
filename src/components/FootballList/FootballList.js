import React, { useEffect } from "react";
import FootballCard from "../FootballCard/FootballCard";
import styles from "./FootballList.module.scss";
import { useSelector,useDispatch } from "react-redux";
// import { sort } from "../../store/redusers/count";
import { sortSearch } from "../../store/redusers/search";

const FootballList = () => {
  const players = useSelector((state) => state.Search.players);
  
  // const searchData = useSelector((state) => state.Search);
  // console.log(data);
  // const actualData = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(sortSearch());
  },[dispatch,players]);

  // useEffect(()=>{
  //   dispatch(sortSearch());
  // },[dispatch,data,searchData]);

  return (
    <div className={styles.list}>
      {
      // searchData
      //   ? searchData.map((item) => (
      //       <FootballCard
      //         key={item.id}
      //         idfoot={item.id}
      //         name={item.name}
      //         country={item.country}
      //         club={item.club}
      //         position={item.position}
      //         img={item.img}
      //         likes={item.likes}
      //       />
      //     )):
         players.map((item) => (
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
