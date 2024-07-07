import { configureStore } from "@reduxjs/toolkit";
import hamburgerSliceReducer from "./hamburgerSlice"

const appStore=configureStore({
     reducer:{
        hamburger:hamburgerSliceReducer
     },
});

export default appStore;