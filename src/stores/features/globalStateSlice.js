import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    page: 1,
    filter: '',
    genreId: '',
    sortBy: 'popularity.desc',
}

const globalStateSlice = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setGenreId: (state, action) => {
            state.genreId = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
    }
})

export const {
    setKeyword,
    setPage,
    setFilter,
    setGenreId,
    setSortBy
} = globalStateSlice.actions


export default globalStateSlice.reducer