import { createSlice } from '@reduxjs/toolkit';
import {
  getBackgroundIcons,
  getAllBoards,
  createBoard,
} from './boardOperations';
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
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBackgroundIcons.rejected, handleRejected)

      .addCase(getAllBoards.pending, handlePending)
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllBoards.rejected, handleRejected)

      .addCase(createBoard.pending, handlePending)
      .addCase(createBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createBoard.rejected, handleRejected);
  },
});

export const boardsReducer = boardsSlice.reducer;
