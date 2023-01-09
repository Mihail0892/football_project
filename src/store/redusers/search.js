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
    incSearch: (state, action) => {
      const findCount = state.find((item) => item.id === action.payload);
      if (findCount) {
        ++findCount.likes;
        localStorage.setItem("data", JSON.stringify(state));
      }
    },
    decSearch: (state, action) => {
      const findCount = state.find((item) => item.id === action.payload);
      if (findCount) {
        --findCount.likes;
        localStorage.setItem("data", JSON.stringify(state));
      }
    },
    sortSearch: (state) => {
      const sortedData = state.sort((a, b) =>
        a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0
      );
      localStorage.setItem("data", JSON.stringify(state));
      return sortedData;
    },
  },
});

export default Search.reducer;
export const { search, incSearch, decSearch, sortSearch } = Search.actions;
