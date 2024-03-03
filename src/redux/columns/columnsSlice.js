import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchColumnsOfBoard,
} from './operations';
import { handlePending, handleRejected } from './helpers';

const columnsInitialState = {
  columns: [],
  isLoading: false,
  error: null,
  columnToEdit: null,
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState: columnsInitialState,
  reducers: {
    setColumnToEditAction(state, action) {
      state.columnToEdit = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchColumnsOfBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = action.payload;
      })
      .addCase(fetchColumnsOfBoard.pending, handlePending)
      .addCase(fetchColumnsOfBoard.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns.unshift(action.payload);
      })
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedItemindex = state.columns.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.columns = state.columns.with(editedItemindex, action.payload);
      })
      .addCase(editColumn.pending, handlePending)
      .addCase(editColumn.rejected, handleRejected)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = state.columns.filter(
          ({ id }) => id !== action.payload.id
        );
      })
      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.rejected, handleRejected);
  },
});

export const {
  fetchColumnsOfBoard,
  addColumnAction,
  removeColumnAction,
  editColumnAction,
  setColumnToEditAction,
} = columnsSlice.actions;
export const columnsReducer = columnsSlice.reducer;
