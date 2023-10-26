import { combineReducers } from "@reduxjs/toolkit";
import upcomingSlice from "./upcomingSlice";

export const rootReducer = combineReducers({
   upcoming: upcomingSlice
})