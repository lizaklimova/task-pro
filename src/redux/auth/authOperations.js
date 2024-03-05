import { ENDPOINTS, axiosInstance } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthorizationHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetAuthorizationHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  ENDPOINTS.auth.register,
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.auth.register,
        credentials
      );

      setAuthorizationHeader(data.token);

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  ENDPOINTS.auth.login,
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.auth.login,
        credentials
      );

      setAuthorizationHeader(data.token);

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk(
  ENDPOINTS.auth.logout,
  async (_, thunkAPI) => {
    try {
      await axiosInstance.post(ENDPOINTS.auth.logout);

      unsetAuthorizationHeader();
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  ENDPOINTS.users.current,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('There is no user token');
    }

    setAuthorizationHeader(persistedToken);
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.users.current);

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);
