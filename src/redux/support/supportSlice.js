import { createSlice } from '@reduxjs/toolkit';
import { support } from './support.js';
import { handlePending, handleRejected } from '../helpers';

const supportSlice = createSlice({
  name: 'support',
  initialState: {
    email: '',
    text: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(support.pending, handlePending)
      .addCase(support.fulfilled, (state, { payload }) => {
        state.email = payload;
        state.text = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(support.rejected, handleRejected);
  },
});

export const supportReducer = supportSlice.reducer;
