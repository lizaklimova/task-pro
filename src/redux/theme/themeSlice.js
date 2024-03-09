import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from '../helpers';
import { getTheme, updateTheme } from './themeOperation';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: '',
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(getTheme.pending, handlePending)
            .addCase(updateTheme.pending, handlePending)
            .addCase(getTheme.fulfilled, (state, { payload }) => {
                // console.log(state.theme);
                // console.log(payload);
                state.theme = payload.theme;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateTheme.fulfilled, (state, { payload }) => {
                // console.log(state.theme);
                // console.log(payload);
                state.isLoading = false;
                state.error = null;
                state.theme = payload.theme;
            })
            .addCase(getTheme.rejected, handleRejected)
            .addCase(updateTheme.rejected, handleRejected);
    }
});
export const themeReducer = themeSlice.reducer;