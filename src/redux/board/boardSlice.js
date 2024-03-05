import { createSlice } from '@reduxjs/toolkit';
import {
  getBackgroundIcons,
  getAllBoards,
  createBoard,
  getOneBoard,
  filterBoard,
} from './boardOperations';
import { handlePending, handleRejected } from './helpers';

const boardsSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [],
    oneBoard: {},
    background: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getBackgroundIcons.pending, handlePending)
      .addCase(getAllBoards.pending, handlePending)
      .addCase(getOneBoard.pending, handlePending)
      .addCase(createBoard.pending, handlePending)
      .addCase(getBackgroundIcons.fulfilled, (state, action) => {
        state.background = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOneBoard.fulfilled, (state, action) => {
        state.oneBoard = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBackgroundIcons.rejected, handleRejected)
      .addCase(getAllBoards.rejected, handleRejected)
      .addCase(getOneBoard.rejected, handleRejected)
      .addCase(createBoard.rejected, handleRejected)
      .addCase(filterBoard.pending, handlePending)
      .addCase(filterBoard.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(filterBoard.rejected, handleRejected);
  },
});

export const boardsReducer = boardsSlice.reducer;
