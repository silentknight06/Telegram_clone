import { configureStore, createSlice } from "@reduxjs/toolkit";

const hamburgerSlice=createSlice({
      name:'hamburger',
      initialState:{
          flg:false,
          username:""
      },
      reducers:{
           setItem:(state, actions)=>{
              state.flg=!state.flg;
           },
           setname:(state, actions)=>{
             state.username=actions.payload;
           }
      }
})
export default hamburgerSlice.reducer;
export const {setItem, setname}=hamburgerSlice.actions;