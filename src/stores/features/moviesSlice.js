import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MoviesAPI from './../../apis/movies.api';


const initialState = {
    data: [],
    genres: [],
    total_pages: 0,
    status: "idle",
    error: null,
    loading: false
}

export const fetchMovies = createAsyncThunk("fetch/movies", async (page) => {
    try {
        const response = await MoviesAPI.getMovies(page);
        return response.data;
    } catch (e) {
        throw Error(e)
    }
})

export const searchMovies = createAsyncThunk("fetch/movies/search", async (keyword, page) => {
    try {
        const response = await MoviesAPI.searchMovie(keyword, page);
        return response.data;
    } catch (e) {
        throw Error(e)
    }
})

export const genresMovies = createAsyncThunk("fetch/movies/genres", async () => {
    try {
        const response = await MoviesAPI.genresMovie()
        return response.data
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
                state.data = action.payload.results;
                state.total_pages = action.payload.total_pages
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(searchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.results;
                state.total_pages = action.payload.total_pages
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(genresMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(genresMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.genres = action.payload.genres;
            })
            .addCase(genresMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default moviesSlice.reducer;