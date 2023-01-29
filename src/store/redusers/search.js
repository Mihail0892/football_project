import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Data/data";
const myData = JSON.parse(localStorage.getItem("data"));
const favouritePlayers = JSON.parse(localStorage.getItem("favourite"));
const goldenBallPlayers = JSON.parse(localStorage.getItem("ball"));

const Search = createSlice({
  name: "search",
  initialState: {
    players: myData ? myData : Data,
    searchPlayers: [],
    favourite: favouritePlayers ? favouritePlayers : [],
    showClub: false,
    goldenBall:goldenBallPlayers?goldenBallPlayers: [],
  },
  reducers: {
    search: (state, action) => {
      const filteredData = state.players.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.searchPlayers = filteredData;
    },
    incSearch: (state, action) => {
      const findCount = state.players.find(
        (item) => item.id === action.payload
      );
      if (findCount) {
        ++findCount.likes;
        localStorage.setItem("data", JSON.stringify(state.players));
      }
    },
    decSearch: (state, action) => {
      const findCount = state.players.find(
        (item) => item.id === action.payload
      );
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
      state.searchPlayers = sortedData;
    },

    addToFavourite: (state, action) => {
      const isItemInFavoutite = state.favourite.find(
        (item) => item.idfoot === action.payload.idfoot
      );
      if (!isItemInFavoutite) {
        state.favourite.push(action.payload);
      }
      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },

    removeFromFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item.idfoot !== action.payload
      );
      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },

    showClub: (state, action) => {
      // Внести изменения в условие
      if (action.payload) state.showClub = !state.showClub;
      
    },

    showGolderBall: (state) => {
      const goldenBallList = state.players.filter(
        (item) => item.goldenBall === true
      );
      state.goldenBall = goldenBallList;
    },

    sortBall: (state) => {
      const sortedData = state.goldenBall.sort((a, b) =>
        a.quantityOfBalls > b.quantityOfBalls ? -1 : a.quantityOfBalls < b.quantityOfBalls ? 1 : 0
      );
      state.goldenBall = sortedData;
      localStorage.setItem("ball", JSON.stringify(state.goldenBall));
    },
  },
});

export default Search.reducer;
export const {
  search,
  sortBall,
  incSearch,
  decSearch,
  sortSearch,
  addToFavourite,
  removeFromFavourite,
  showClub,
  showGolderBall,
} = Search.actions;
