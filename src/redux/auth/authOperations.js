import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINTS, axiosInstance } from 'api';
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
      setAuthorizationHeader(data.user.tokenAccess);

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

      setAuthorizationHeader(data.user.tokenAccess);

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const refreshToken = state.auth.token;

  if (!refreshToken) {
    return thunkAPI.rejectWithValue('No refresh token');
  }

  try {
    await axiosInstance.post(ENDPOINTS.auth.logout, {
      refreshToken,
    });

    unsetAuthorizationHeader();
  } catch (error) {
    toast.error(error.response.data.message, TOASTER_CONFIG);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.users.current);

      return data.user;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editUser = createAsyncThunk(
  'user/editUser',
  async (dataUser, thunkAPI) => {
    const formData = new FormData();
    const { avatar_url, name, email, password } = dataUser;
    formData.append('avatar_url', avatar_url);
    formData.append('name', name);
    formData.append('email', email);
    if (password) {
      formData.append('password', password);
    }

    try {
      const { data } = await axiosInstance.patch('users/current', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
