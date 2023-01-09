import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Data/data";
const myData = JSON.parse(localStorage.getItem("data"));

const LikesAmount = createSlice({
  name: "amount",
  initialState: myData ? myData : Data,
  reducers: {
    inc: (state, action) => {
      const findCount = state.find((item) => item.id === action.payload);
      if (findCount) {
        ++findCount.likes;
        localStorage.setItem("data", JSON.stringify(state));
      }
    },

    dec: (state, action) => {
      const findCount = state.find((item) => item.id === action.payload);
      if (findCount) {
        --findCount.likes;
        localStorage.setItem("data", JSON.stringify(state));
      }
    },

    sort: (state) => {
      const sortedData = state.sort((a, b) =>
        a.likes > b.likes ? -1 : a.likes < b.likes ? 1 : 0
      );
      localStorage.setItem("data", JSON.stringify(state));
      return sortedData;
    },
  },
});

export default LikesAmount.reducer;
export const { inc, dec, sort } = LikesAmount.actions;
