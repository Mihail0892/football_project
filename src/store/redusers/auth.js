import { createSlice } from "@reduxjs/toolkit";
const logStatus = JSON.parse(localStorage.getItem("isLogIn"));
const nickname=JSON.parse(localStorage.getItem("nickname"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogedIn: logStatus?logStatus: false,
    nickname:nickname?nickname:null,
  },
  reducers: {
    logIn: (state) => {
      state.isLogedIn = true;
      localStorage.setItem("isLogIn", JSON.stringify(state.isLogedIn));
    },
    logOut: (state)=>{
        state.isLogedIn = false;
        localStorage.setItem("isLogIn", JSON.stringify(state.isLogedIn));
        // localStorage.removeItem('nickname');
        state.nickname=null;
        localStorage.clear();
    },
    changeNickname:(state,action)=>{
      state.nickname=action.payload;
      localStorage.setItem("nickname", JSON.stringify(state.nickname));
    }
  },
});

export default authSlice.reducer;
export const {logIn, logOut,changeNickname} = authSlice.actions;
