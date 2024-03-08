import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, editUser } from './authOperations';
import {
  handleRegLogFulfilled,
  handlePending,
  handleRejected,
} from '../helpers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(logIn.pending, handlePending)
      .addCase(logOut.pending, handlePending)
      .addCase(editUser.pending, handlePending)
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, handleRegLogFulfilled)
      .addCase(logIn.fulfilled, handleRegLogFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.user.avatar_url = payload.user.avatar_url;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
