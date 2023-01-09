import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {search} from "../../store/redusers/search";

const Search = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
   dispatch(search(e.target.value));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // dispatch(search(e.target.value));
    // setValue('');
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
        <input value={value} onChange={handleChange} />
      {/* </form> */}
    </div>
  );
};

export default Search;
