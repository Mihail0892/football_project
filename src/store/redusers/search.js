import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Data/data";
const myData = JSON.parse(localStorage.getItem("data"));

const Search = createSlice({
  name: "search",
  initialState:{
    players: myData ? myData : Data,
    searchPlayers:[]
  } ,
  reducers: {
    search: (state, action) => {
      const filteredData = state.players.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return filteredData;
    },
    incSearch: (state, action) => {
      const findCount = state.players.find((item) => item.id === action.payload);
      if (findCount) {
        ++findCount.likes;
        localStorage.setItem("data", JSON.stringify(state.players));
      }
    },
    decSearch: (state, action) => {
      const findCount = state.players.find((item) => item.id === action.payload);
      if (findCount) {
        --findCount.likes;
        localStorage.setItem("data", JSON.stringify(state.players));
      }
    },
    sortSearch: (state) => {
      const sortedData = state.players.sort((a, b) =>
        a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0
      );
      localStorage.setItem("data", JSON.stringify(state.players));
      state.searchPlayers= sortedData;
    },
  },
});

export default Search.reducer;
export const { search, incSearch, decSearch, sortSearch } = Search.actions;
