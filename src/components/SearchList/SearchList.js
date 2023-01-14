import React, { useEffect } from "react";
import styles from "./SearchList.module.scss";
import FootballCard from "../FootballCard/FootballCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import {sortSearch} from '../../store/redusers/search'

const SearchList = () => {
  const searchState = useSelector((state) => state.Search);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(sortSearch())
  },[dispatch, searchState])
  return (
    <><Link to='/'><button>Повернутися до списку гравців</button></Link>
    <div className={styles.list}>
      {searchState.map((item) => (
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
    </>
  );
};

export default SearchList;
