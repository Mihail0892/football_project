// import React, { useEffect } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { sort } from "../../store/redusers/count";
// import { sortSearch } from "../../store/redusers/search";

const Header = () => {
  // const dispatch = useDispatch();
  // const sortData = useSelector((state) => state.LikesAmount);
  // const searchData = useSelector((state) => state.Search);

  
  // useEffect(() => {
  //   dispatch(sort());
  // }, [dispatch, sortData]);

  return (
    <div className={styles.header}>
      <Search />
      <Link to='/favorite'><button>Особистий кабінет</button></Link>
    </div>
  );
};

export default Header;
