import { combineReducers } from "@reduxjs/toolkit";
import upcomingSlice from "./upcomingSlice";
import loaderFetchDataSlice from "./loaderFetchDataSlice";
import loaderSubmitSlice from "./loaderSubmitSlice";
import moviesSlice from "./moviesSlice";
import tvShowSlice from "./tvShowSlice";
import popularSlice from "./popularSlice";
import globalStateSlice from './globalStateSlice';
import detailSlice from "./detailSlice";

export const rootReducer = combineReducers({
    upcoming: upcomingSlice,
    movies: moviesSlice,
    tvshow: tvShowSlice,
    popular: popularSlice,
    loaderFetchData: loaderFetchDataSlice,
    loaderSubmit: loaderSubmitSlice,
    globalState: globalStateSlice,
    detailSlice: detailSlice,
})