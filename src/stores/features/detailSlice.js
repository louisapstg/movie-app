import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import DetailAPI from '../../apis/detail.api';

const initialState = {
    data: [],
    error: null,
    loading: false
}

export const getDetail = createAsyncThunk("detail", async ({ url, id }) => {
    try {
        const response = await DetailAPI.getDetailAPI(url, id);
        return response.data;
    } catch (e) {
        throw Error(e);
    }
})


const detailSlice = createSlice({
    name: 'details',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default detailSlice.reducer;
