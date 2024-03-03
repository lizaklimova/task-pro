import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/task-pro/';

const setAuthorizationHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetAuthorizationHeader = () => {
  axios.defaults.headers.common.Authrization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/register', credentials);

      setAuthorizationHeader(data.token);
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials);

      setAuthorizationHeader(data.token);

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/logout');

    unsetAuthorizationHeader();
  } catch ({ message }) {
    thunkAPI.rejectWithValue(message);
  }
});
