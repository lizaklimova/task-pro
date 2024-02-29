import { createSlice } from '@reduxjs/toolkit';

const authInitState = {
  board: {},
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: () => {},
});

export const authReducer = auth.reducer;
