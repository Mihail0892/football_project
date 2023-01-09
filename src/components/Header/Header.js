import React, { useEffect } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../store/redusers/count";
import { sortSearch } from "../../store/redusers/search";

const Header = () => {
  const dispatch = useDispatch();
  const sortData = useSelector((state) => state.LikesAmount);
  const searchData = useSelector((state) => state.Search);

  
  useEffect(() => {
    dispatch(sort(),sortSearch());
  }, [dispatch, sortData,searchData]);

  return (
    <div className={styles.header}>
      <Search />
    </div>
  );
};

export default Header;
