import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import TvAPI from "../../apis/tv.api";


const initialState = {
   data: [],
   status: "idle",
   error: null,
   loading: false
}

export const fetchTvShow = createAsyncThunk("fetch/tvshow", async () => {
   try {
      const response = await TvAPI.getTvShow();
      return response.data.results;
   } catch (e) {
      throw Error(e)
   }
})

const tvShowSlice = createSlice({
   name: 'tvshow',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchTvShow.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchTvShow.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
         })
         .addCase(fetchTvShow.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
   }
})

export default tvShowSlice.reducer;