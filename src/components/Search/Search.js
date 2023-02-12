import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/redusers/search";
import { Link, useLocation } from "react-router-dom";

import styles from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = useState("");

  const players = useSelector((state) => state.Search.players);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/search") {
      setValue("");
    }
    setValue("");
  }, [players, location]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <div>
      <Link to="/search">
        <input
          placeholder="Пошук гравця..."
          className={styles.search}
          value={value}
          onChange={handleChange}
        />
      </Link>
    </div>
  );
};

export default Search;
