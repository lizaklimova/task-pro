import { createSlice } from '@reduxjs/toolkit';
import { getBackgroundIcons } from './boardOperations';
import { handlePending, handleRejected } from './helpers';

const boardsSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [],
    background: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getBackgroundIcons.pending, handlePending)
      .addCase(getBackgroundIcons.fulfilled, (state, action) => {
        state.background = action.payload;
      })
      .addCase(getBackgroundIcons.rejected, handleRejected);
  },
});

export const boardsReducer = boardsSlice.reducer;
