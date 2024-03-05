import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchColumnsOfBoard,
} from './operations';
import { handlePending, handleRejected } from '../helpers';

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
      .addCase(fetchColumnsOfBoard.pending, handlePending)
      .addCase(addColumn.pending, handlePending)
      .addCase(editColumn.pending, handlePending)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(fetchColumnsOfBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = action.payload;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns.unshift(action.payload);
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedItemIndex = state.columns.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.columns = state.columns.with(editedItemIndex, action.payload);
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = state.columns.filter(
          ({ id }) => id !== action.payload.id
        );
      })
      .addCase(fetchColumnsOfBoard.rejected, handleRejected)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(editColumn.rejected, handleRejected)
      .addCase(deleteColumn.rejected, handleRejected);
  },
});

// export const {
//   fetchColumnsOfBoard,
//   addColumnAction,
//   removeColumnAction,
//   editColumnAction,
//   setColumnToEditAction,
// } = columnsSlice.actions;
export const columnsReducer = columnsSlice.reducer;
