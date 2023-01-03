import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Data/data";
const myData=JSON.parse(localStorage.getItem('data'));
console.log(myData,'myData');

const LikesAmount = createSlice({
  name: "amount",
  initialState: myData?myData:Data,
  reducers: {
    inc: (state, action) => {
      const findCount= state.find((item)=>item.id===action.payload)
      if (findCount){
        ++findCount.likes;
        localStorage.setItem("data", JSON.stringify(state));
      }

      // return state.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, likes: ++ item.likes };
      //   }
      //   localStorage.setItem("allLikes", JSON.stringify(state));
        
      //   return item;
      // });
      
    },

    dec: (state, action) => {
      // return state.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, likes: item.likes - 1 };
      //   }
      //   localStorage.setItem("allLikes", JSON.stringify(state));
      //   return item;
      // });
      const findCount= state.find((item)=>item.id===action.payload)
      if (findCount){
        --findCount.likes;
        localStorage.setItem("data", JSON.stringify(state));
      }
    },
  },
});

export default LikesAmount.reducer;
export const { inc, dec } = LikesAmount.actions;
