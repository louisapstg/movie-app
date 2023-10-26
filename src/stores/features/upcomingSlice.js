import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import UpcomingMoviesAPI from "../../apis/upcoming.api"


const initialState = {
   data: [],
   status: "idle",
   error: null,
   loading: false
}

export const fetchUpcoming = createAsyncThunk("fetch/upcoming", async (limit) => {
   try {
      const response = await UpcomingMoviesAPI.getUpcomingMovies(limit);
      return response.data.data;
   } catch (e) {
      throw Error(e)
   }
})

const upcomingSlice = createSlice({
   name: 'upcoming',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchUpcoming.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchUpcoming.fullfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
         })
         .addCase(fetchUpcoming.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
         })
   }
})

export default upcomingSlice.reducer;