import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import TvAPI from "../../apis/tv.api";


const initialState = {
    data: [],
    genres: [],
    total_pages: 0,
    status: "idle",
    error: null,
    loading: false
}

export const fetchTvShow = createAsyncThunk("fetch/tvshow", async ({ genreId, page, sortBy }) => {
    try {
        const response = await TvAPI.getTvShow(genreId, page, sortBy);
        return response.data;
    } catch (e) {
        throw Error(e)
    }
})

export const searchTvShow = createAsyncThunk("fetch/tvshow/search", async ({ keyword, page }) => {
    try {
        const response = await TvAPI.searchTvShow(keyword, page);
        return response.data;
    } catch (e) {
        throw Error(e)
    }
})

export const genresTvShow = createAsyncThunk("fetch/tvshow/genres", async () => {
    try {
        const response = await TvAPI.genresTV()
        return response.data
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
                state.data = action.payload.results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(fetchTvShow.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(searchTvShow.pending, (state) => {
                state.status = "loading";
            })
            .addCase(searchTvShow.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(searchTvShow.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(genresTvShow.pending, (state) => {
                state.status = "loading";
            })
            .addCase(genresTvShow.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.genres = action.payload.genres;
            })
            .addCase(genresTvShow.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default tvShowSlice.reducer;