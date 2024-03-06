// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addColumn,
//   deleteColumn,
//   editColumn,
//   fetchColumnsOfBoard,
// } from './columnsOperations';
// import { handlePending, handleRejected } from '../helpers';

// const columnsInitialState = {
//   columns: [],
//   isLoading: false,
//   error: null,
//   columnToEdit: null,
// };

// const columnsSlice = createSlice({
//   name: 'columns',
//   initialState: columnsInitialState,
//   reducers: {
//     setColumnToEditAction(state, { payload }) {
//       state.columnToEdit = payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchColumnsOfBoard.pending, handlePending)
//       .addCase(addColumn.pending, handlePending)
//       .addCase(editColumn.pending, handlePending)
//       .addCase(deleteColumn.pending, handlePending)
//       .addCase(fetchColumnsOfBoard.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.columns = payload;
//       })
//       .addCase(addColumn.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.boards.oneBoard.columns.unshift(payload);
//       })
//       .addCase(editColumn.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         const editedItemIndex = state.boards.oneBoard.columns.findIndex(
//           ({ _id }) => _id === payload._id
//         );
//         state.boards.oneBoard.columns = state.columns.with(
//           editedItemIndex,
//           payload
//         );
//       })
//       .addCase(deleteColumn.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;

//         state.boards.oneBoard.columns = state.boards.oneBoard.columns.filter(
//           ({ _id }) => _id !== payload._id
//         );
//       })
//       .addCase(fetchColumnsOfBoard.rejected, handleRejected)
//       .addCase(addColumn.rejected, handleRejected)
//       .addCase(editColumn.rejected, handleRejected)
//       .addCase(deleteColumn.rejected, handleRejected);
//   },
// });

// // export const {
// //   fetchColumnsOfBoardAction,
// //   addColumnAction,
// //   removeColumnAction,
// //   editColumnAction,
// //   setColumnToEditAction,
// // } = columnsSlice.actions;
// export const columnsReducer = columnsSlice.reducer;
