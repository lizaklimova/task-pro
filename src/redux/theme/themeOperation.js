import { ENDPOINTS, axiosInstance } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTheme = createAsyncThunk(
  'users/getTheme',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.users.current);
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'users/updateTheme ',
  async (theme, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch('users/current/theme', theme);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
