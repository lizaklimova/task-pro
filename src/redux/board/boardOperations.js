import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro-3a4o.onrender.com';
// axios.defaults.baseURL = 'http://localhost:5050';

export const getBackgroundIcons = createAsyncThunk(
  'boards/getBackgroundIcons',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/backgrounds');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
