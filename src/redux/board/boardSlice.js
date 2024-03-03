import { createSlice } from '@reduxjs/toolkit';
import { getBackgroundIcons } from './boardOperations';

const boardsSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [],
    background: [],
  },
  extraReducers: builder => {
    builder.addCase(getBackgroundIcons.fulfilled, (state, action) => {
      state.background = action.payload;
    });
  },
});

export const boardsReducer = boardsSlice.reducer;
