import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PopularMoviesAPI from './../../apis/popular.api';


const initialState = {
    data: [],
    total_pages: 0,
    status: "idle",
    error: null,
    loading: false
}

export const fetchPopular = createAsyncThunk("fetch/popular", async (page) => {
    try {
        const response = await PopularMoviesAPI.getPopularMovies(page)
        return response.data;
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
                state.data = action.payload.results;
                state.total_pages = action.payload.total_pages
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default popularSlice.reducer;