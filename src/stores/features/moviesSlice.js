import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MoviesAPI from './../../apis/movies.api';


const initialState = {
   data: [],
   status: "idle",
   error: null,
   loading: false
}

export const fetchMovies = createAsyncThunk("fetch/movies", async () => {
   try {
      const response = await MoviesAPI.getMovies();
      return response.data.results;
   } catch (e) {
      throw Error(e)
   }
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
   }
})

export default moviesSlice.reducer;