import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance, ENDPOINTS } from 'api';

export const getBackgroundIcons = createAsyncThunk(
  'boards/getBackgroundIcons',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.backgrounds);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
