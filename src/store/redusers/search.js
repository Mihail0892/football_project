import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Data/data";
const myData = JSON.parse(localStorage.getItem("data"));

const Search = createSlice({
  name: "search",
  initialState: myData,
  reducers: {
    search: (state, action) => {
      const findPlayer = myData
        ? myData.filter((item) =>
            item.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        : Data.filter((item) =>
            item.name.toLowerCase().includes(action.payload.toLowerCase())
          );

      return findPlayer;
    },
  },
});

export default Search.reducer;
export const { search } = Search.actions;
