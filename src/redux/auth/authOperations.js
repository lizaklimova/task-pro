import { ENDPOINTS, axiosInstance } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { TOASTER_CONFIG } from 'constants';

const setAuthorizationHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetAuthorizationHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.auth.register,
        credentials
      );

      setAuthorizationHeader(data.user.token);

      return data;
    } catch (error) {
      toast.error(error.response.data.message, TOASTER_CONFIG);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.auth.login,
        credentials
      );

      setAuthorizationHeader(data.user.token);

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosInstance.post(ENDPOINTS.auth.logout);

    unsetAuthorizationHeader();
  } catch (error) {
    toast.error(error.response.data.message, TOASTER_CONFIG);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('There is no user token');
    }

    try {
      setAuthorizationHeader(persistedToken);
      const { data } = await axiosInstance.get(ENDPOINTS.users.current);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
