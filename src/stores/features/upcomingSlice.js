import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import UpcomingMoviesAPI from "../../apis/upcoming.api"


const initialState = {
    data: [],
    total_pages: 0,
    status: "idle",
    error: null,
    loading: false
}

export const fetchUpcoming = createAsyncThunk("fetch/upcoming", async (page) => {
    try {
        const response = await UpcomingMoviesAPI.getUpcomingMovies(page);
        return response.data;
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
                state.data = action.payload.results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(fetchUpcoming.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default upcomingSlice.reducer;