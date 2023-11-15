import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PopularMoviesAPI from './../../apis/popular.api';


const initialState = {
   data: [],
   status: "idle",
   error: null,
   loading: false
}

export const fetchPopular = createAsyncThunk("fetch/popular", async () => {
   try {
      const response = await PopularMoviesAPI.getPopularMovies()
      return response.data.results;
   } catch (e) {
      throw Error(e)
   }
})

const popularSlice = createSlice({
   name: 'popular',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchPopular.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchPopular.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
         })
         .addCase(fetchPopular.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
   }
})

export default popularSlice.reducer;