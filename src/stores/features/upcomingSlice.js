import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import UpcomingMoviesAPI from "../../apis/upcoming.api"


const initialState = {
   data: [],
   status: "idle",
   error: null,
   loading: false
}

export const fetchUpcoming = createAsyncThunk("fetch/upcoming", async () => {
   try {
      const response = await UpcomingMoviesAPI.getUpcomingMovies();
      return response.data.results;
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
         .addCase(fetchUpcoming.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
         })
         .addCase(fetchUpcoming.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
   }
})

export default upcomingSlice.reducer;